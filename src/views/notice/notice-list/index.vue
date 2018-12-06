<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <UsersSettingSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <!-- <ActivityListTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        @on-status-change="fetchTableData()"
        :data="tableData"
      /> -->

      <!-- 分页 -->
      <!-- <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      /> -->
    </div>

    <!-- 创建弹框 -->
    <ActivityListDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import UsersSettingSearch from './components/UsersSettingSearch'
import ActivityListTable from './components/ActivityListTable'
import ActivityListDialogCreate from './components/ActivityListDialogCreate'

export default {
  name: 'ActivityList',
  components: {
    SearchLayout,
    BaseAdd,
    UsersSettingSearch,
    ActivityListTable,
    ActivityListDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchActivityList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
