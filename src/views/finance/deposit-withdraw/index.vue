<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="所有存款记录" name="deposit" />
      <el-tab-pane label="所有取款记录" name="withdraw" />
    </el-tabs>

    <!-- 功能栏 -->
    <DepositWithdrawSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <component :is="activeComponent" :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        httpURL="fetchFinanceDepoistLogs"
      />
    </div>
  </div>
</template>

<script>
import DepositWithdrawSearch from './components/DepositWithdrawSearch'
import DepositWithdrawTable from './components/DepositWithdrawTable'
import WithdrawTable from './components/WithdrawTable'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'FinanceLimintChange',
  components: {
    DepositWithdrawSearch,
    DepositWithdrawTable,
    WithdrawTable,
    BasePagination
  },
  data () {
    return {
      activeTab: 'deposit',
      activeComponent: 'DepositWithdrawTable',
      tableData: [],
      depositData: [],
      withdrawData: [],
      page: { current: 0, size: 10, total: 10 },
      requestParams: { status: 0 }
    }
  },
  created () {
    this.fetchFinanceDepoistLogs()
  },
  methods: {
    // 标签切换时，请求数据
    handleTabClick (tab) {
      switch (tab.name) {
        case 'deposit':
          this.activeComponent = 'DepositWithdrawTable'

          if (this.depositData.length) {
            this.tableData = this.depositData
          } else {
            this.requestParams.status = 0
            this.fetchFinanceDepoistLogs()
          }
          break
        case 'withdraw':
          this.activeComponent = 'WithdrawTable'

          if (this.withdrawData.length) {
            this.tableData = this.withdrawData
          } else {
            this.requestParams.status = 2
            this.fetchFinanceWithDrawLogs()
          }
          break
        default:
          this.tableData = []
      }
    },
    // 接收搜索信息，触发搜索
    handleSearch (obj) {
      this.requestParams = Object.assign(this.requestParams, obj, { pageNo: 1 })
      this.fetchFinanceDepoistLogs()
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceDepoistLogs () {
      this.$httpAPI.fetchFinanceDepoistLogs({ params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams) }).then(response => {
        if (response.data.data) {
          this.tableData = this.depositData = response.data.data
        } else {
          this.tableData = []
        }
        this.page.total = response.data.amount
      }).catch(error => console.log(error))
    },
    fetchFinanceWithDrawLogs () {
      this.$httpAPI.fetchFinanceWithdrawApply({ params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams) }).then(response => {
        if (response.data.data) {
          this.tableData = this.withdrawData = response.data.data
        } else {
          this.tableData = []
        }
        this.page.total = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
