<template lang="html">
  <section class="balance-sheet">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="breadcrumb" />

    <!-- 检索栏 -->
    <BalanceSheetSearch @on-search="handleSearch" />

    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <BalanceSheetTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceSheet"
      />
    </div>
  </section>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import BalanceSheetSearch from './components/BalanceSheetSearch'
import BalanceSheetTable from './components/BalanceSheetTable'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'FinanceBalanceSheet',
  components: {
    BaseBreadcrumb,
    BalanceSheetSearch,
    BalanceSheetTable,
    BasePagination
  },
  data () {
    return {
      breadcrumb: [
        { name: '财务管理' },
        { name: '会员财务报表' }
      ],
      tableData: [],
      pageTotal: 0,
      requestParams: {}
    }
  },
  created () {
    this.fetchFinanceSheet()
  },
  methods: {
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchFinanceSheet()
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceSheet () {
      console.log('fetchFinanceSheet ...')
      this.$httpAPI.fetchFinanceSheet({
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
