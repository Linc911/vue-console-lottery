<template lang="html">
  <div class="deposit-form-checked">
    <!-- 条件筛选 -->
    <FilterArea />
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

        <el-table-column prop="username" label="会员账号" />

        <el-table-column prop="nickname" label="会员昵称" />

        <el-table-column prop="gameName" label="金额类型" />

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

        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <span>{{scope.row.status | depositStatus}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="loanName" label="借贷类型" />

        <el-table-column prop="remark" label="备注" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showDialog(scope.row)" size="mini">信息详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="{ neStatus: 0 }"
        httpURL="fetchBalanceChangeList"
      />
    </div>
    <!-- 加减款操作每项详情弹框 -->
    <DialogDepositForm :formData="currentItem" :unchecked="false" ref="dialogDepositForm" />
  </div>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'
import DialogDepositForm from './components/DialogDepositForm'

export default {
  name: 'DepositFormChecked',
  components: {
    FilterArea,
    BasePagination,
    DialogDepositForm
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      currentItem: {}
    }
  },
  created () {
    this.fetchBalanceChangeList()
  },
  methods: {
    // 显示审批加减款表单弹框
    showDialog (obj) {
      this.currentItem = obj
      this.$refs.dialogDepositForm.toggleDialogVisible(true)
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchBalanceChangeList () {
      this.$httpAPI.fetchBalanceChangeList({ params: { neStatus: 0, pageNo: 1, pageSize: 10 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
