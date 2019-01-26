<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane v-for="game in games" :key="game.name" :label="game.name" :name="String(game.id)" />
    </el-tabs>

    <!-- 条件筛选 -->
    <RecordSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <RecordTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>
  </div>
</template>

<script>
import { searchLayoutWithoutAddMixin, tableWithPaginationMixin } from '@/mixins'

import RecordSearch from './components/Search'
import RecordTable from './components/Table'

export default {
  name: 'ReateRecordList',
  components: {
    RecordSearch,
    RecordTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      games: [],
      activeTab: '',
      tableHttpAPI: 'fetchRebateLogsList',
      requestParams: { gameConfigId: 0, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  created () {
    this.fetchGameClasses()
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      this.activeTab = tab.name

      this.requestParams.gameConfigId = tab.name
      this.requestParams.pageNo = 1
      this.fetchTableData()
    },
    fetchGameClasses () {
      this.$httpAPI.fetchGameClasses().then(response => {
        this.games = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>
