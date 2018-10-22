<template lang="html">
  <section class="permissions-list">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <!-- 左侧 搜索权限 -->
      <div class="search-left">
        <div class="input-group">
          <span>权限名：</span>
          <el-input
            @keyup.native.enter="searchPremission"
            v-model="search.name"
            size="small"
            placeholder="权限名"
            clearable
          />
        </div>
        <div class="input-group">
          <span>权限标识：</span>
          <el-input
            @keyup.native.enter="searchPremission"
            v-model="search.permission"
            size="small"
            placeholder="权限标识"
            clearable
          />
        </div>
        <div class="input-group">
          <el-button
            @click="searchPremission"
            type="primary"
            size="small"
            placeholder="权限标识"
          >
          搜索</el-button>
        </div>
      </div>
      <!-- 右侧 添加新权限 -->
      <div class="search-right">
        <router-link to="/system/permission/create">
          <el-button icon="el-icon-circle-plus-outline" size="small" type="primary">添加</el-button>
        </router-link>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="table-container">
      <el-table :data="tableData" size="small" highlight-current-row border>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="id" label="ID" :width="50"></el-table-column>

        <el-table-column prop="createTime" label="创建时间" >
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="权限名"></el-table-column>
        <el-table-column prop="permission" label="权限标识"></el-table-column>

        <el-table-column prop="operations" label="操作" :min-width="120">
          <template slot-scope="scope">
            <el-button
              @click="$router.push(`/system/permission/${scope.row.id}/update`)"
              icon="el-icon-edit"
              size="mini"
              type="primary"
            />
            <el-button
              @click="showDialogDelete(scope.row)"
              icon="el-icon-delete"
              size="mini"
              type="primary"
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
        :page-size="page.size"
        :page-sizes="[10, 20, 40, 100]"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <!-- 删除确认弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDialogDeleteConfirm"
      :name="deletingPermission.name"
      title="权限名"
      ref="dialogDelete"
    />
  </section>
</template>

<script>
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'permissionsList',
  components: {
    DialogDeleteConfirm
  },
  data () {
    return {
      search: {
        name: '',
        permission: ''
      }, // 搜索关键字
      tableData: [],
      page: {
        current: 1,
        size: 10,
        total: 10
      },
      deletingPermission: { name: '' } // 将要删除的权限对象
    }
  },
  created () {
    this.fetchPermissionsList({ start: 0, length: 10 })
  },
  methods: {
    // 根据输入框内容，显示符合匹配条件的角色
    searchPremission () {
      this.fetchPermissionsList({ name: this.search.name, permission: this.search.permission, start: 0, length: 10 })
    },
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.fetchPermissionsList({ start: (this.page.current = currentPage) - 1, length: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.fetchPermissionsList({ start: (this.page.current = 1) - 1, length: this.page.size = pageSize })
    },
    // 显示删除确认弹框
    showDialogDelete (permission) {
      this.deletingPermission = permission
      this.$refs.dialogDelete.toggleDialogStatus(true)
    },
    // 删除对应的权限
    handleDialogDeleteConfirm () {
      this.$axios.delete('/api-u/permissions/' + this.deletingPermission.id).then(() => {
        this.$refs.dialogDelete.toggleDialogStatus(false) // 隐藏弹框
        this.fetchPermissionsList({ start: 0, length: 10 }) // 请求最新数据
        this.$message.success('删除权限成功！')
      }).catch(() => this.$message.error('删除权限失败！'))
    },
    // 获取全部角色数据
    fetchPermissionsList (page) {
      this.$axios.get('/api-u/permissions', {
        params: { start: page.start * 10, length: page.length, name: page.name, permission: page.permission }
      }).then(response => {
        this.tableData = response.data.data
        this.page.total = response.data.total
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group {
  display: inline-block;
  margin-right: 20px;
}
.el-input {
  width: 240px;
}
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
</style>
