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

      <el-table-column prop="" label="结算状态" />

      <el-table-column label="操作" :min-width="300">
        <template slot-scope="scope">
          <el-button @click="showTip" type="primary" size="mini">手动结算</el-button>
          <el-button @click="showTip" type="primary" size="mini">开奖详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">注单详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">修改配置</el-button>
          <el-button @click="showTip" type="primary" size="mini">删除开盘</el-button>
          <el-button @click="showTip" type="primary" size="mini">已结撤单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <BasePagination
      @on-change="handlePaginationChange"
      :pageTotal="pageTotal"
      :requestParams="{ type: this.$route.params.id }"
      httpURL="fetchLotteryResultsEleven"
    />
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
      pageTotal: 0
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
    showTip () {
      this.$message.warning('该功能正在开发中...')
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
