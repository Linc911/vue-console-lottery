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
        :default-checked-keys="checkedKeys"
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
      checkedKeys: [], // 选择的二级菜单，不包括一级菜单（其状态由二级菜单决定）
      treeProps: {
        label: 'name',
        children: 'child'
      },
      filterText: '',
      selectedKeys: [] // 用于表单提交（选中的菜单，包括一级菜单）
    }
  },
  watch: {
    id () {
      if (this.dialogVisible) this.fetchRoleMenu(this.id)
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
        menuIds: this.selectedKeys
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
    // 树状图响应被点击事件; 将选择的数据传入树
    handleTreeCheckChanged (node, obj) {
      this.selectedKeys = [ ...obj.checkedKeys, ...obj.halfCheckedKeys ]
    },
    // 切换弹框隐藏与显示（给外部调动）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // 获取角色菜单
    fetchRoleMenu (roleId) {
      this.$httpAPI.fetchRoleMenuList({
        params: { roleId }
      }).then((response) => {
        this.treeData = response.data.data

        this.checkedKeys = [] // 每次选中的清空

        // 将已经选中的数据传入树；一级菜单不用处理，根据二级菜单来显现状态
        this.$_.forEach(this.treeData, (group) => {
          // 将二级菜单中，已分配的菜单的id放入 checkedKeys
          if (group.child) {
            this.$_.forEach(group.child, (item) => {
              if (item.self) this.checkedKeys.push(item.id)
            })
          }
        })
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
