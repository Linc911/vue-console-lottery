<template lang="html">
  <div class="deposit-form">
    <!-- 检索栏 -->
    <DepositFormSearch @on-search="handleSearch" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="填单存款待审核列表" name="unchecked" />
      <el-tab-pane label="填单存款已审核列表" name="checked" />
    </el-tabs>

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <DepositFormTable :data="tableData" @on-show="showDialogAudit" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        httpURL="fetchFinanceDepositForm"
      />
    </div>

    <!-- 审核弹框 -->
    <DepositFormDialog @on-success="handleStatusChange" :formData="currentItem" ref="dialogDepositForm" />
  </div>
</template>

<script>
import DepositFormSearch from './components/DepositFormSearch'
import DepositFormTable from './components/DepositFormTable'
import BasePagination from '@/components/base/BasePagination'
import DepositFormDialog from './components/DepositFormDialog'

export default {
  name: 'FinanceDepositForm',
  components: {
    DepositFormSearch,
    DepositFormTable,
    BasePagination,
    DepositFormDialog
  },
  data () {
    return {
      activeTab: 'unchecked', // 当前活动菜单
      tableData: [],
      page: { current: 0, size: 10, total: 10 },
      requestParams: { status: 0 },
      currentItem: {} // 当前选中的数据
    }
  },
  created () {
    this.fetchFinanceDepositForm()
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      switch (tab.name) {
        case 'unchecked':
          this.requestParams.status = 0
          this.fetchFinanceDepositForm()
          break
        case 'checked':
          this.requestParams = Object.assign(this.requestParams, { pageNo: 1, status: '2,3' })
          this.fetchFinanceDepositForm()
          break
        default:
          this.requestParams = {}
      }
    },
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchFinanceDepositForm()
    },
    // 显示审批加减款表单弹框
    showDialogAudit (payload) {
      this.currentItem = payload
      this.$refs.dialogDepositForm.toggleDialogVisible(true)
    },
    // 审批状态改变时，更新在本地更新页面数据
    handleStatusChange () {
      this.fetchFinanceDepositForm()
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceDepositForm () {
      this.$httpAPI.fetchFinanceDepositForm({ params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams) }).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }

        this.page.total = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
