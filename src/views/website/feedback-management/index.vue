<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <FeedbackManagementSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <FeedbackManagementTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <FeedbackManagementDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import FeedbackManagementSearch from './components/FeedbackManagementSearch'
import FeedbackManagementTable from './components/FeedbackManagementTable'
import FeedbackManagementDialogCreate from './components/FeedbackManagementDialogCreate'

export default {
  name: 'WebsiteFeedbackManagement',
  components: {
    FeedbackManagementSearch,
    FeedbackManagementTable,
    FeedbackManagementDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchWebsiteFeedbackList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
