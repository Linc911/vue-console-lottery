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
      <WithdrawAccountTable @on-changed="fetchTableData()" :data="tableData" />
    </div>

    <!-- 创建弹框 -->
    <WithdrawAccountDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithoutPaginationMixin } from '@/mixins'

import WithdrawAccountSearch from './components/WithdrawAccountSearch'
import WithdrawAccountTable from './components/WithdrawAccountTable'
import WithdrawAccountDialogCreate from './components/WithdrawAccountDialogCreate'

export default {
  name: 'TransactionWithdrawAccount',
  components: {
    WithdrawAccountSearch,
    WithdrawAccountTable,
    WithdrawAccountDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchWithdrawAccountList',
      requestParams: {}
    }
  }
}
</script>
