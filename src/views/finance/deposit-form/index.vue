<template lang="html">
  <div>
    <!-- 检索栏 -->
    <DepositFormSearch @on-search="handleSearch" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="填单存款待审核列表" name="unchecked" />
      <el-tab-pane label="填单存款已审核列表" name="checked" />
    </el-tabs>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <DepositFormTable @on-changed="fetchTableData()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>
  </div>
</template>

<script>
import { searchLayoutWithoutAddMixin, tableWithPaginationMixin } from '@/mixins'

import DepositFormSearch from './components/DepositFormSearch'
import DepositFormTable from './components/DepositFormTable'
import DepositFormDialog from './components/DepositFormDialog'

export default {
  name: 'FinanceDepositForm',
  components: {
    DepositFormSearch,
    DepositFormTable,
    DepositFormDialog
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      activeTab: 'unchecked', // 当前活动菜单
      tableHttpAPI: 'fetchFinanceDepositForm',
      page: { current: 0, size: 10, total: 10 },
      requestParams: { status: 0, pageNo: 1, pageSize: 10 }
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
