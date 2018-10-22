<template lang="html">
  <section class="vip-logs">
    <!-- 条件筛选 -->
    <FilterArea />
    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 用户基本信息 -->
      <ul v-if="tableDataReady" class="user-info-list clearfix">
        <li class="user-info-item">
          <span>用户ID：</span>
          <span class="user-info-detail">{{tableData[0].id}}</span>
        </li>
        <!-- <li class="user-info-item">
          <span>会员ID：</span>
          <span class="user-info-detail">{{tableData[0].userId}}</span>
        </li> -->
        <li class="user-info-item">
          <span>会员账号：</span>
          <span class="user-info-detail">{{tableData[0].username}}</span>
        </li>
      </ul>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="module" label="请求模块"></el-table-column>
        <el-table-column prop="params" label="请求参数"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column prop="ip" label="ip地址"></el-table-column>
        <el-table-column prop="area" label="所属区域"></el-table-column>
        <el-table-column prop="createTime" label="请求时间" :min-width="140"></el-table-column>
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
  components: {
    FilterArea
  },
  data () {
    return {
      input4: '',
      valueDate: '',
      valueData: '',
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
    this.fetchUserLogs({ current: this.page.current = 1, size: this.page.size = 10 })
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
      this.$axios.get('/api-l/logList', {
        params: { userId: this.$route.params.id, pageNo: this.page.current, pageSize: this.page.size }
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

<style lang="scss" scoped>
.search-container {
  margin-bottom: 20px;
}
.search-left {
  float: left;
}
.search-right {
  float: right;
  text-align: right;
}
// 用户基本信息
.user-info-list {
  margin: 30px 0 10px;
}
.user-info-item {
  float: left;
  margin-right: 30px;
  font-size: 14px;
}
.user-info-detail {
  color: #999;
}
</style>
