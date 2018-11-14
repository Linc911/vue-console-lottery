<template lang="html">
  <div class="remittance-shortcut">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <RemittanceShortcutSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <RemittanceShortcutTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 创建弹框 -->
    <RemittanceShortcutDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { breadcrumbMixin, searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import RemittanceShortcutSearch from './components/RemittanceShortcutSearch'
import BaseAdd from '@/components/base/BaseAdd'
import RemittanceShortcutTable from './components/RemittanceShortcutTable'
import RemittanceShortcutDialogCreate from './components/RemittanceShortcutDialogCreate'

export default {
  name: 'TransactionRemittanceShortcut',
  components: {
    SearchLayout,
    RemittanceShortcutSearch,
    BaseAdd,
    RemittanceShortcutTable,
    RemittanceShortcutDialogCreate
  },
  mixins: [ breadcrumbMixin, searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchTransactionRemittanceShortcut',
      requestParams: {},
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
