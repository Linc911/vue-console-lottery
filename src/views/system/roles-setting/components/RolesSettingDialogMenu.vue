<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="分配角色菜单" width="400px">
    <div >
      <el-input
        v-model="filterText"
        size="small"
        placeholder="按菜单名称搜索"
        clearable
        class="filter-input"
      />

      <el-tree
        @check="handleTreeCheckChanged"
        :data="treeData"
        :props="treeProps"
        :filter-node-method="filterNode"
        node-key="id"
        show-checkbox
        ref="tree"
      />
    </div>

    <div class="confirm-button-container">
      <el-button @click="submitForm" type="primary" size="small">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'RolesSettingDialogMenu',
  props: {
    id: {
      type: [ Number, String ],
      default: ''
    }
  },
  data () {
    return {
      dialogVisible: false,
      treeData: [],
      treeProps: {
        label: 'name',
        children: 'child'
      },
      filterText: '',
      checkedKeys: []
    }
  },
  watch: {
    id () {
      this.fetchRoleMenu(this.id)
    },
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    // 提交分配结果
    submitForm () {
      // 隐藏弹框
      this.dialogVisible = false

      this.$httpAPI.updateRoleMenuList({
        roleId: this.id,
        menuIds: this.checkedKeys
      }).then((response) => {
        if (response.data.status === 200) {
          this.$emit('on-menu-changed')
          this.$message.success('分配菜单成功！')
        } else {
          this.$message.error('分配菜单失败！')
        }
      }).catch((error) => {
        this.$message.error('分配菜单失败！')
        console.log(error)
      })
    },
    // 树状图响应筛选事件
    filterNode (value, data) {
      if (!value) {
        return true
      }
      return data.name.indexOf(value) !== -1
    },
    // 树状图响应被点击事件
    handleTreeCheckChanged (node, obj) {
      this.checkedKeys = [ ...obj.checkedKeys, ...obj.halfCheckedKeys ]
    },
    // 切换弹框隐藏与显示（给外部调动）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // 获取角色菜单
    fetchRoleMenu (id) {
      this.$httpAPI.fetchRoleMenuList({
        params: { id }
      }).then((response) => {
        this.treeData = response.data.data
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.confirm-button-container {
  margin: 20px 25px 0 0;
  text-align: right;
}
.filter-input {
  position:relative;
  top: -20px;
}
</style>
