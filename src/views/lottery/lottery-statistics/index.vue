<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <LotteryStatisticsSearch @on-search="handleSearch" />

    <!-- 表格 -->
    <LotteryStatisticsTable :data="tableData" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithoutPaginationMixin } from '@/mixins'

import LotteryStatisticsSearch from './components/LotteryStatisticsSearch'
import LotteryStatisticsTable from './components/LotteryStatisticsTable'

export default {
  name: 'LotteryStatistics',
  components: {
    LotteryStatisticsSearch,
    LotteryStatisticsTable
  },
  mixins: [ searchOuterMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchLotterStatistics',
      requestParams: {}
    }
  }
}
</script>
