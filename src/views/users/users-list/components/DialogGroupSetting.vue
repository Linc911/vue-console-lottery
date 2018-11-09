<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员分组修改" width="320px">
      <el-form>
        <el-form-item label="会员分组" label-width="80px">
          <el-select v-model="selectedGroupId" placeholder="选择分组" size="small">
            <el-option
              v-for="item in groupOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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
      groupOptions: [],
      selectedGroupId: this.user.groupId
    }
  },
  created () {
    this.fetchUserGroups()
  },
  methods: {
    // 显示修改分组弹框；获取分组数据
    toggleDialogVisible (status) {
      this.dialogVisible = true
    },
    // 找到修改后的分组id和name，传递到父组件；同步修改分组的id和groudNames
    confirmGroupChange () {
      const params = { userId: this.user.userId, groupId: this.selectedGroupId }
      // 当前选中的分组的名称和Id
      const group = this.$_.find(this.groupOptions, option => option.value === this.selectedGroupId)

      this.$httpAPI.postUserGroupSetting({ params }).then(() => {
        this.$message.success('修改分组成功！')
        this.$emit('on-success', Object.assign(params, { groupName: group.label }))
      }).catch(error => console.log(error))

      this.dialogVisible = false
    },
    fetchUserGroups () {
      this.$httpAPI.fetchUserGroups({
        params: { pageNo: 1, pageSize: 100 }
      }).then(response => {
        // 把数据处理UI组件要求的格式
        this.$_.forEach(response.data.data, item => {
          this.groupOptions.push({
            value: String(item.groupId),
            label: item.name
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>
