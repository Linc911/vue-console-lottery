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
      <SettingTypeTable @on-changed="fetchTableData()" :data="tableData" />

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
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import SettingTypeSearch from './components/SettingTypeSearch'
import SettingTypeTable from './components/SettingTypeTable'
import SettingTypeDialogCreate from './components/SettingTypeDialogCreate'

export default {
  name: 'NoticeSettingType',
  components: {
    SettingTypeSearch,
    SettingTypeTable,
    SettingTypeDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchNoticeSettingTypeList',
      requestParams: { pageNo: 1, pageSize: 10, type: 4 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
