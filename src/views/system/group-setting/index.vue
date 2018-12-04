<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 表格 -->
    <GroupSettingTable
      @on-updated="fetchTableData()"
      @on-deleted="fetchTableData()"
      :data="tableData"
    />

    <!-- 创建弹框 -->
    <GroupSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { tableWithoutPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import GroupSettingTable from './components/GroupSettingTable'
import GroupSettingDialogCreate from './components/GroupSettingDialogCreate'

export default {
  name: 'SystemGroupSetting',
  components: {
    SearchLayout,
    BaseAdd,
    GroupSettingTable,
    GroupSettingDialogCreate
  },
  mixins: [ tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchUserGroups',
      requestParams: { pageNo: 1, pageSize: 1000 }
    }
  }
}
</script>
