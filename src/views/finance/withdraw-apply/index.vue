<template lang="html">
  <section class="withdraw-apply">
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="填单存款待审核列表" name="unchecked" />
      <el-tab-pane label="填单存款已审核列表" name="checked" />
    </el-tabs>

    <!-- 条件筛选 -->
    <WithdrawApplySearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <WithdrawApplyTable :data="tableData" @on-show="showDialogAudit" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        httpURL="fetchFinanceWithdrawApply"
      />
    </div>

    <!-- 审核弹框 -->
    <WithdrawApplyDialog @on-success="handleStatusChange" :formData="currentItem" ref="dialogWithdrawApply" />
  </section>
</template>

<script>
import WithdrawApplySearch from './components/WithdrawApplySearch'
import WithdrawApplyTable from './components/WithdrawApplyTable'
import BasePagination from '@/components/base/BasePagination'
import WithdrawApplyDialog from './components/WithdrawApplyDialog'

export default {
  name: 'FinanceWithdrawApply',
  components: {
    WithdrawApplySearch,
    WithdrawApplyTable,
    BasePagination,
    WithdrawApplyDialog
  },
  data () {
    return {
      activeTab: 'unchecked',
      currentItem: {},
      tableData: [],
      requestParams: { pageNo: 1, pageSize: 10, status: 0 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  created () {
    this.fetchFinanceWithdrawApply()
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      switch (tab.name) {
        case 'unchecked':
          this.requestParams.status = 0
          this.fetchFinanceWithdrawApply()
          break
        case 'checked':
          this.requestParams = Object.assign(this.requestParams, { pageNo: 1, status: '2,3' })
          this.fetchFinanceWithdrawApply()
          break
        default:
          this.requestParams = {}
      }
    },
    // 接收搜索信息，触发搜索
    handleSearch (obj) {
      this.requestParams = Object.assign(this.requestParams, obj, { pageNo: 1 })
      this.fetchFinanceWithdrawApply()
    },
    // 显示审批加减款表单弹框
    showDialogAudit (obj) {
      this.currentItem = obj
      this.$refs.dialogWithdrawApply.toggleDialogVisible(true)
    },
    // 审批状态改变时，更新在本地更新页面数据
    handleStatusChange (payload) {
      this.$_.forEach(this.tableData, item => {
        if (item.withdrawId === payload.withdrawId) {
          item.status = payload.status
        }
      })
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceWithdrawApply (page) {
      this.$httpAPI.fetchFinanceWithdrawApply({
        params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams)
      }).then(response => {
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
