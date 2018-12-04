<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <PermissionsSettingSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 表格 -->
    <PermissionsSettingTable
      @on-updated="fetchTableData()"
      @on-deleted="fetchTableData()"
      :data="tableData"
    />

    <!-- 创建弹框 -->
    <PermissionsSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithoutPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import PermissionsSettingSearch from './components/PermissionsSettingSearch'
import PermissionsSettingTable from './components/PermissionsSettingTable'
import PermissionsSettingDialogCreate from './components/PermissionsSettingDialogCreate'

export default {
  name: 'SystemPermissionsSetting',
  components: {
    SearchLayout,
    BaseAdd,
    PermissionsSettingSearch,
    PermissionsSettingTable,
    PermissionsSettingDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchSystePermissionsList',
      requestParams: {}
    }
  }
}
</script>
