<template lang="html">
  <section class="deposit-online">
    <!-- 检索栏 -->
    <DepositOnlineSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <DepositOnlineTable :data="tableData" />
      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        httpURL="fetchFinanceDepositOnline"
      />
    </div>
  </section>
</template>

<script>
import DepositOnlineSearch from './components/DepositOnlineSearch'
import DepositOnlineTable from './components/DepositOnlineTable'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'FinanceDepositOnline',
  components: {
    DepositOnlineSearch,
    DepositOnlineTable,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      page: { current: 0, size: 10, total: 10 },
      requestParams: {}
    }
  },
  created () {
    this.fetchFinanceDepositOnline()
  },
  methods: {
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchFinanceDepositOnline()
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceDepositOnline () {
      this.$httpAPI.fetchFinanceDepositOnline({
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
