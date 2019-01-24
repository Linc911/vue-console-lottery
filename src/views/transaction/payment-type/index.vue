<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <template slot="left">
        <PaymentTypeSearch @on-search="handleSearch" />
      </template>

      <template slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </template>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <PaymentTypeTable @on-changed="fetchTableData()" :data="tableData"/>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <PaymentTypeDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import PaymentTypeSearch from './components/PaymentTypeSearch'
import PaymentTypeTable from './components/PaymentTypeTable'
import PaymentTypeDialogCreate from './components/PaymentTypeDialogCreate'

export default {
  name: 'TransactionPaymentType',
  components: {
    PaymentTypeSearch,
    PaymentTypeTable,
    PaymentTypeDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchTransactionPaymentType',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
