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

        <el-table-column prop="unknown" label="邀请码" />

        <el-table-column prop="nickname" label="所属会员" />

        <el-table-column prop="unknown" label="注册人员" />

        <el-table-column prop="unknown" label="邀请码类型" />
        <el-table-column prop="unknown" label="真人点数" />
        <el-table-column prop="unknown" label="电子点数" />
        <el-table-column prop="unknown" label="体育点数" />
        <el-table-column prop="unknown" label="彩票点数" />
        <el-table-column prop="unknown" label="六合彩点数" />
        <el-table-column prop="unknown" label="删除状态" />
        <el-table-column prop="createTime" label="创建时间" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showTip"  size="mini">相关操作</el-button>
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
    showTip () {
      this.$message.warning('该功能正在开发中...')
    },
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
