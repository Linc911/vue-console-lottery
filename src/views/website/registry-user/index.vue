<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <!-- <RegistryUserSearch @on-search="handleSearch" /> -->
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <RegistryUserTable
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
    <RegistryUserDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import RegistryUserSearch from './components/RegistryUserSearch'
import RegistryUserTable from './components/RegistryUserTable'
import RegistryUserDialogCreate from './components/RegistryUserDialogCreate'

export default {
  name: 'WebsiteRegistryUser',
  components: {
    SearchLayout,
    BaseAdd,
    RegistryUserSearch,
    RegistryUserTable,
    RegistryUserDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchWebsiteRegistryUserList',
      requestParams: { type: 3, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
