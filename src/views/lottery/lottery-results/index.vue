<template lang="html">
  <div>
    <!-- 检索栏 -->
    <LotteryResultsSearch @on-search="handleSearch" ref="resultsSearch" />

    <div>
      <!-- 彩票分类菜单 -->
      <aside class="aside-menu">
        <GamesMenu @on-loaded="handleLoaded" @on-change="handleMenuChange" :gameType="'19'" />
      </aside>

      <!-- 主要内容 -->
      <div class="content-container">
        <!-- 表格 -->
        <LotteryResultsTable
          v-if="tableShow"
          @on-changed="fetchTableData()"
          :data="tableData"
          :rules="gameRules"
        />

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
      gameRules: {},
      tableShow: false,
      tableHttpAPI: 'fetchLotteryResultsList',
      requestParams: { gameType: 19, pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  methods: {
    // 等侧边的游戏列表请求数据完成后，获取到当前游戏种类再渲染表格
    // 保证 gameRules 带上数据
    handleLoaded ({ balls, ballNum, repeat }) {
      this.gameRules = { balls, ballNum, repeat }
      this.tableShow = true
    },
    // 处理侧边游戏菜单点击事件
    handleMenuChange ({ balls, ballNum, repeat, type }) {
      // 获取每种游戏的开奖规则，传入子组件
      this.gameRules = { ballNum, balls, repeat }

      this.$refs.resultsSearch.reset() // 清空搜索条件

      this.requestParams = { gameType: type, pageNo: 1, pageSize: 10 }
      this.fetchTableData()
    }
  }
}
</script>

<style scoped>
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
