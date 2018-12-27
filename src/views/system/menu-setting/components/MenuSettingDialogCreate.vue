<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新菜单" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" ref="form" />
  </el-dialog>
</template>

<script>
import config from '@/config/data'

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
    handleValidationSuccess (payload) {
      this.dialogVisible = false // 表单验证通过才隐藏弹框

      this.$httpAPI.createSystemMenuItem(payload.data).then((response) => {
        !payload.checked && this.$refs.form.resetFields() // 根据用户选择，是否重置所有的表单输入

        this.$store.dispatch('sidebar/refreshMenu') // 同步更新左侧菜单导航

        this.$emit('on-created')

        this.$message.success(config.CREATE_SUCCEEDED)
      }).catch(() => this.$message.error(config.CREATE_FAILED))
    },
    // 显示与隐藏弹框
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
