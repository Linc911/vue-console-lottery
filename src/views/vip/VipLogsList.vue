<template lang="html">
  <section class="vip-logs">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <div class="search-left">
        <template>
          <span class="form-label">注册时间：</span>
          <el-date-picker
            v-model="valueDate"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
            size="small"
            clearable
            style="width: 240px; margin-right: 20px;"
          />
        </template>
        <template>
          <span class="form-label">所属分组：</span>
          <el-select v-model="valueData" size="small" placeholder="全部">
            <el-option label="在线" :value="0"></el-option>
            <el-option label="充值" :value="1"></el-option>
            <el-option label="彩金" :value="2"></el-option>
          </el-select>
        </template>
      </div>
      <div class="search-right">
        <el-input v-model="input4" size="small" placeholder="请输入内容" style="width: 240px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button icon="el-icon-refresh" size="small" style="margin-left: 10px;"></el-button>
      </div>
    </div>
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
export default {
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
      this.$axios.get('/api-l/statisticsUserOrder', {
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
