<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane v-for="game in games" :key="game.name" :label="game.name" :name="String(game.id)" />
    </el-tabs>

    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <RebateSettingSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <RebateSettingTable
        @on-updated="fetchTableData()"
        @on-deleted="fetchTableData()"
        :data="tableData"
      />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 创建弹框 -->
    <RebateSettingDialogCreate @on-created="handleCreatedNewItem" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import RebateSettingSearch from './components/RebateSettingSearch'
import BaseAdd from '@/components/base/BaseAdd'
import RebateSettingTable from './components/RebateSettingTable'
import RebateSettingDialogCreate from './components/RebateSettingDialogCreate'

export default {
  name: 'RebateSettingList',
  components: {
    SearchLayout,
    RebateSettingSearch,
    BaseAdd,
    RebateSettingTable,
    RebateSettingDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      games: [],
      activeTab: '',
      tableData: [],
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
