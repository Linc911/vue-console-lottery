<template lang="html">
  <div class="Limit-change">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="breadcrumb" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="所有存款记录" name="deposit" />
      <el-tab-pane label="所有取款记录" name="withdraw" />
    </el-tabs>

    <!-- 功能栏 -->
    <DepositWithdrawSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <DepositWithdrawTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceDepoistLogs"
      />
    </div>
  </div>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import DepositWithdrawSearch from './components/DepositWithdrawSearch'
import DepositWithdrawTable from './components/DepositWithdrawTable'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'FinanceLimintChange',
  components: {
    BaseBreadcrumb,
    DepositWithdrawSearch,
    DepositWithdrawTable,
    BasePagination
  },
  data () {
    return {
      breadcrumb: [
        { name: '财务管理' },
        { name: '存/取款记录' }
      ],
      activeTab: 'deposit',
      tableData: [],
      depositData: [],
      pageTotal: 0,
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
          if (this.depositData.length) {
            this.tableData = this.depositData
          } else {
            this.fetchFinanceDepoistLogs()
          }
          break
        case 'withdraw':
          this.tableData = []
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
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
