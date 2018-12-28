<template lang="html">
  <div class="deposit-form">
    <!-- 检索栏 -->
    <AccountCheckSearch @on-search="handleSearch" />

    <!-- 统计汇总 -->
    <ul class="statistics-summary clearfix">
      <li class="pull-left">提款次数：【{{ statistics.type0Amount }}】</li>
      <li class="pull-left">提款金额：【{{ statistics.type0Money | RMB }}】</li>
      <li class="pull-left">存款次数：【{{ statistics.depositAmount }}】</li>
      <li class="pull-left">存款金额：【{{ statistics.depositMoney | RMB }}】</li>
    </ul>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <AccountCheckTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
        :page="page"
      />
    </div>
  </div>
</template>

<script>
import { searchLayoutWithoutAddMixin, tableWithPaginationMixin } from '@/mixins'

import AccountCheckSearch from './components/AccountCheckSearch'
import AccountCheckTable from './components/AccountCheckTable'

export default {
  name: 'UsersAccountCheck',
  components: {
    AccountCheckSearch,
    AccountCheckTable
  },
  mixins: [ searchLayoutWithoutAddMixin, tableWithPaginationMixin ],
  data () {
    return {
      statistics: {
        type0Money: '',
        depositMoney: '',
        type0Amount: '',
        depositAmount: ''
      },
      tableHttpAPI: 'fetchUsersAccountCheck',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  }
}
</script>

<style lang="scss" scoped>
.statistics-summary {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
