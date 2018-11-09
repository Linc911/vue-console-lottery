<template lang="html">
  <div class="deposit-form">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 条件筛选 -->
    <div style="margin-bottom: 20px; text-align: right">
      <BaseAdd @on-click="$refs.dialogCreate.toggleDialogVisible(true)" />
    </div>

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <PaymentTypeTable @on-updated="fetchTransactionPaymentType()" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchTransactionPaymentType"
      />
    </div>

    <!-- 创建新支付类型弹框 -->
    <PaymentTypeDialogCreate @on-success="fetchTransactionPaymentType()" ref="dialogCreate" />
  </div>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import BaseAdd from '@/components/base/BaseAdd'
import PaymentTypeTable from './components/PaymentTypeTable'
import BasePagination from '@/components/base/BasePagination'
import PaymentTypeDialogCreate from './components/PaymentTypeDialogCreate'

export default {
  name: 'TransactionPaymentType',
  components: {
    BaseBreadcrumb,
    BaseAdd,
    PaymentTypeTable,
    BasePagination,
    PaymentTypeDialogCreate
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      requestParams: {},
      currentItem: {} // 当前选中的数据
    }
  },
  created () {
    this.fetchTransactionPaymentType()
  },
  methods: {
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchTransactionPaymentType()
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
    fetchTransactionPaymentType () {
      this.$httpAPI.fetchTransactionPaymentType({ params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams) }).then(response => {
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
