<template lang="html">
  <section class="users-list">
    <!-- 条件筛选 -->
    <UsersListSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <UsersListTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>
  </section>
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
    syncGroupData (payload) {
      this.$_.forEach(this.tableData, item => {
        if (String(item.id) === payload.userId) {
          item.groupIds = payload.value
          item.groupNames = payload.label
        }
      })
    }
  }
}
</script>
