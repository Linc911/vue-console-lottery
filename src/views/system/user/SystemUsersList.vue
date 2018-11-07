<template lang="html">
  <section class="users-list">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <!-- 左侧 搜索权限 -->
      <div class="search-left">
        <div class="input-group">
          <span>用户名：</span>
          <el-input
            size="small"
            placeholder="用户名"
            clearable
          />
        </div>

        <div class="input-group">
          <span>昵称：</span>
          <el-input
            size="small"
            placeholder="昵称"
            clearable
          />
        </div>

        <div class="input-group">
          <el-button
            @click="$message.warning('接口异常，正在调试中...')"
            type="primary"
            size="small"
          >
          搜索</el-button>
        </div>
      </div>
      <!-- 右侧 添加新权限 -->
      <div class="search-right">
        <router-link to="/system/user/create">
          <el-button icon="el-icon-circle-plus-outline" size="small" type="primary">添加</el-button>
        </router-link>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="table-container">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" :width="40" />

        <el-table-column label="ID" :width="150">
          <template slot-scope="scope">
            <span>{{String(scope.row.id)}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="createTime" label="创建时间" :width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="username" label="名称" :min-width="160" />

        <el-table-column prop="nickname" label="昵称" :min-width="100" />

        <el-table-column prop="type" label="类型" />

        <el-table-column prop="banlance" label="账号余额" :min-width="120">
          <template slot-scope="scope">
            <span>{{scope.row.banlance | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="enabled" label="账号状态" :width="120">
          <template slot-scope="scope">
            <span>{{scope.row.enabled ? '正常' : '异常'}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="operations" label="操作" :min-width="380">
          <template slot-scope="scope">
            <el-button
              @click="$router.push(`/admin/user/${scope.row.id}/update`)"
              icon="el-icon-edit"
              size="mini"
              type="primary"
            />

            <el-button
              @click="$refs.dialog.toggleDialogStatus(true)"
              type="primary"
              size="mini"
            >重置密码</el-button>

            <el-button
              @click="$message.warning('接口异常，正在调试中...')"
              type="primary"
              size="mini"
            >分配角色</el-button>
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
    <!-- 设置密码弹框 -->
    <DialogInput
      @on-confirm="handleDialogConfirm"
      value="123456"
      title="设置密码"
      ref="dialog"
    />
  </section>
</template>

<script>
import DialogInput from '@/components/dialog/DialogInput'

export default {
  components: {
    DialogInput
  },
  data () {
    return {
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
    this.fetchUserList({ start: 0, length: 10 })
  },
  methods: {
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.$message.warning('接口异常，正在调试中...')
      // this.fetchUserList({ start: (this.page.current = currentPage) - 1, length: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.$message.warning('接口异常，正在调试中...')
      // this.fetchUserList({ start: (this.page.current = 1) - 1, length: this.page.size = pageSize })
    },
    // 弹框 $emit 事件处理
    handleDialogConfirm () {
      this.$message.warning('接口异常，正在调试中...')
    },
    fetchUserList (page) {
      this.$axios.get('/api-u/users', {
        params: { start: page.start * 10, length: page.length }
      }).then(response => {
        // 表格对象赋值
        this.tableData = response.data.data
        // 分页对象赋值
        this.page.total = response.data.total
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
.input-group {
  display: inline-block;
  margin-right: 20px;
}
.el-input {
  width: 240px;
}
.search-right {
  float: right;
  text-align: right;
}
</style>
