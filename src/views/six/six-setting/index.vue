<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SixSettingSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <SixSettingTable @on-changed="fetchTableData()" :data="tableData" />
    </div>
  </div>
</template>

<script>
import { searchLayoutWithoutAddMixin, tableWithoutPaginationMixin } from '@/mixins'

import SixSettingSearch from './components/SixSettingSearch'
import SixSettingTable from './components/SixSettingTable'

export default {
  name: 'MarkSixSetting',
  components: {
    SixSettingSearch,
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
