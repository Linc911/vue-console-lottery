<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <PerformanceLinearSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <!-- <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" /> -->
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <PerformanceLinearTable @on-changed="fetchTableData()" :data="tableData" />

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
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import PerformanceLinearSearch from './components/PerformanceLinearSearch'
import PerformanceLinearTable from './components/PerformanceLinearTable'

export default {
  name: 'AgentPerformanceLinear',
  components: {
    PerformanceLinearSearch,
    PerformanceLinearTable
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchAgentPerformanceList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
