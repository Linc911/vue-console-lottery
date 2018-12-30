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
      <ImagePhoneTable @on-changed="fetchTableData()" :data="tableData"/>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <ImagePhoneDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import ImagePhoneSearch from './components/ImagePhoneSearch'
import ImagePhoneTable from './components/ImagePhoneTable'
import ImagePhoneDialogCreate from './components/ImagePhoneDialogCreate'

export default {
  name: 'WebsiteImagePhone',
  components: {
    ImagePhoneSearch,
    ImagePhoneTable,
    ImagePhoneDialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchWebsiteImagePhoneList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
