<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 表格 -->
    <GroupSettingTable @on-changed="fetchTableData()" :data="tableData" />

    <!-- 创建弹框 -->
    <GroupSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutWithoutSearchMixin, tableWithoutPaginationMixin } from '@/mixins'

import GroupSettingTable from './components/GroupSettingTable'
import GroupSettingDialogCreate from './components/GroupSettingDialogCreate'

export default {
  name: 'SystemGroupSetting',
  components: {
    GroupSettingTable,
    GroupSettingDialogCreate
  },
  mixins: [ searchLayoutWithoutSearchMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchUserGroups',
      requestParams: { pageNo: 1, pageSize: 1000 }
    }
  }
}
</script>
