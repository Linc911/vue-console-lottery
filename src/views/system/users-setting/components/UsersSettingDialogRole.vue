<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="角色类型修改" width="400px">
    <el-form>
      <el-form-item label="角色类型" label-width="80px">
        <el-select
          v-model="selectedGroupId"
          placeholder="选择角色类型"
          size="small"
          style="width: 240px"
          multiple
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="confirmGroupChange" type="primary" size="small">确认</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'UsersSettingDialogRole',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      options: [],
      selectedGroupId: this.data.roleIds ? this.data.roleIds : []
    }
  },
  watch: {
    data () {
      this.selectedGroupId = this.data.roleIds ? this.data.roleIds : []
    }
  },
  created () {
    this.fetchUserGroups()
  },
  methods: {
    // 找到修改后的分组id和name，传递到父组件；同步修改分组的id和groudNames
    confirmGroupChange () {
      this.dialogVisible = false

      this.$httpAPI.updateSystemUsersItemRole({
        id: this.data.idStr,
        roleIds: this.selectedGroupId
      }).then((response) => {
        if (response.data.status === 200) {
          this.$message.success('修改成功！')
          this.$emit('on-changed')
        } else {
          this.$message.error('修改失败')
        }
      }).catch(error => console.log(error))
    },
    // 显示修改分组弹框；获取分组数据
    toggleDialogVisible (status) {
      this.dialogVisible = true
    },
    // 获取分组数据
    fetchUserGroups () {
      this.$httpAPI.fetchSystemRolesList({
        params: { pageNo: 1, pageSize: 100 }
      }).then((response) => {
        this.options = response.data.data
      }).catch((error) => console.log(error))
    }
  }
}
</script>
