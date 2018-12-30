<template lang="html">
  <div>
    <!-- 检索栏 -->
    <LotteryResultsSearch @on-search="handleSearch" ref="resultsSearch" />

    <div>
      <!-- 彩票分类菜单 -->
      <aside class="aside-menu">
        <GamesMenu @on-change="handleMenuChange" :gameType="'3'" />
      </aside>

      <!-- 主要内容 -->
      <div class="content-container">
        <!-- 表格 -->
        <LotteryResultsTable @on-changed="fetchTableData()" :data="tableData" />

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
import { searchLayoutWithoutAddMixin, tableWithPaginationMixin } from '@/mixins'

import GamesMenu from '@/components/global/GamesMenu'
import LotteryResultsSearch from './components/LotteryResultsSearch'
import LotteryResultsTable from './components/LotteryResultsTable'

export default {
  name: 'LotteryResults',
  components: {
    GamesMenu,
    LotteryResultsSearch,
    LotteryResultsTable
  },
  data () {
    return {
      tableHttpAPI: 'fetchLotteryResultsList',
      requestParams: { gameType: 3, pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  methods: {
    handleMenuChange ({ groupId, itemId }) {
      this.requestParams = { gameType: itemId, pageNo: 1, pageSize: 10 }
      this.$refs.resultsSearch.reset()

      this.fetchTableData()
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
