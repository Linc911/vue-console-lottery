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
      <RolesSettingTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        @on-status-change="fetchTableData()"
        :data="tableData"
      />
    </div>

    <!-- 创建弹框 -->
    <RolesSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithoutPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import RolesSettingTable from './components/RolesSettingTable'
import RolesSettingDialogCreate from './components/RolesSettingDialogCreate'

export default {
  name: 'SystemUsersSetting',
  components: {
    SearchLayout,
    BaseAdd,
    RolesSettingTable,
    RolesSettingDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchSystemRolesList',
      requestParams: {}
    }
  }
}
</script>
