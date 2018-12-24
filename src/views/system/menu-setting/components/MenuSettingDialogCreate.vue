<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新菜单" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" ref="form" />
  </el-dialog>
</template>

<script>
import MenuSettingForm from './MenuSettingForm'

export default {
  name: 'MenuSettingDialogCreate',
  components: {
    MenuSettingForm
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    // 表单验证通过，发送修改请求
    handleValidationSuccess (value) {
      this.dialogVisible = false // 表单验证通过才隐藏弹框

      this.$httpAPI.createSystemMenuItem(value).then((response) => {
        this.$refs.form.resetFields() // 重置所有的表单输入

        this.$store.dispatch('sidebar/refreshMenu') // 同步更新左侧菜单导航

        this.$emit('on-created')

        this.$message.success('创建成功！')
      }).catch(() => this.$message.error('创建失败！'))
    },
    // 显示与隐藏弹框
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
