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
    </el-table>
    <!-- 分页 -->
    <BasePagination
      @on-change="handlePaginationChange"
      :pageTotal="pageTotal"
      :requestParams="{ type: this.$route.params.id }"
      httpURL="fetchLotteryResultsFast3"
    />
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
    // 分页变化时，更新数据
    handlePaginationChange (payload) {
      this.tableData = payload
    },
    // 获取快3开奖数据
    getLotteryResults (page) {
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
