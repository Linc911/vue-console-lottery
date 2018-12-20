<template lang="html">
  <div>
    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <InterestGameTable @on-changed="fetchTableData()" :data="tableData" />
    </div>
  </div>
</template>

<script>
import { tableWithoutPaginationMixin } from '@/mixins'

import InterestGameTable from './components/InterestGameTable'

export default {
  name: 'AgentInterestGame',
  components: {
    InterestGameTable
  },
  mixins: [ tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchAgentInterestGame',
      requestParams: { pageNo: 1, pageSize: 10, type: 6 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
