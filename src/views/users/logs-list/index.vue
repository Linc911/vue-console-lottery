<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <LogsListSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <LogsListTable @on-changed="fetchTableData()" :data="tableData" />

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
import { searchLayoutWithoutAddMixin, tableWithPaginationMixin } from '@/mixins'

import LogsListSearch from './components/LogsListSearch'
import LogsListTable from './components/LogsListTable'

export default {
  name: 'UsersLogsList',
  components: {
    LogsListSearch,
    LogsListTable
  },
  mixins: [ tableWithPaginationMixin, searchLayoutWithoutAddMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchUsersLogsList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
