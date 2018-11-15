<template lang="html">

  <div class="unchecked-list">
    <!-- 检索栏 -->
    <BalanceManipulationSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <el-table :data="tableData" size="small" highlight-current-row border>
        <el-table-column type="index" />

        <el-table-column label="创建时间" :width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="username" label="会员账号" />

        <el-table-column prop="gameName" label="账户类型" />

        <el-table-column prop="loanName" label="借贷类型" />

        <el-table-column label="调整方向">
          <template slot-scope="scope">
            <span>{{scope.row.type | depositDircetion}}</span>
          </template>
        </el-table-column>

        <el-table-column label="调整金额">
          <template slot-scope="scope">
            <span>{{scope.row.money | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="审核状态" :min-width="110">
          <template slot-scope="scope">
            <span>{{scope.row.status | depositStatus}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注" />

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="showDialogAudit(scope.row)"
              type="primary"
              size="mini"
            >{{scope.row.status | auditTransfer}}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>

    <!-- 审核弹框 -->
    <BalanceManipulationDialogAudit @on-success="fetchTableData()" :formData="currentItem" ref="dialogAudit" />
  </div>
</template>

<script>
import { tableWithPaginationMixin } from '@/mixins'

import BalanceManipulationSearch from './BalanceManipulationSearch'
import BalanceManipulationDialogAudit from './BalanceManipulationDialogAudit'

export default {
  name: 'BalanceManipulationListChecked',
  components: {
    BalanceManipulationSearch,
    BalanceManipulationDialogAudit
  },
  mixins: [ tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchFinanceBalanceManipulation',
      requestParams: { pageNo: 1, pageSize: 10, status: '2,3' },
      page: { current: 1, size: 10, total: 10 },
      currentItem: {}
    }
  },
  methods: {
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchTableData()
    },
    showDialogAudit (payload) {
      this.currentItem = payload
      this.$refs.dialogAudit.toggleDialogVisible(true)
    }
  }
}
</script>
