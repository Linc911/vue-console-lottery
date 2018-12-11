<template lang="html">
  <div>
    <!-- 彩票分类菜单 -->
    <aside class="aside-menu">
      <GamesMenu @on-change="handleMenuChange" :gameType="'3'" />
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

      <!-- 三级菜单切换栏 -->
      <!-- <el-tabs v-if="this.tableData" v-model="a" @tab-click="handleSubtabClick">
        <el-tab-pane v-for="level1 in this.tableData" :key="level1.type" :label="level1.name" :name="level1.type" />
      </el-tabs> -->

      <!-- 表格 -->
      <LotteryOddsTable @on-updated="fetchTableData()" :data="finalData" />
    </div>
  </div>
</template>

<script>
import { tableWithoutPaginationPostMixin } from '@/mixins'

import GamesMenu from '@/components/global/GamesMenu'
import LotteryOddsTable from './components/LotteryOddsTable'

export default {
  name: 'LotteryResults',
  components: {
    GamesMenu,
    LotteryOddsTable
  },
  mixins: [ tableWithoutPaginationPostMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchLotterOddsList',
      requestParams: { gameType: 3 },
      tabIndex: 0,
      subtabIndex: 0,
      a: ''
    }
  },
  computed: {
    // 一级菜单当前活动的 tab
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
    // 二级菜单当前活动的 tab
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
    // 二级菜单是否显示 Boolean值
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
    // 二级菜单对象
    subGame () {
      if (this.tableData.length) {
        return this.tableData[this.tabIndex].children
      }
      return []
    },
    // 传入table组件对象
    finalData () {
      if (!this.tableData.length) {
        return []
      }
      if (this.subtabVisible) {
        return this.tableData[this.tabIndex].children[this.subtabIndex].children
      } else {
        return this.tableData[this.tabIndex].children
      }
    }
  },
  methods: {
    // 一级菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      this.tabIndex = tab.index
      this.subtabIndex = 0 // 马上改变二级菜单的下标 否则报错
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
