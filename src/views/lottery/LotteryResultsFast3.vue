<template lang="html">
  <section class="results-fast3">
    <el-table
      :data="tableData"
      :max-height="745"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column prop="drawno" label="期号" />

      <el-table-column label="骰子点数" :min-width="200">
        <template slot-scope="scope">
          <BaseDice :number="Number(scope.row.ball1[0])" />
          <BaseDice :number="Number(scope.row.ball2[0])" />
          <BaseDice :number="Number(scope.row.ball3[0])" />
        </template>
      </el-table-column>

      <el-table-column prop="ballSum" label="总和">
        <template slot-scope="scope">
          <span>{{scope.row.ballSum.join(' ')}}</span>
        </template>
      </el-table-column>

      <el-table-column label="围骰">
        <template slot-scope="scope">
          <span>{{Number(scope.row.all[0]) | diceRepeat}}</span>
        </template>
      </el-table-column>

      <el-table-column label="结算状态">
        <template slot-scope="scope">
          <span>{{scope.row.status | lotteryStatus}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="240">
        <template slot-scope="scope">
          <el-button @click="CheckoutManual(scope.row)" type="primary" size="mini">手动结算</el-button>
          <!-- <el-button @click="showTip" type="primary" size="mini">开奖详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">注单详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">修改配置</el-button>
          <el-button @click="showTip" type="primary" size="mini">删除开盘</el-button> -->
          <el-button v-if="scope.row.status !== 2" @click="cancelOrder" type="primary" size="mini">撤单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <BasePagination
      @on-change="handlePaginationChange"
      :pageTotal="pageTotal"
      :requestParams="{ type: this.$route.params.gameId }"
      httpURL="fetchLotteryResultsFast3"
    />
    <!-- 手工结算弹框 -->
    <el-dialog :visible.sync="dialogVisible" title="手工结算" width="500px">
      <el-form v-if="dialogVisible" :model="dialogFormData" label-width="100px" size="small">
        <el-form-item label="游戏期号">
          <el-input :value="dialogFormData.drawno" disabled />
        </el-form-item>
        <!-- <el-form-item label="游戏类型">
          <el-input :value="formData.type" disabled />
        </el-form-item> -->
        <el-form-item label="第一球">
          <el-input v-model="dialogFormData.ball1" />
        </el-form-item>
        <el-form-item label="第二球">
          <el-input v-model="dialogFormData.ball2" />
        </el-form-item>
        <el-form-item label="第三球">
          <el-input v-model="dialogFormData.ball3" />
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="confirmMuaulChange" type="primary" size="small">确定修改</el-button>
      </span>
    </el-dialog>

    <!-- 撤单弹框 -->
    <el-dialog :visible.sync="dialogCancelVisible" title="撤单确认" width="400px">
      <el-form :model="dialogCancelForm" label-width="100px" size="small">
        <el-form-item label="游戏类型">
          <el-input value="快3" disabled />
        </el-form-item>
        <el-form-item label="游戏期号">
          <el-input v-model="dialogCancelForm.drawno" type="number" placeholder="游戏期号" />
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="confirmCancelOrder" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import BaseDice from '@/components/base/BaseDice'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'LotteryResultsFast3',
  components: {
    BaseDice,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      dialogVisible: false,
      dialogFormData: {
        drawno: '', ball1: '', ball2: '', ball3: ''
      },
      dialogCancelVisible: false,
      dialogCancelForm: { drawno: '', type: 7 }
    }
  },
  watch: {
    $route () {
      this.getLotteryResults()
    }
  },
  created () {
    this.getLotteryResults()
  },
  methods: {
    CheckoutManual (result) {
      const { drawno, ball1, ball2, ball3 } = result
      this.dialogFormData = {
        drawno,
        type: 7,
        ball1: ball1.toString(),
        ball2: ball2.toString(),
        ball3: ball3.toString()
      }

      this.dialogVisible = true
    },
    confirmMuaulChange () {
      this.$httpAPI.updateLotteryResultFast3({
        params: this.dialogFormData
      }).then(() => {
        this.dialogVisible = false
        this.getLotteryResults()
      })
        .catch(error => console.log(error))
    },
    cancelOrder () {
      this.dialogCancelVisible = true
    },
    confirmCancelOrder () {
      this.$httpAPI.cancelLotteryResultFast3({
        params: this.dialogCancelForm
      }).then(response => {
        if (response.data.status === -100) {
          this.$message.warning(response.data.msg)
        } else if (response.data.status === 200) {
          this.$message.success('撤单操作成功！')
        }

        this.dialogCancelVisible = false
      }).catch(error => console.log(error))
    },
    // 分页变化时，更新数据
    handlePaginationChange (payload) {
      this.tableData = payload
    },
    // 获取快3开奖数据
    getLotteryResults () {
      this.$httpAPI.fetchLotteryResultsFast3({
        params: { type: this.$route.params.gameId, pageNo: 1, pageSize: 10 }
      }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
