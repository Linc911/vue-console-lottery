<template lang="html">
  <div class="deposit-form">
    <!-- 检索栏 -->
    <UserAssetSearch @on-search="handleSearch" />

    <!-- 统计汇总 -->
    <!-- <ul class="statistics-summary clearfix">
      <li class="pull-left">人工减款：【{{ statistics.type10Money | RMB }}】</li>
      <li class="pull-left">人工加款：【{{ statistics.type9Money | RMB }}】</li>
      <li class="pull-left">提款：【{{ statistics.type0Money | RMB }}】</li>
      <li class="pull-left">存款：【{{ statistics.typy1_2Money | RMB }}】</li>
      <li class="pull-left">优惠：{{ statistics.type3Money | RMB }}】</li>
      <li class="pull-left">返水：【{{ statistics.type4Money | RMB }}】</li>
      <li class="pull-left">派送：【{{ statistics.type5Money | RMB }}】</li>
      <li class="pull-left">分润：【{{ statistics.type6Money | RMB }}】</li>
      <li class="pull-left">红包转入：【{{ statistics.type7Money | RMB }}】</li>
      <li class="pull-left">红包转出：【{{ statistics.type8Money | RMB }}】</li>
    </ul> -->

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <UserAssetTable :data="tableData" @on-show="showDialogAudit" />

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
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import UserAssetSearch from './components/UserAssetSearch'
import UserAssetTable from './components/UserAssetTable'
import UserAssetDialog from './components/UserAssetDialog'

export default {
  name: 'UsersAccountCheck',
  components: {
    UserAssetSearch,
    UserAssetTable,
    UserAssetDialog
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      statistics: {
        type0Money: '',
        type1_2Money: '',
        type2Money: '',
        type3Money: '',
        type4Money: '',
        type5Money: '',
        typy6Money: '',
        type7Money: '',
        type8Money: '',
        type9Money: '',
        type10Money: ''
      },
      tableData: [],
      tableHttpAPI: 'fetchUsersAccountCheck',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 },
      currentItem: {} // 当前选中的数据
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.statistics-summary {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
