<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="客户提款待审核列表" name="unchecked" />
      <el-tab-pane label="客户提款已审核列表" name="checked" />
    </el-tabs>

    <!-- 条件筛选 -->
    <WithdrawApplySearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <WithdrawApplyTable @on-changed="fetchTableData()" :data="tableData" />

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

import WithdrawApplySearch from './components/WithdrawApplySearch'
import WithdrawApplyTable from './components/WithdrawApplyTable'

export default {
  name: 'FinanceWithdrawApply',
  components: {
    WithdrawApplySearch,
    WithdrawApplyTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      activeTab: 'unchecked',
      tableHttpAPI: 'fetchFinanceWithdrawApply',
      requestParams: { pageNo: 1, pageSize: 10, status: 0 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      this.page.current = 1 // 回到第一页

      if (tab.name === 'unchecked') {
        this.requestParams.status = 0
      } else {
        this.requestParams = Object.assign(this.requestParams, { pageNo: 1, status: '2,3' })
      }

      this.fetchTableData()
    }
  }
}
</script>
