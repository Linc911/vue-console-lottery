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
        <LotteryResultsTable @on-changed="fetchTableData()" :data="tableData" :rules="gameRules" />

        <!-- 分页 -->
        <BasePagination
          @on-change="handlePaginationChange"
          :page="page"
          :httpURL="tableHttpAPI"
          :requestParams="requestParams"
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
      gameRules: {
        balls: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
        ballNum: 5,
        repeat: 0
      },
      tableHttpAPI: 'fetchLotteryResultsList',
      requestParams: { gameType: 3, pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  methods: {
    // 处理侧边游戏菜单点击事件
    handleMenuChange ({ groupId, itemId, item }) {
      // 获取每种游戏的开奖规则，传入子组件
      let { ballNum, balls, repeat } = item
      Object.assign(this.gameRules, { ballNum, balls, repeat })

      this.$refs.resultsSearch.reset() // 清空搜索条件

      this.requestParams = { gameType: itemId, pageNo: 1, pageSize: 10 }
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
