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
      <FeedbackManagementTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        @on-status-changed="fetchTableData()"
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

    <!-- 创建弹框 -->
    <FeedbackManagementDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import FeedbackManagementSearch from './components/FeedbackManagementSearch'
import FeedbackManagementTable from './components/FeedbackManagementTable'
import FeedbackManagementDialogCreate from './components/FeedbackManagementDialogCreate'

export default {
  name: 'WebsiteFeedbackManagement',
  components: {
    SearchLayout,
    BaseAdd,
    FeedbackManagementSearch,
    FeedbackManagementTable,
    FeedbackManagementDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchWebsiteFeedbackList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
