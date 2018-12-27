<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员分组修改" width="400px">
    <el-form>
      <el-form-item label="会员分组" label-width="80px">
        <el-select
          v-model="selectedGroupId"
          placeholder="选择分组"
          size="small"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.groupId"
            :label="item.name"
            :value="String(item.groupId)"
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
  name: 'DialogGroupSetting',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      options: [],
      selectedGroupId: this.user.groupIds
    }
  },
  watch: {
    user () {
      this.selectedGroupId = this.user.groupIds
    }
  },
  created () {
    this.fetchUserGroups()
  },
  methods: {
    // 找到修改后的分组id和name，传递到父组件；同步修改分组的id和groudNames
    confirmGroupChange () {
      this.dialogVisible = false

      this.$httpAPI.postUserGroupSetting({
        userId: this.user.id,
        groupId: this.selectedGroupId
      }).then((response) => {
        if (response.data.status === 200) {
          this.$message.success('修改成功！')
          this.$emit('on-group-changed')
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
      this.$httpAPI.fetchUserGroups({
        params: { pageNo: 1, pageSize: 100 }
      }).then((response) => {
        this.options = response.data.data
      }).catch((error) => console.log(error))
    }
  }
}
</script>
