<template lang="html">
  <section class="results-eleven">
    <el-table
      :data="tableData"
      :max-height="745"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column prop="gameName" label="彩票类型" />

      <el-table-column prop="drawno" label="期号" :min-width="90" />

      <el-table-column prop="dateTime" label="开奖时间" :min-width="140" />

      <el-table-column label="彩球号码" :min-width="200">
        <template slot-scope="scope">
          <LotteryBall :number="Number(scope.row.ball1[0])" />
          <LotteryBall :number="Number(scope.row.ball2[0])" />
          <LotteryBall :number="Number(scope.row.ball3[0])" />
          <LotteryBall :number="Number(scope.row.ball4[0])" />
          <LotteryBall :number="Number(scope.row.ball5[0])" />
        </template>
      </el-table-column>

      <el-table-column prop="ballSum" label="总和" :min-width="110">
        <template slot-scope="scope">
          <span>{{scope.row.ballSum.join(' ')}}</span>
        </template>
      </el-table-column>

      <el-table-column label="龙虎" :width="40">
        <template slot-scope="scope">
          <span>{{scope.row.dragonTiger.toString()}}</span>
        </template>
      </el-table-column>

      <el-table-column label="结算状态">
        <template slot-scope="scope">
          <span>{{scope.row.status | lotteryStatus}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
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
      httpURL="fetchLotteryResultsEleven"
    />

    <!-- 手工结算弹框 -->
    <el-dialog :visible.sync="dialogVisible" title="手工结算" width="500px">
      <el-form :model="dialogFormData" label-width="100px" size="small">
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
        <el-form-item label="第四球">
          <el-input v-model="dialogFormData.ball4" />
        </el-form-item>
        <el-form-item label="第五球">
          <el-input v-model="dialogFormData.ball5" />
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="confirmMuaulChange" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>

    <!-- 撤单弹框 -->
    <el-dialog :visible.sync="dialogCancelVisible" title="撤单确认" width="400px">
      <el-form :model="dialogCancelForm" label-width="100px" size="small">
        <el-form-item label="游戏类型">
          <el-input value="11选5" disabled />
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
import LotteryBall from '@/components/base/LotteryBall'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'LotteryResultsEleven',
  components: {
    LotteryBall,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      activeResult: null,
      dialogVisible: false,
      dialogFormData: {
        drawno: '', type: 3, ball1: '', ball2: '', ball3: '', ball4: '', ball5: ''
      },
      dialogCancelVisible: false,
      dialogCancelForm: { drawno: '', type: 3 }
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
      const { drawno, ball1, ball2, ball3, ball4, ball5 } = result
      this.dialogFormData = {
        drawno,
        type: 3,
        ball1: Number(ball1[0]),
        ball2: Number(ball2[0]),
        ball3: Number(ball3[0]),
        ball4: Number(ball4[0]),
        ball5: Number(ball5[0])
      }
      this.dialogVisible = true
    },
    confirmMuaulChange () {
      this.$httpAPI.updateLotteryResultEleven({
        params: this.dialogFormData
      }).then(() => {
        this.dialogVisible = false
        this.getLotteryResults()
      }).catch(error => console.log(error))
    },
    cancelOrder () {
      this.dialogCancelVisible = true
    },
    confirmCancelOrder () {
      this.$httpAPI.cancelLotteryResultEleven({
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
    // 获取开奖结果
    getLotteryResults () {
      this.$httpAPI.fetchLotteryResultsEleven({
        params: { type: this.$route.params.gameId, pageNo: 1, pageSize: 10 }
      }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
