<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane v-for="game in games" :key="game.name" :label="game.name" :name="String(game.id)" />
    </el-tabs>

    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <PlanSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <PlanTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <DialogCreate @on-created="handleCreatedNewItem" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import PlanSearch from './components/Search'
import PlanTable from './components/Table'
import DialogCreate from './components/DialogCreate'

export default {
  name: 'RebatePlanLists',
  components: {
    PlanSearch,
    PlanTable,
    DialogCreate
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  data () {
    return {
      games: [],
      activeTab: '',
      tableHttpAPI: 'fetchRebateSettingList',
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
    // 当创建一个新的返水计划，切换到对应的游戏列表中
    handleCreatedNewItem (payload) {
      this.activeTab = String(payload.gameConfigId)

      this.requestParams.gameConfigId = this.activeTab
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
