<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <UsersListSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <UsersListTable @on-changed="fetchTableData()" @on-sort="handleSortChange" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>
  </div>
</template>

<script>
import { searchLayoutWithoutAddMixin, tableWithPaginationMixin } from '@/mixins'

import UsersListSearch from './components/UsersListSearch'
import UsersListTable from './components/UsersListTable'

export default {
  name: 'UsersList',
  components: {
    UsersListSearch,
    UsersListTable
  },
  mixins: [ tableWithPaginationMixin, searchLayoutWithoutAddMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchUsersList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  methods: {
    // 改变分组选择项时，同步数据到列表
    handleSortChange (orderType) {
      // 重置到第一页
      this.$set(this.page, 'current', 1)
      // 带上请求顺序参数
      this.$set(this.requestParams, 'orderType', orderType)
      this.fetchTableData()
    }
  }
}
</script>
