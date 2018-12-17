<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <WithdrawTypeSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <WithdrawTypeTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        :data="tableData"
      />
    </div>

    <!-- 创建弹框 -->
    <WithdrawTypeDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithoutPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import WithdrawTypeSearch from './components/WithdrawTypeSearch'
import WithdrawTypeTable from './components/WithdrawTypeTable'
import WithdrawTypeDialogCreate from './components/WithdrawTypeDialogCreate'

export default {
  name: 'TransactionWithdrawType',
  components: {
    SearchLayout,
    BaseAdd,
    WithdrawTypeSearch,
    WithdrawTypeTable,
    WithdrawTypeDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchWithdrawAccountTypeList',
      requestParams: { type: 5 }
    }
  }
}
</script>
