<template lang="html">
  <div class="deposit-form">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 条件筛选 -->
    <SearchLayout>
      <template slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </template>
    </SearchLayout>

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <PaymentTypeTable @on-updated="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 创建新支付类型弹框 -->
    <PaymentTypeDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { breadcrumbMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import PaymentTypeTable from './components/PaymentTypeTable'
import PaymentTypeDialogCreate from './components/PaymentTypeDialogCreate'

export default {
  name: 'TransactionPaymentType',
  components: {
    SearchLayout,
    BaseAdd,
    PaymentTypeTable,
    PaymentTypeDialogCreate
  },
  mixins: [ breadcrumbMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchTransactionPaymentType',
      requestParams: {},
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
