<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <WebsiteStandbySearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <WebsiteStandbyTable
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
    <WebsiteStandbyDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import WebsiteStandbySearch from './components/WebsiteStandbySearch'
import WebsiteStandbyTable from './components/WebsiteStandbyTable'
import WebsiteStandbyDialogCreate from './components/WebsiteStandbyDialogCreate'

export default {
  name: 'WebsiteStandby',
  components: {
    WebsiteStandbySearch,
    WebsiteStandbyTable,
    WebsiteStandbyDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchWebsiteStandbyList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
