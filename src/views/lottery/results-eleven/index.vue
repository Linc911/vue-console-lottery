<template lang="html">
  <div class="results-eleven">
    <!-- 检索栏 -->
    <ResultsElevenSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <ResultsElevenTable @on-handwork-completed="fetchLotteryResultsEleven()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="{ type: this.$route.params.gameId }"
        httpURL="fetchLotteryResultsEleven"
      />
    </div>
  </div>
</template>

<script>
import ResultsElevenTable from './components/ResultsElevenTable'
import ResultsElevenSearch from './components/ResultsElevenSearch'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'LotteryResultsEleven',
  components: {
    ResultsElevenTable,
    ResultsElevenSearch,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      requestParams: {}
    }
  },
  watch: {
    $route () {
      this.fetchLotteryResultsEleven()
    }
  },
  created () {
    this.fetchLotteryResultsEleven()
  },
  methods: {
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchLotteryResultsEleven()
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    // 获取开奖结果
    fetchLotteryResultsEleven () {
      this.$httpAPI.fetchLotteryResultsEleven({
        params: Object.assign({ type: this.$route.params.gameId, pageNo: 1, pageSize: 10 }, this.requestParams)
      }).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }

        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
