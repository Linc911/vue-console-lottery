<template lang="html">
  <section class="menu-list">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <router-link to="/system/menu/create" class="pull-right">
        <el-button icon="el-icon-circle-plus-outline" size="small" type="primary">添加</el-button>
      </router-link>
    </div>
    <!-- 表格数据 -->
    <el-table :data="tableData" size="small" highlight-current-row border>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="id" label="ID" :width="50"></el-table-column>

      <el-table-column prop="createTime" label="创建时间" :min-width="120">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | time}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="名称" :min-width="120">
        <template slot-scope="scope">
          <i v-if="hasChildrenMenu(scope.row.id)" class="el-icon-caret-right"></i>
          <i v-if="scope.row.parentId" class="el-icon-share"></i>
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="url" label="访问路由" :min-width="200"></el-table-column>

      <el-table-column prop="css" label="图标">
        <template slot-scope="scope">
          <i class="fa" :class="scope.row.css"></i>
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序"></el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="120">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/system/menu/${scope.row.id}/update`)"
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
    <!-- 删除确认弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDialogDeleteConfirm"
      :name="deletingMenuItem.name"
      title="菜单栏目"
      ref="dialogDelete"
    />
  </section>
</template>

<script>
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'menuList',
  components: {
    DialogDeleteConfirm
  },
  data () {
    return {
      tableData: [],
      deletingMenuItem: { name: '' }
    }
  },
  created () {
    this.fetchMenuList()
  },
  methods: {
    // 判断是否有子菜单
    hasChildrenMenu (id) {
      return this.$_.some(this.tableData, { parentId: id })
    },
    // 显示删除确认弹框
    showDialogDelete (menuItem) {
      this.deletingMenuItem = menuItem
      this.$refs.dialogDelete.toggleDialogStatus(true)
    },
    // 删除对应的权限
    handleDialogDeleteConfirm () {
      this.$axios.delete('/api-b/menus/' + this.deletingMenuItem.id).then(() => {
        this.$refs.dialogDelete.toggleDialogStatus(false) // 隐藏弹框
        this.fetchMenuList() // 请求最新数据
        this.$message.success('删除权限成功！')
      }).catch(() => this.$message.error('删除权限失败！'))
    },
    // 获取全部菜单
    fetchMenuList () {
      this.$axios.get('/api-b/menus/all').then(response => {
        this.tableData = response.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';

.search-container {
  margin-bottom: 20px;
}
.el-icon-caret-right {
  color: $--color-primary;
}
.el-icon-share {
  padding-left: 2em;
  color: $--color-primary;
}
</style>
