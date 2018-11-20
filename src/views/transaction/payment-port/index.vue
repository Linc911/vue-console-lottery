<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <PaymentPortSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <PaymentPortTable
        :data="tableData"
        @on-updated="fetchTableData()"
        @on-status-change="fetchTableData()"
      />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 创建弹框 -->
    <PaymentPortDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationPostMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import PaymentPortSearch from './components/PaymentPortSearch'
import BaseAdd from '@/components/base/BaseAdd'
import PaymentPortTable from './components/PaymentPortTable'
import PaymentPortDialogCreate from './components/PaymentPortDialogCreate'

export default {
  name: 'TransactionPaymentType',
  components: {
    SearchLayout,
    PaymentPortSearch,
    BaseAdd,
    PaymentPortTable,
    PaymentPortDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationPostMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchTransactionPaymentPort',
      requestParams: {},
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
