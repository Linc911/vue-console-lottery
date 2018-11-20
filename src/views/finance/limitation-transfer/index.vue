<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <LimitationTransferSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <LimitationTransferTable :data="tableData" />

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

import LimitationTransferSearch from './components/LimitationTransferSearch'
import LimitationTransferTable from './components/LimitationTransferTable'

export default {
  name: 'FinanceLimitationTransfer',
  components: {
    LimitationTransferSearch,
    LimitationTransferTable
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchFinanceLimitationTransfer',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
