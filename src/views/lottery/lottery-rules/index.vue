<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <LotteryRulesSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <LotteryRulesTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
        :page="page"
      />
    </div>

    <!-- 创建弹框 -->
    <LotteryRulesDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import LotteryRulesSearch from './components/LotteryRulesSearch'
import LotteryRulesTable from './components/LotteryRulesTable'
import LotteryRulesDialogCreate from './components/LotteryRulesDialogCreate'

export default {
  name: 'LotteryRulesList',
  components: {
    LotteryRulesSearch,
    LotteryRulesTable,
    LotteryRulesDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchLotteryRulesList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  }
}
</script>
