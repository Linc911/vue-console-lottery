<template lang="html">
  <div>
    <!-- 检索栏 -->
    <ResultsSearch @on-search="handleSearch" ref="resultsSearch" />

    <div>
      <!-- 彩票分类菜单 -->
      <aside class="aside-menu">
        <GamesMenu @on-change="handleMenuChange" :gameType="'3'" />
      </aside>

      <!-- 主要内容 -->
      <div class="content-container">
        <!-- 表格 -->
        <component :is="activeComponent" :data="tableData" />

        <!-- 分页 -->
        <BasePagination
          @on-change="handlePaginationChange"
          :page="page"
          httpMethod="post"
          :requestParams="requestParams"
          :httpURL="tableHttpAPI"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationPostMixin } from '@/mixins'

import ResultsSearch from './components/ResultsSearch'
import GamesMenu from '@/components/global/GamesMenu'
import ResultsPK10Table from './components/table/ResultsPK10Table'
import ResultsElevenTable from './components/table/ResultsElevenTable'
import ResultsFast3Table from './components/table/ResultsFast3Table'

export default {
  name: 'LotteryResults',
  components: {
    ResultsSearch,
    GamesMenu,
    ResultsPK10Table,
    ResultsElevenTable,
    ResultsFast3Table
  },
  data () {
    return {
      activeComponent: 'ResultsElevenTable',
      tableData: [],
      tableHttpAPI: 'fetchLotteryResultsList',
      requestParams: { gameType: 3, pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  },
  mixins: [ searchOuterMixin, tableWithPaginationPostMixin ],
  methods: {
    handleMenuChange ({ groupId, itemId }) {
      this.requestParams = { gameType: itemId, pageNo: 1, pageSize: 10 }
      this.$refs.resultsSearch.reset()

      switch (groupId) {
        case 18:
          console.log('pk10')
          this.activeComponent = 'ResultsPK10Table'
          this.fetchTableData()
          break
        case 23:
          this.tableData = []
          break
        case 29:
          this.tableData = []
          break
        case 33:
          this.tableData = []
          break
        case 2:
          this.activeComponent = 'ResultsFast3Table'
          this.fetchTableData()
          break
        case 1:
          this.activeComponent = 'ResultsElevenTable'
          this.fetchTableData()
          break
        case 39:
          this.tableData = []
          break
        default:
          this.tableData = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-menu {
  float: left;
  width: 200px;
  height: 100%;
  background-color: #fff;
}
.content-container {
  padding-left: 200px;
}
</style>
