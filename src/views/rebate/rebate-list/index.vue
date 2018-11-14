<template lang="html">
  <div>
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="创建加减款请求" name="creating" />
      <el-tab-pane label="加减款待审核列表" name="unchecked" />
      <el-tab-pane label="加减款已审核列表" name="checked" />
    </el-tabs>

    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <RemittanceShortcutSearch @on-search="handleSearch" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <RemittanceShortcutTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 创建弹框 -->
    <RemittanceShortcutDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { breadcrumbMixin, searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import RemittanceShortcutSearch from './components/RemittanceShortcutSearch'
import BaseAdd from '@/components/base/BaseAdd'
import RemittanceShortcutTable from './components/RemittanceShortcutTable'
import RemittanceShortcutDialogCreate from './components/RemittanceShortcutDialogCreate'

export default {
  name: 'TransactionRemittanceShortcut',
  components: {
    SearchLayout,
    RemittanceShortcutSearch,
    BaseAdd,
    RemittanceShortcutTable,
    RemittanceShortcutDialogCreate
  },
  mixins: [ breadcrumbMixin, searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      games: [],
      activeTab: 'creating',
      tableData: [],
      tableHttpAPI: 'fetchTransactionRemittanceShortcut',
      requestParams: {},
      page: { current: 1, size: 10, total: 10 }
    }
  },
  created () {
    this.fetchGameClasses()
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      // switch (tab.name) {
      //   case 'creating':
      //     this.currentTabComponent = 'BalanceManipulationForm'
      //     break
      //   case 'unchecked':
      //     this.currentTabComponent = 'BalanceManipulationListUnchecked'
      //     break
      //   case 'checked':
      //     this.currentTabComponent = 'BalanceManipulationListChecked'
      //     break
      //   default:
      //     this.currentTabComponent = 'BalanceManipulationForm'
      // }
    },
    fetchGameClasses () {
      this.$httpAPI.fetchGameClasses().then(response => {
        this.games = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>
