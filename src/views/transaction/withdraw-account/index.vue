<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <WithdrawAccountSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <WithdrawAccountTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        :data="tableData"
      />
    </div>

    <!-- 创建弹框 -->
    <WithdrawAccountDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithoutPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import WithdrawAccountSearch from './components/WithdrawAccountSearch'
import WithdrawAccountTable from './components/WithdrawAccountTable'
import WithdrawAccountDialogCreate from './components/WithdrawAccountDialogCreate'

export default {
  name: 'TransactionWithdrawAccount',
  components: {
    SearchLayout,
    BaseAdd,
    WithdrawAccountSearch,
    WithdrawAccountTable,
    WithdrawAccountDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchTransactionWithdrawAccountList',
      requestParams: { type: 5 }
    }
  }
}
</script>
