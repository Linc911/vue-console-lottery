<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <UserBetsSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <UserBetsTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        httpMethod="post"
        :requestParams="requestParams"
      />
    </div>
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationPostMixin } from '@/mixins'

import UserBetsSearch from './components/UserBetsSearch'
import UserBetsTable from './components/UserBetsTable'

export default {
  name: 'UserBets',
  components: {
    UserBetsSearch,
    UserBetsTable
  },
  mixins: [ searchOuterMixin, tableWithPaginationPostMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchUserBetsList',
      requestParams: { id: this.$route.params.id, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
