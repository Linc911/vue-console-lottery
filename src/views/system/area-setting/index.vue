<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <AreaSettingSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <AreaSettingTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        @on-status-change="fetchTableData()"
        :data="tableData"
      />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
        httpMethod="post"
      />
    </div>

    <!-- 创建弹框 -->
    <AreaSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import AreaSettingSearch from './components/AreaSettingSearch'
import BaseAdd from '@/components/base/BaseAdd'
import AreaSettingTable from './components/AreaSettingTable'
import AreaSettingDialogCreate from './components/AreaSettingDialogCreate'

export default {
  name: 'SystemAreaSetting',
  components: {
    SearchLayout,
    AreaSettingSearch,
    BaseAdd,
    AreaSettingTable,
    AreaSettingDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchSystemAreaListTree',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
