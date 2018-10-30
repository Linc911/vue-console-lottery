<template lang="html">
  <section class="lottery-users">
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

        <el-table-column prop="username" label="用户名称" />

        <el-table-column prop="nickname" label="昵称" />

        <el-table-column prop="unknown" label="所属彩种" />

        <el-table-column prop="unknown" label="注单数量" />
        <el-table-column prop="banlance" label="下注金额" />
        <el-table-column prop="unknown" label="未结金额" />
        <el-table-column prop="win" label="净输赢" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">相关操作</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="nuknown" />
    </div>
  </section>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'LotteryUsersInfo',
  components: {
    FilterArea,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0
    }
  },
  created () {
    this.fetchUsersList()
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
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchUsersList (page) {
      this.$httpAPI.fetchUsersList({ params: { pageNo: 1, pageSize: 3 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = 3
      }).catch(error => console.log(error))
    }
  }
}
</script>
