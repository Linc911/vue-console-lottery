<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <RolesSettingTable @on-changed="fetchTableData()" :data="tableData" />
    </div>

    <!-- 创建弹框 -->
    <RolesSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutWithoutSearchMixin, tableWithoutPaginationMixin } from '@/mixins'

import RolesSettingTable from './components/RolesSettingTable'
import RolesSettingDialogCreate from './components/RolesSettingDialogCreate'

export default {
  name: 'SystemUsersSetting',
  components: {
    RolesSettingTable,
    RolesSettingDialogCreate
  },
  mixins: [ searchLayoutWithoutSearchMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchSystemRolesList',
      requestParams: {}
    }
  }
}
</script>
