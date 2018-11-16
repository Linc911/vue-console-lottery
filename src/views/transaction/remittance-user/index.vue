<template lang="html">
  <div class="remittance-user">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <PaymentLineSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div class="content-container">
      <!-- 表格 -->
      <UserRemittanceTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        :data="tableData"
      />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 创建新支付路线弹框 -->
    <UserRemittanceDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { breadcrumbMixin, searchOuterMixin, tableWithPaginationPostMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import PaymentLineSearch from './components/PaymentLineSearch'
import BaseAdd from '@/components/base/BaseAdd'
import UserRemittanceTable from './components/UserRemittanceTable'
import UserRemittanceDialogCreate from './components/UserRemittanceDialogCreate'

export default {
  name: 'TransactionRemittanceUser',
  components: {
    SearchLayout,
    PaymentLineSearch,
    BaseAdd,
    UserRemittanceTable,
    UserRemittanceDialogCreate
  },
  mixins: [ breadcrumbMixin, searchOuterMixin, tableWithPaginationPostMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchTransactionRemittance',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
