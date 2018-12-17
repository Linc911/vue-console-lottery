<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="分配角色权限" width="560px">
    <el-transfer
      v-model="transferCurrentData"
      :data="transferData"
      :filter-method="transferFilterMethod"
      :titles="[ '未分配权限', '已分配权限' ]"
      filter-placeholder="角色权限名称"
      filterable
    />

    <div class="confirm-button-container">
      <el-button @click="submitForm" type="primary" size="small">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'RolesSettingDialogPermissions',
  props: {
    id: {
      type: [ Number, String ],
      default: ''
    }
  },
  data () {
    return {
      dialogVisible: false,
      transferCurrentData: [],
      transferData: []
    }
  },
  watch: {
    id () {
      this.fetchPermissionsList(this.id)
    }
  },
  methods: {
    // 提交分配结果
    submitForm () {
      // 隐藏弹框
      this.dialogVisible = false

      this.$httpAPI.updateRolePermissionsList({
        id: this.id,
        permissionIds: this.transferCurrentData
      }).then((response) => {
        if (response.data.status === 200) {
          this.$emit('on-permissions-changed')
          this.$message.success('分配权限成功！')
        } else {
          this.$message.error('分配权限失败！')
        }
      }).catch((error) => console.log(error))
    },
    // 切换弹框隐藏与显示（给外部调动）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // Transfer 组件的筛选函数
    transferFilterMethod (query, item) {
      return item.label.indexOf(query) > -1
    },
    // 获取权限分配列表
    fetchPermissionsList (id) {
      this.$httpAPI.fetchRolePermissionsList({
        params: { id }
      }).then((response) => {
        // 清空全部数据
        this.transferData = []

        this.$_.forEach(response.data.data, (item) => {
          // 格式化所有权限数据
          this.transferData.push({
            key: item.id,
            label: item.name
          })

          // 生成已分配权限菜单数据
          if (item.self) {
            this.transferCurrentData.push(item.id)
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
</style>
