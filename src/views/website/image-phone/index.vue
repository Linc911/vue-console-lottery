<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <ImagePhoneSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <ImagePhoneTable
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
    <ImagePhoneDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import ImagePhoneSearch from './components/ImagePhoneSearch'
import ImagePhoneTable from './components/ImagePhoneTable'
import ImagePhoneDialogCreate from './components/ImagePhoneDialogCreate'

export default {
  name: 'WebsiteImagePhone',
  components: {
    SearchLayout,
    BaseAdd,
    ImagePhoneSearch,
    ImagePhoneTable,
    ImagePhoneDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchWebsiteImagePhoneList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
