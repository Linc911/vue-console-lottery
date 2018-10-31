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
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operations" label="操作" min-width="300px">
          <template slot-scope="scope">
            <el-button
              @click="$router.push(`/system/role/${scope.row.id}/update`)"
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

            <el-button
              @click="showDialogAuthorization(scope.row.id)"
              size="mini"
              type="primary"
            >分配权限</el-button>

            <el-button
              @click="showDialogMenu(scope.row.id)"
              size="mini"
              type="primary"
            >分配菜单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 删除确认弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDialogDeleteConfirm"
      :name="deletingRole.name"
      title="角色名"
      ref="dialogDelete"
    />
    <!-- 分配权限弹框 -->
    <el-dialog
      title="分配角色权限"
      :visible.sync="dialogAuthorizationVisible"
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
    <!-- 分配菜单弹框 -->
    <el-dialog
      title="分配角色菜单"
      :visible.sync="dialogTreeVisible"
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
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'rolesList',
  components: {
    SearchPlain,
    DialogDeleteConfirm
  },
  data () {
    return {
      tableData: [], // 全部角色对象
      tableActiveData: [], // 搜索匹配的角色对象
      deletingRole: { name: '' }, // 将要删除的角色对象
      dialogAuthorizationVisible: false,
      authorizations: [],
      transferData: [],
      transferCurrentData: [],
      dialogTreeVisible: false,
      treeData: []
    }
  },
  created () {
    this.fetchUsersRoles()
  },
  methods: {
    // 根据输入框内容，显示符合匹配条件的角色
    handleSearchInfo (keyword) {
      this.tableActiveData = this.$_.filter(this.tableData, item => item.name.includes(keyword))
    },
    // 显示删除确认弹框
    showDialogDelete (role) {
      this.deletingRole = role
      this.$refs.dialogDelete.toggleDialogStatus(true)
    },
    // 删除对应的权限
    handleDialogDeleteConfirm () {
      this.$axios.delete('/api-u/roles/' + this.deletingRole.id).then(() => {
        this.$refs.dialogDelete.toggleDialogStatus(false) // 隐藏弹框
        this.fetchUsersRoles() // 请求最新数据
        this.$message.success('删除角色成功！')
      }).catch(() => this.$message.error('删除角色失败！'))
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
    handleCheckChange () {
      console.log('handleCheckChange')
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
.tree-container {
  padding-bottom: 20px;
}
</style>
