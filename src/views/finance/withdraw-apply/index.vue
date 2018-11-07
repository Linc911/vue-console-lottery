<template lang="html">
  <section class="withdraw-apply">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="breadcrumb" />

    <!-- 条件筛选 -->
    <WithdrawApplySearch @on-search="handleSearch" />

    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <WithdrawApplyTable :data="tableData" @on-show="showDialogAudit" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceWithdrawApply"
      />
    </div>

    <!-- 审核弹框 -->
    <WithdrawApplyDialog @on-success="handleStatusChange" :formData="currentItem" ref="dialogWithdrawApply" />
  </section>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import WithdrawApplySearch from './components/WithdrawApplySearch'
import WithdrawApplyTable from './components/WithdrawApplyTable'
import BasePagination from '@/components/base/BasePagination'
import WithdrawApplyDialog from './components/WithdrawApplyDialog'

export default {
  name: 'FinanceWithdrawApply',
  components: {
    BaseBreadcrumb,
    WithdrawApplySearch,
    WithdrawApplyTable,
    BasePagination,
    WithdrawApplyDialog
  },
  data () {
    return {
      breadcrumb: [
        { name: '财务管理' },
        { name: '提款申请管理' }
      ],
      tableData: [],
      pageTotal: 0,
      currentItem: {},
      requestParams: {}
    }
  },
  created () {
    this.fetchFinanceWithdrawApply()
  },
  methods: {
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
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
