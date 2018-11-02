<template lang="html">
  <div class="limit-change">
    <!-- 条件筛选 -->
    <!-- <FilterArea /> -->
    <div class="clearfix">
      <LimitAdd @on-success="handleCreateLimitChange" />
    </div>

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

        <el-table-column prop="targetName" label="目标账户" />

        <el-table-column label="转换金额">
          <template slot-scope="scope">
            <span>{{scope.row.money | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="转换前金额">
          <template slot-scope="scope">
            <span>{{scope.row.beforeMoney | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="转换后金额">
          <template slot-scope="scope">
            <span>{{scope.row.afterMoney | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <span>{{scope.row.status | depositStatus}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showDialog(scope.row)" size="mini">审批</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="fetchFinanceLimitChange" />
    </div>
    <!-- 额度转换详情弹框 -->
    <DialogLimitForm @on-success="handleStatusChange" :formData="currentItem" ref="dialogLimitForm" />
  </div>
</template>

<script>
import LimitAdd from './components/LimitAdd'
import BasePagination from '@/components/base/BasePagination'
import DialogLimitForm from './components/DialogLimitForm'

export default {
  name: 'FinanceLimitChange',
  components: {
    LimitAdd,
    BasePagination,
    DialogLimitForm
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      currentItem: {}
    }
  },
  created () {
    this.fetchFinanceLimitChange()
  },
  methods: {
    handleCreateLimitChange () {
      this.fetchFinanceLimitChange()
    },
    // 显示审批加减款表单弹框
    showDialog (obj) {
      this.currentItem = obj
      this.$refs.dialogLimitForm.toggleDialogVisible(true)
    },
    // 审批状态改变时，更新在本地更新页面数据
    handleStatusChange (payload) {
      this.$_.forEach(this.tableData, item => {
        if (item.convertId === payload.convertId) {
          item.status = payload.status
        }
      })
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceLimitChange () {
      this.$httpAPI.fetchFinanceLimitChange({ params: { pageNo: 1, pageSize: 10 } }).then(response => {
        response.data.data && (this.tableData = response.data.data)
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
