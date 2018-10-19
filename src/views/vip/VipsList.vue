<template lang="html">
  <section class="vips-list">
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
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" :width="40"></el-table-column>

        <el-table-column prop="username" label="名称" :min-width="100">
          <template slot-scope="scope">
            <span>{{scope.row.username}}</span>
            <MoreDetail @on-click="handleViewUserInfo(scope.row.id)" class="pull-right" />
          </template>
        </el-table-column>

        <el-table-column prop="nickname" label="昵称"></el-table-column>
        <el-table-column prop="banlance" label="账户余额"></el-table-column>
        <el-table-column prop="win" label="输赢"></el-table-column>

        <el-table-column prop="createTime" label="注册时间" :width="140">
          <template slot-scope="scope">
            <span v-localtime="scope.row.createTime"></span>
          </template>
        </el-table-column>

        <el-table-column prop="operations" label="操作" min-width="350px">
          <template slot-scope="scope">
            <el-button @click="$router.push(`/vip/${scope.row.id}/bets`)" type="primary" size="mini">注单详情</el-button>
            <el-button @click="$router.push(`/vip/${scope.row.id}/changedList`)" type="primary" size="mini">充值详情</el-button>
            <el-button @click="$router.push(`/user/${scope.row.id}/depositStatistics`)" type="primary" size="mini">存款详情</el-button>
            <el-button @click="$router.push(`/user/${scope.row.id}/logs`)" type="primary" size="mini">日志详情</el-button>
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
    <!-- 会员信息详情弹框 -->
    <el-dialog
      title="会员信息详情"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="320px"
      center
    >
      <ul class="dialog-user-info">
        <li>用户ID：{{currentUser.id}}</li>
        <li>会员账号：{{currentUser.username}}</li>
        <li>会员昵称：{{currentUser.nickname}}</li>
        <li>账号状态：{{currentUser.enable ? '正常' : '异常'}}</li>
      </ul>
    </el-dialog>
  </section>
</template>

<script>
import MoreDetail from '@/components/base/MoreDetail'

export default {
  components: {
    MoreDetail
  },
  data () {
    return {
      input4: '',
      valueDate: '',
      valueData: '',
      tableData: [],
      page: {
        total: 10,
        current: 1,
        size: 10
      },
      dialogVisible: false,
      currentUser: {}
    }
  },
  created () {
    this.fetchUserList({ current: 1, size: this.page.size })
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
    // 请求会员信息， 显示弹框
    handleViewUserInfo (userId) {
      this.$axios.get('/api-u/backend/user', { params: { userId } }).then(response => {
        if (response.data.data) {
          this.currentUser = response.data.data
          this.dialogVisible = true
        } else {
          this.$message.warning('数据异常，无法正常显示！')
        }
      })
    },
    handleClose () {
      this.dialogVisible = false
    },
    fetchUserList (page) {
      this.$axios.get('/api-u/backend/userList', {
        params: {
          pageNo: page.current,
          pageSize: page.size
        }
      }).then(response => {
        // 表格对象赋值
        this.tableData = response.data.data
        // 分页对象赋值
        this.page.total = response.data.amount
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
.dialog-user-info {
  padding-bottom: 30px;
  line-height: 2;
}
</style>
