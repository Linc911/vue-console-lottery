<template lang="html">
  <section class="withdraw-apply">
    <!-- 条件筛选 -->
    <SearchWithdrawApply @on-search="handleSearch" />
    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" />

        <el-table-column prop="orderId" label="申请单号" :width="140" />

        <el-table-column label="申请时间" :width="140">
          <template slot-scope="scope">
            <span>{{scope.row.applyTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="username" label="会员账号" />

        <el-table-column label="取款金额">
          <template slot-scope="scope">
            <span>{{scope.row.money | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="审批状态" :width="120">
          <template slot-scope="scope">
            <span>{{scope.row.status | auditStatus}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注" />

        <el-table-column prop="operations" label="操作" :min-width="600">
          <template slot-scope="scope">
            <el-button
              @click="showDialog(scope.row)"
              type="primary"
              size="mini"
            >{{scope.row.status < 2 ? '审批' : '详情'}}</el-button>
            <!-- <el-button type="primary" @click="showTip" size="mini">安全预警</el-button> -->
            <!-- <el-button type="primary" @click="showTip" size="mini">订单详情</el-button> -->
            <!-- <el-button type="primary" @click="showTip" size="mini">登录日志</el-button> -->
            <!-- <el-button type="primary" @click="showTip" size="mini">财务核查</el-button> -->
            <!-- <el-button type="primary" @click="showTip" size="mini">注单核查</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceWithdrawApply"
      />
    </div>
    <DialogWithdrawApply @on-success="handleStatusChange" :formData="currentItem" ref="dialogWithdrawApply" />
  </section>
</template>

<script>
import SearchWithdrawApply from './components/SearchWithdrawApply'
import BasePagination from '@/components/base/BasePagination'
import DialogWithdrawApply from './components/DialogWithdrawApply'

export default {
  name: 'FinanceWithdrawApply',
  components: {
    SearchWithdrawApply,
    BasePagination,
    DialogWithdrawApply
  },
  data () {
    return {
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
    handleSearch (obj) {
      this.requestParams = Object.assign(this.requestParams, obj)
      this.fetchFinanceWithdrawApply()
    },
    // 显示审批加减款表单弹框
    showDialog (obj) {
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
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
