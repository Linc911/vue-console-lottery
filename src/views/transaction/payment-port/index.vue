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
      <PaymentPortTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <PaymentPortDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationPostMixin } from '@/mixins'

import PaymentPortSearch from './components/PaymentPortSearch'
import PaymentPortTable from './components/PaymentPortTable'
import PaymentPortDialogCreate from './components/PaymentPortDialogCreate'

export default {
  name: 'TransactionPaymentPort',
  components: {
    PaymentPortSearch,
    PaymentPortTable,
    PaymentPortDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationPostMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchTransactionPaymentPort',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
