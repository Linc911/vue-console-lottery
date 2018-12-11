<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane v-for="game in tableData" :key="game.name" :label="game.name" :name="game.name" />
    </el-tabs>

    <!-- 表格 -->
    <LotteryOpenTable @on-status-changed="fetchTableData()" :data="realTableData" />
  </div>
</template>

<script>
import LotteryOpenTable from './components/LotteryOpenTable'

export default {
  name: 'SystemLotteryOpen',
  components: {
    LotteryOpenTable
  },
  data () {
    return {
      realTableData: [],
      activeTab: '',
      activeTabIndex: 0,
      tableData: [],
      tableHttpAPI: 'fetchGamesMenu',
      requestParams: {}
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      this.activeTabIndex = tab.index
      this.realTableData = this.tableData[tab.index].children
    },
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI](this.requestParams).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
          this.activeTab = this.tableData[this.activeTabIndex].name

          this.realTableData = this.tableData[this.activeTabIndex].children
        } else {
          this.tableData = []
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
