<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <!-- <SettingTypeSearch @on-search="handleSearch" /> -->
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <SettingTypeTable
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
    <SettingTypeDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import SettingTypeSearch from './components/SettingTypeSearch'
import SettingTypeTable from './components/SettingTypeTable'
import SettingTypeDialogCreate from './components/SettingTypeDialogCreate'

export default {
  name: 'NoticeSettingType',
  components: {
    SearchLayout,
    BaseAdd,
    SettingTypeSearch,
    SettingTypeTable,
    SettingTypeDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchNoticeSettingTypeList',
      requestParams: { pageNo: 1, pageSize: 10, type: 4 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
