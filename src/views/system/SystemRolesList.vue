<template lang="html">
  <section class="roles-list">
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
            <el-button @click="showDialogAuthorization(scope.row.id)" size="mini" type="primary">分配权限</el-button>
            <el-button @click="showDialogMenu(scope.row.id)" size="mini" type="primary">分配菜单</el-button>
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
    <!-- 分配权限弹框 -->
    <el-dialog
      title="分配角色权限"
      :visible.sync="dialogAuthorizationVisible"
      :before-close="handleClose"
      width="560px"
      center
    >
      <el-transfer
        v-model="transferCurrentData"
        :data="transferData"
        :filter-method="transferFilterMethod"
        :titles="[ '已分配权限', '未分配权限' ]"
        filter-placeholder="角色权限"
        filterable
      />
    </el-dialog>
    <!-- 分配权限弹框 -->
    <el-dialog
      title="分配角色菜单"
      :visible.sync="dialogTreeVisible"
      :before-close="handleClose"
      width="60%"
      center
    >
      <div class="tree-container">
        <el-tree
          :data="treeData"
          @check-change="handleCheckChange"
          empty-text="数据返回异常"
          show-checkbox
          highlight-current
          default-expand-all
        />
      </div>
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
      deletingRole: {},
      dialogAuthorizationVisible: false,
      authorizations: [],
      transferData: [],
      transferCurrentData: [],
      dialogTreeVisible: false,
      treeData: [],
      data: [{
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
            }]
          }]
        }]
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
    // 显示分配角色权限弹框
    showDialogAuthorization (id) {
      if (!this.transferData.length) {
        this.$axios.get(`/api-u/roles/${id}/permissions`).then(response => {
          response.data.forEach(item => {
            this.transferData.push({
              key: item.id,
              label: item.name,
              disabled: false
            })
          })
          this.dialogAuthorizationVisible = true
        })
      } else {
        this.dialogAuthorizationVisible = true
      }
    },
    transferFilterMethod (query, item) {
      return item.label.indexOf(query) > -1
    },
    // 显示分配角色菜单弹框
    showDialogMenu (id) {
      if (!this.treeData.length) {
        this.$axios.get('api-b/menus/tree').then(response => {
          response.data.forEach((group, i) => {
            this.treeData.push({
              id: group.id,
              label: group.name,
              disabled: false,
              children: []
            })
            group.child.forEach((item, j) => {
              this.treeData[i].children.push({
                id: item.id,
                label: item.name,
                disabled: false
                // children: []
              })
            })
          })
          this.dialogTreeVisible = true
        })
      } else {
        this.dialogTreeVisible = true
      }
    },
    // 隐藏弹框
    handleClose(done) {
      done()
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
.tree-container {
  padding-bottom: 20px;
}
</style>
