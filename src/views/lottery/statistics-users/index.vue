<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <StatisticsUsersSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 统计汇总 -->
      <ul class="statistics-summary clearfix">
        <li class="pull-left">合计： 注单数量：【{{ statistics.totalBets }}】</li>
        <li class="pull-left">下注金额：【{{ statistics.totalAmount | RMB }}】</li>
        <li class="pull-left">未结算金额：{{ statistics.unsettled | RMB }}】</li>
        <li class="pull-left">净输赢：【{{ statistics.totalAwardAmount | RMB }}】</li>
      </ul>

      <!-- 表格 -->
      <StatisticsUsersTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import StatisticsUsersSearch from './components/StatisticsUsersSearch'
import StatisticsUsersTable from './components/StatisticsUsersTable'

export default {
  name: 'LottoryStatisticsUsers',
  components: {
    StatisticsUsersSearch,
    StatisticsUsersTable
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      statistics: { totalBets: '', totalAmount: '', unsettled: '', totalAwardAmount: '' },
      tableData: [],
      tableHttpAPI: 'fetchLotterStatisticsUsers',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>

<style lang="scss" scoped>
.statistics-summary {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
