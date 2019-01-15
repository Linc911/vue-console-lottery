<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <!-- <LogsListSearch @on-search="handleSearch" /> -->

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <SixSettingTable @on-changed="fetchTableData()" :data="tableData" />
    </div>
  </div>
</template>

<script>
import { searchLayoutWithoutAddMixin, tableWithoutPaginationMixin } from '@/mixins'

// import LogsListSearch from './components/LogsListSearch'
import SixSettingTable from './components/SixSettingTable'

export default {
  name: 'MarkSixSetting',
  components: {
    // LogsListSearch,
    SixSettingTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchSixSettingList',
      requestParams: {}
    }
  }
}
</script>
