<template lang="html">
  <section class="system-roles">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <div class="search-left">
        <SearchPlain @on-input="handleSearchInfo" :placeholder="'角色名搜索'" />
      </div>
      <div class="search-right">
        <router-link to="/system/role/create">
          <el-button icon="el-icon-circle-plus-outline" size="small" type="primary">添加</el-button>
        </router-link>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="table-roles">
      <el-table
        :data="tableActiveData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column prop="code" label="Code"></el-table-column>
        <el-table-column prop="name" label="角色名"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" >
          <template slot-scope="scope">
            <span v-localtime="scope.row.createTime"></span>
          </template>
        </el-table-column>
        <el-table-column prop="operations" label="操作" min-width="300px">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" size="mini" type="primary" />
            <el-button @click="showDialog(scope.row)" icon="el-icon-delete" size="mini" type="primary" />
            <el-button size="mini" type="primary">分配权限</el-button>
            <el-button size="mini" type="primary">分配菜单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="删除确认"
      :visible.sync="dialogVisible"
      width="400px"
    >
      <span><strong>删除</strong>角色名称为<strong> {{deletingRole.name}} </strong>数据?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmDelet">确认</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import SearchPlain from '@/components/base/SearchPlain'

export default {
  name: 'rolesList',
  components: {
    SearchPlain
  },
  data () {
    return {
      tableData: [],
      tableActiveData: [],
      dialogVisible: false,
      deletingRole: {}
    }
  },
  created () {
    this.fetchUsersRoles()
  },
  methods: {
    // 根据输入框内容，显示符合匹配条件的角色
    handleSearchInfo (keyword) {
      this.tableActiveData = _.filter(this.tableData, item => item.name.includes(keyword))
    },
    // 显示确认删除对话框
    showDialog (role) {
      this.deletingRole = role
      this.dialogVisible = true
    },
    // 确认删除角色
    confirmDelet () {
      this.$axios.delete('/api-u/roles/' + this.deletingRole.id ).then(() => {
        this.dialogVisible = false // 隐藏对话框
        this.fetchUsersRoles() // 获取最新数据
      }).catch(error => {
        this.$message.error('删除数据失败')
        console.log(error);
      })
    },
    // 获取全部角色数据
    fetchUsersRoles () {
      this.$axios.get('/api-u/roles').then(response => {
        this.tableData = this.tableActiveData = response.data.data
      }).catch(error => {
        console.log(error)
      })
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
strong {
  color: #F56C6C;
}
</style>
