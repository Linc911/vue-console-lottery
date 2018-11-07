<template lang="html">
  <section class="users-logs">
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

        <el-table-column prop="username" label="账号" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="username" label="账户余额" />
        <el-table-column prop="username" label="存款金额" />
        <el-table-column prop="username" label="取款金额" />
        <el-table-column prop="username" label="存款次数" />
        <el-table-column prop="username" label="取款次数" />
        <el-table-column prop="username" label="返水返回" />
        <el-table-column prop="username" label="注册赠送" />
        <el-table-column prop="username" label="彩金派送" />
        <el-table-column prop="username" label="额度转入" />
        <el-table-column prop="username" label="额度转出" />
        <el-table-column prop="username" label="备注" />
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
import FilterArea from '@/components/others/FilterArea'

export default {
  name: 'UsersLog',
  components: {
    FilterArea
  },
  data () {
    return {
      tableDataReady: false,
      tableData: [],
      page: {
        total: 10,
        current: 1,
        size: 10
      }
    }
  },
  created () {
    // this.fetchUserLogs({ current: this.page.current = 1, size: this.page.size = 10 })
  },
  mounted () {
    this.$notify({
      title: '提示',
      message: '页面使用模拟数据，接口正在调试中...',
      type: 'warning',
      duration: 8000
    })
  },
  methods: {
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.fetchUserLogs({ current: this.page.current = currentPage, size: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.fetchUserLogs({ current: this.page.current = 1, size: this.page.size = pageSize })
    },
    fetchUserLogs (page) {
      this.$httpAPI.fetchUsersLogs({
        params: { userId: 2, pageNo: this.page.current, pageSize: this.page.size }
      }).then(response => {
        // 表格对象赋值
        this.tableData = response.data.data
        // 分页对象赋值
        this.page.total = response.data.amount
        this.tableDataReady = true
      }).catch(error => console.log(error))
    }
  }
}
</script>
