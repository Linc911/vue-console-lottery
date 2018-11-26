<template lang="html">
  <div>
    <!-- 彩票分类菜单 -->
    <aside class="aside-menu">
      <ResultsGamesMenu @on-change="handleMenuChange" :menu="menu" :gameType="'3'" />
    </aside>

    <!-- 主要内容 -->
    <div class="content-container">
      <!-- 一级菜单切换栏 -->
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane v-for="item in tableData" :key="item.type" :label="item.name" :name="item.type" />
      </el-tabs>

      <!-- 二级菜单切换栏 -->
      <el-tabs v-if="subtabVisible" type="card" v-model="activeSubtab" @tab-click="handleSubtabClick">
        <el-tab-pane v-for="item in subGame" :key="item.type" :label="item.name" :name="item.type" />
      </el-tabs>

      <!-- 表格 -->
      <LotteryOddsTable @on-updated="fetchTableData()" :data="finalData" />
      <!-- <component @on-updated="fetchTableData()" :is="activeComponent" :data="tableData"></component> -->
    </div>
  </div>
</template>

<script>
import { tableWithPaginationPostMixin } from '@/mixins'

import ResultsGamesMenu from './components/ResultsGamesMenu'
import LotteryOddsTable from './components/LotteryOddsTable'

export default {
  name: 'LotteryResult',
  components: {
    ResultsGamesMenu,
    LotteryOddsTable
  },
  mixins: [ tableWithPaginationPostMixin ],
  data () {
    return {
      activeComponent: 'OddsEleven',
      menu: [],
      tableData: [],
      tableHttpAPI: 'fetchLotterOddsList',
      requestParams: { gameType: 3 },
      tabIndex: 0,
      subtabIndex: 0
    }
  },
  computed: {
    subtabVisible () {
      if (!this.tableData.length) {
        return false
      }
      if (this.tableData[this.tabIndex].children[0].children === null) {
        return false
      } else {
        return true
      }
    },
    subGame () {
      if (this.tableData.length) {
        return this.tableData[this.tabIndex].children
      }
      return []
    },
    activeTab: {
      get () {
        if (this.tableData.length) {
          return this.tableData[this.tabIndex].type
        }
        return '1'
      },
      set () {
      }
    },
    activeSubtab: {
      get () {
        if (!this.tableData.length) {
          return '1.1'
        }
        return this.tableData[this.tabIndex].children[0].type
      },
      set () {
      }
    },
    finalData () {
      if (!this.tableData.length) {
        return []
      }
      // if (this.data[this.tabIndex].children === null) {
      //   return []
      // }
      // if (this.data[this.tabIndex].children[this.subtabIndex].children === null) {
      //   return []
      // }
      if (this.subtabVisible) {
        return this.tableData[this.tabIndex].children[this.subtabIndex].children
      } else {
        return this.tableData[this.tabIndex].children
      }
    }
  },
  created () {
    this.getGamesMenu()
  },
  methods: {
    // 一级菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      this.tabIndex = tab.index
    },
    // 二级菜单切换；根据不同的菜单更新对应数据
    handleSubtabClick (tab) {
      this.subtabIndex = tab.index
    },
    // 侧边栏游戏切换： 初始化一、二级菜单；请求新数据
    handleMenuChange ({ groupId, itemId }) {
      this.tabIndex = 0
      this.subtabIndex = 0

      this.requestParams = { gameType: itemId, pageNo: 1, pageSize: 10 }
      this.fetchTableData()
    },
    getGamesMenu () {
      this.$httpAPI.fetchGamesMenu().then(response => {
        this.menu = response.data.data
      }).catch(error => console.log(error))
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
  padding-left: 220px;
}
</style>
