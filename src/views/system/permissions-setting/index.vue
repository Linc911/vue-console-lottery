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
    <PermissionsSettingTable @on-changed="fetchTableData()" :data="tableData" />

    <!-- 创建弹框 -->
    <PermissionsSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithoutPaginationMixin } from '@/mixins'

import PermissionsSettingSearch from './components/PermissionsSettingSearch'
import PermissionsSettingTable from './components/PermissionsSettingTable'
import PermissionsSettingDialogCreate from './components/PermissionsSettingDialogCreate'

export default {
  name: 'SystemPermissionsSetting',
  components: {
    PermissionsSettingSearch,
    PermissionsSettingTable,
    PermissionsSettingDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchSystePermissionsList',
      requestParams: {}
    }
  }
}
</script>
