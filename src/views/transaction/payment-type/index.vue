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
    <div class="table-list">
      <!-- 表格 -->
      <PaymentTypeTable
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
    <PaymentTypeDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import PaymentTypeSearch from './components/PaymentTypeSearch'
import BaseAdd from '@/components/base/BaseAdd'
import PaymentTypeTable from './components/PaymentTypeTable'
import PaymentTypeDialogCreate from './components/PaymentTypeDialogCreate'

export default {
  name: 'TransactionPaymentType',
  components: {
    SearchLayout,
    PaymentTypeSearch,
    BaseAdd,
    PaymentTypeTable,
    PaymentTypeDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchTransactionPaymentType',
      requestParams: { pageNo: 1, pageSize: 20 },
      page: { current: 1, size: 20, total: 10 }
    }
  }
}
</script>
