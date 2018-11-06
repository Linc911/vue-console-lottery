<template lang="html">
  <div class="Limit-change">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="breadcrumb" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="额度转换待审核列表" name="unchecked" />
      <el-tab-pane label="额度转换待确定列表" name="unconfirmed" />
      <el-tab-pane label="额度转换已审核列表" name="checked" />
    </el-tabs>

    <!-- 功能栏 -->
    <div class="clearfix" style="margin-top: 25px;">
      <LimitChangeSearch @on-search="handleSearch" style="display: inline-block" />
      <LimitChangeAdd @on-success="handleCreateLimitChange" class="pull-right" />
    </div>

    <!-- 主要内容 -->
    <div class="table-list">
      <!-- 表格 -->
      <LimitChangeTable :data="tableData" @on-show="showDialogAudit" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceLimitChange"
      />
    </div>

    <!-- 审核弹框 -->
    <LimitChangeDialog @on-success="handleStatusChange" :formData="currentItem" ref="dialogLimitForm" />
  </div>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import LimitChangeSearch from './components/LimitChangeSearch'
import LimitChangeAdd from './components/LimitChangeAdd'
import LimitChangeTable from './components/LimitChangeTable'
import BasePagination from '@/components/base/BasePagination'
import LimitChangeDialog from './components/LimitChangeDialog'

export default {
  name: 'FinanceLimintChange',
  components: {
    BaseBreadcrumb,
    LimitChangeSearch,
    LimitChangeAdd,
    LimitChangeTable,
    BasePagination,
    LimitChangeDialog
  },
  data () {
    return {
      breadcrumb: [
        { name: '财务管理' },
        { name: '额度转换管理' }
      ],
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
          this.requestParams.status = 0
          this.fetchFinanceLimitChange()
          break
        case 'unconfirmed':
          this.requestParams.status = 1
          this.fetchFinanceLimitChange()
          break
        case 'checked':
          this.requestParams.status = '2,3'
          this.fetchFinanceLimitChange()
          break
        default:
          this.requestParams = {}
      }
    },
    // 接收搜索信息，触发搜索
    handleSearch (obj) {
      this.requestParams = Object.assign(this.requestParams, obj, { pageNo: 1 })
      this.fetchFinanceLimitChange()
    },
    // 显示审批加减款表单弹框
    showDialogAudit (obj) {
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
