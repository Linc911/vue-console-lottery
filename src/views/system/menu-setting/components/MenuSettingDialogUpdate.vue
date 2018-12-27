<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改菜单配置" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" :data="formData" />
  </el-dialog>
</template>

<script>
import config from '@/config/data'

import MenuSettingForm from './MenuSettingForm'

export default {
  name: 'MenuSettingDialogUpdate',
  components: {
    MenuSettingForm
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formData: {},
      updateHttpAPI: 'updateSystemMenuItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      dialogVisible: false
    }
  },
  watch: {
    data () {
      this.formData = Object.assign({}, this.data)
      this.idParams = { id: this.data.id }
    }
  },
  methods: {
    // 表单验证通过，发送修改请求
    handleValidationSuccess (payload) {
      this.dialogVisible = false

      this.$httpAPI[this.updateHttpAPI](payload.data).then(() => {
        this.$store.dispatch('sidebar/refreshMenu') // 同步更新左侧菜单导航

        this.$emit('on-updated')

        this.$message.success(config.UPDATE_SUCCEEDED)
      }).catch(() => this.$message.error(config.UPDATE_FAILED))
    },
    // 显示与隐藏弹框（外部调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
