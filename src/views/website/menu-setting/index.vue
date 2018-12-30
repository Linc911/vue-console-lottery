<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <MenuSettingSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <MenuSettingTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <MenuSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import MenuSettingSearch from './components/MenuSettingSearch'
import MenuSettingTable from './components/MenuSettingTable'
import MenuSettingDialogCreate from './components/MenuSettingDialogCreate'

export default {
  name: 'WebsiteMenuSetting',
  components: {
    MenuSettingSearch,
    MenuSettingTable,
    MenuSettingDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchWebsiteMenuList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
