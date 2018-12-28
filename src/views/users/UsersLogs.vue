<template lang="html">
  <section class="users-logs">
    <!-- 条件筛选 -->

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

        <el-table-column prop="createTime" label="请求时间" :width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="username" label="用户名称" />

        <el-table-column prop="ip" label="ip地址" :width="120" />

        <el-table-column prop="params" label="请求参数" :min-width="180" />

        <el-table-column prop="module" label="请求模块" />

        <el-table-column prop="area" label="所属区域" />

        <el-table-column prop="remark" label="备注" :width="160" />
      </el-table>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>
  </section>
</template>

<script>
import { tableWithPaginationMixin } from '@/mixins'

export default {
  name: 'UsersLogsList',
  mixins: [ tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchUsersLogsList',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
