<template lang="html">
  <div class="Limit-change">
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="额度转换待审核列表" name="unchecked" />
      <el-tab-pane label="额度转换待确定列表" name="unconfirmed" />
      <el-tab-pane label="额度转换已审核列表" name="checked" />
    </el-tabs>

    <!-- 功能栏 -->
    <div class="clearfix">
      <LimitAdd @on-success="handleCreateLimitChange" />
    </div>

    <!-- 主要内容 -->
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

        <el-table-column label="审核状态" :min-width="100">
          <template slot-scope="scope">
            <span>{{scope.row.status | depositStatus}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="showDialog(scope.row)"
              type="primary"
              size="mini"
            >{{scope.row.status <= 1 ? '审批' : '详情'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceLimitChange"
      />
    </div>
    <DialogLimitForm @on-success="handleStatusChange" :formData="currentItem" ref="dialogLimitForm" />
  </div>
</template>

<script>
import LimitAdd from './components/LimitAdd'
import BasePagination from '@/components/base/BasePagination'
import DialogLimitForm from './components/DialogLimitForm'

export default {
  name: 'LimintchangeUnchecked',
  components: {
    LimitAdd,
    BasePagination,
    DialogLimitForm
  },
  data () {
    return {
      activeTab: 'unchecked',
      tableData: [],
      pageTotal: 0,
      requestParams: { status: 0 },
      currentItem: {}
    }
  },
  created () {
    this.fetchFinanceLimitChange()
  },
  methods: {
    handleTabClick (tab) {
      switch (tab.name) {
        case 'unchecked':
          this.requestParams = { status: 0 }
          this.fetchFinanceLimitChange()
          break
        case 'unconfirmed':
          this.requestParams = { status: 1 }
          this.fetchFinanceLimitChange()
          break
        case 'checked':
          this.requestParams = { status: '2,3' }
          this.fetchFinanceLimitChange()
          break
        default:
          this.requestParams = {}
      }
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
    // 创建完一条数据后，请求新的数据
    handleCreateLimitChange () {
      this.fetchFinanceLimitChange()
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceLimitChange () {
      this.$httpAPI.fetchFinanceLimitChange({ params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams) }).then(response => {
        response.data.data ? (this.tableData = response.data.data) : (this.tableData = [])
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
