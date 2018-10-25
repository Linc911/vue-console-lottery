<template lang="html">
  <section class="users-group">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <el-button
        @click="$router.push({ name: 'usersGroupCreate' })"
        icon="el-icon-circle-plus-outline"
        type="primary"
        size="small"
        class="pull-right"
      >添加</el-button>
    </div>
    <div class="content-container">
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" />

        <el-table-column prop="groupId" label="分组ID" :min-width="150" />

        <el-table-column prop="name" label="分组名称" />

        <el-table-column prop="remark" label="备注" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="$router.push(`/users/group/${scope.row.groupId}/update`)"
              icon="el-icon-edit"
              type="primary"
              size="mini"
            />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="page.current"
        :total="page.total"
        :page-sizes="[10, 20, 40, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'usersGroup',
  data () {
    return {
      tableData: [],
      page: {
        total: 10,
        current: 1,
        size: 10
      }
    }
  },
  created () {
    this.fetchUsersGroupList({ current: 1, size: this.page.size })
  },
  methods: {
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.fetchUserList({ current: this.page.current = currentPage, size: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.fetchUserList({ current: this.page.current = 1, size: this.page.size = pageSize })
    },
    fetchUsersGroupList (page) {
      this.$httpAPI.fetchUsersGroupList({
        params: { pageNo: page.current, pageSize: page.size }
      }).then(response => {
        this.tableData = response.data.data
        this.page.total = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  margin: 20px 0;
}
</style>
