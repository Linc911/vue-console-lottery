<template lang="html">
  <el-dialog
    :visible.sync="dialogVisible"
    title="会员日志列表"
    width="80%"
    style="min-width: 760px"
  >
    <!-- 条件筛选 -->
    <el-form :model="formData" size="small" inline>
      <!-- <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        label="会员账户"
        width="174px"
        ref="username"
      /> -->

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

        <el-table-column prop="module" label="请求模块" :min-width="120" />

        <el-table-column prop="params" label="请求参数" :min-width="200">
          <template slot-scope="scope">
            <BasePopoverTextarea :data="scope.row.params" :maxLength="50" />
          </template>
        </el-table-column>

        <el-table-column prop="ip" label="ip地址" />

        <el-table-column prop="area" label="所属区域" />

        <el-table-column prop="createTime" label="请求时间" :min-width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="remark" label="备注" :min-width="150">
          <template slot-scope="scope">
            <BasePopoverTextarea :data="scope.row.remark" :maxLength="15" />
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>
  </el-dialog>
</template>

<script>
import { onePageMixin } from '@/mixins'

import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'

export default {
  name: 'UsersListDialogLogs',
  components: {
    BasePopoverTextarea
  },
  mixins: [ onePageMixin ],
  data () {
    return {
      tableHttpAPI: 'fetchUsersLogsList',
      requestParams: { userId: this.id, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  watch: {
    id () {
      // 点击同一列数据时，因为id没有变化不好发送请求；
      // 每次id变动的时候，都把同一列弹框需要的数据请求回来
      if (this.dialogVisible && !this.tableData.length) {
        this.page.current = 1
        this.reset() // 清除搜索结果
        this.$set(this.requestParams, 'userId', this.id)

        this.fetchTableData({ userId: this.id })
      }
    }
  }
}
</script>
