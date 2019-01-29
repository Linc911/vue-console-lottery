<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <!-- <RemittanceUserSearch @on-search="handleSearch" /> -->
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <RemittanceUserTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建新支付路线弹框 -->
    <RemittanceUserDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import RemittanceUserSearch from './components/RemittanceUserSearch'
import RemittanceUserTable from './components/RemittanceUserTable'
import RemittanceUserDialogCreate from './components/RemittanceUserDialogCreate'

export default {
  name: 'TransactionRemittanceUser',
  components: {
    RemittanceUserSearch,
    RemittanceUserTable,
    RemittanceUserDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchTransactionRemittance',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
