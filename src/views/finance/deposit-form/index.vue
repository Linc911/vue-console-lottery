<template lang="html">
  <div class="deposit-form">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 检索栏 -->
    <DepositFormSearch @on-search="handleSearch" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="填单存款待审核列表" name="unchecked" />
      <el-tab-pane label="填单存款待确定列表" name="unconfirmed" />
      <el-tab-pane label="填单存款已审核列表" name="checked" />
    </el-tabs>

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <DepositFormTable :data="tableData" @on-show="showDialogAudit" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchBalanceChangeList"
      />
    </div>

    <!-- 审核弹框 -->
    <DepositFormDialog @on-success="handleStatusChange" :formData="currentItem" ref="dialogDepositForm" />
  </div>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import DepositFormSearch from './components/DepositFormSearch'
import DepositFormTable from './components/DepositFormTable'
import BasePagination from '@/components/base/BasePagination'
import DepositFormDialog from './components/DepositFormDialog'

export default {
  name: 'FinanceDepositForm',
  components: {
    BaseBreadcrumb,
    DepositFormSearch,
    DepositFormTable,
    BasePagination,
    DepositFormDialog
  },
  data () {
    return {
      activeTab: 'unchecked', // 当前活动菜单
      tableData: [],
      pageTotal: 0,
      requestParams: { status: 0 },
      currentItem: {} // 当前选中的数据
    }
  },
  created () {
    this.fetchBalanceChangeList()
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      switch (tab.name) {
        case 'unchecked':
          this.requestParams.status = 0
          this.fetchBalanceChangeList()
          break
        case 'unconfirmed':
          this.requestParams.status = 1
          this.fetchBalanceChangeList()
          break
        case 'checked':
          this.requestParams.status = '2,3'
          this.fetchBalanceChangeList()
          break
        default:
          this.requestParams = {}
      }
    },
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchBalanceChangeList()
    },
    // 显示审批加减款表单弹框
    showDialogAudit (payload) {
      this.currentItem = payload
      this.$refs.dialogDepositForm.toggleDialogVisible(true)
    },
    // 审批状态改变时，更新在本地更新页面数据
    handleStatusChange (payload) {
      this.tableData = this.$_.filter(this.tableData, item => item.changeId !== payload.changeId)
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchBalanceChangeList () {
      this.$httpAPI.fetchBalanceChangeList({ params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams) }).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }

        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
