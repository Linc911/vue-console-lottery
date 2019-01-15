<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SixBetsSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <SixBetsTable :data="tableData" />

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

import SixBetsSearch from './components/SixBetsSearch'
import SixBetsTable from './components/SixBetsTable'

export default {
  name: 'MarkSixBetsList',
  components: {
    SixBetsSearch,
    SixBetsTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchSixBetsList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
