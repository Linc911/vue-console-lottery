<template lang="html">

  <div>
    <!-- 检索栏 -->
    <BalanceManipulationSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <BalanceManipulationTable @on-changed="fetchTableData()" :data="tableData" />

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

import BalanceManipulationSearch from './BalanceManipulationSearch'
import BalanceManipulationTable from './BalanceManipulationTable'

export default {
  name: 'BalanceManipulationListChecked',
  components: {
    BalanceManipulationSearch,
    BalanceManipulationTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchFinanceBalanceManipulation',
      requestParams: { pageNo: 1, pageSize: 10, status: '2,3' },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
