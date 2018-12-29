<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员日志列表" width="80%" style="min-width: 760px">
    <!-- 条件筛选 -->
    <el-form :model="searchData" size="small" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        label="会员账户"
        width="174px"
        ref="username"
      />

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <el-table :data="tableData" size="small" highlight-current-row border>
        <el-table-column type="index" :width="36" />

        <el-table-column prop="ip" label="ip地址" />

        <el-table-column prop="module" label="请求模块" :min-width="120" />

        <el-table-column prop="params" label="请求参数" :min-width="200">
          <template slot-scope="scope">
            <BasePopoverTextarea :data="scope.row.params" :maxLength="26" />
          </template>
        </el-table-column>

        <el-table-column prop="area" label="所属区域" />

        <el-table-column prop="createTime" label="请求时间" :width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注" :min-width="150">
          <template slot-scope="scope">
            <BasePopoverTextarea :data="scope.row.remark" :maxLength="18" />
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableAPI"
        :requestParams="requestParams"
      />
    </div>
  </el-dialog>
</template>

<script>
import FormInput from '@/components/form/FormInput'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'
import BasePagination from '@/components/base/BasePagination'
import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'

export default {
  name: 'UsersListDialogLogs',
  components: {
    FormInput,
    SearchIcon,
    SearchReset,
    BasePopoverTextarea,
    BasePagination
  },
  props: {
    userId: {
      type: [ String, Number ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      searchData: {},
      tableData: [],
      tableAPI: 'fetchUsersLogsList',
      requestParams: { userId: this.userId, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  watch: {
    userId () {
      this.page.current = 1
      this.$set(this.requestParams, 'userId', this.userId)

      this.fetchLogsList(this.userId)
    }
  },
  methods: {
    // 分页变化时，请求新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchLogsList (userId) {
      this.$httpAPI[this.tableAPI]({
        params: { userId, pageNo: 1, pageSize: 10 }
      }).then(response => {
        this.page.total = response.data.amount

        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
          this.$message.info('暂无数据返回')
        }
      }).catch(error => console.log(error))
    },
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
