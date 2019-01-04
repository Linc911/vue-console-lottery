<template lang="html">
  <div>
    <!-- 检索栏 -->
    <DepositOnlineSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <DepositOnlineTable :data="tableData" />

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

import DepositOnlineSearch from './components/DepositOnlineSearch'
import DepositOnlineTable from './components/DepositOnlineTable'

export default {
  name: 'FinanceDepositOnline',
  components: {
    DepositOnlineSearch,
    DepositOnlineTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchFinanceDepositOnline',
      page: { current: 0, size: 10, total: 10 },
      requestParams: { pageNo: 1, pageSize: 10 }
    }
  }
}
</script>
