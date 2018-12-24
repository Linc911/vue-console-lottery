<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改菜单配置" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" :data="formData" />
  </el-dialog>
</template>

<script>
import Config from '@/config/data'

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
    handleValidationSuccess (value) {
      this.dialogVisible = false

      // 判断是否对表单数据进行修改: 没修改 => 提示数据没变化，不发送请求； 进行修改 => 发送修改请求
      const same = this.$utils.isEquivalentObjects(this.data, value)
      if (!same) {
        // 生成需要修改属性组成的对象，仅包含变动的属性（两个参数位置必须按要求顺序传入）
        const postData = this.$utils.generateObjectWithChangedProperties(this.data, value)

        this.$httpAPI[this.updateHttpAPI](Object.assign(this.idParams, postData)).then(() => {
          this.$store.dispatch('sidebar/refreshMenu') // 同步更新左侧菜单导航

          this.$emit('on-updated')

          this.$message.success(Config.UPDATE_SUCCEEDED)
        }).catch(() => this.$message.error(Config.UPDATE_FAILED))
      } else {
        this.$message.info(Config.VALIDATION_UNCHANGED)
      }
    },
    // 显示与隐藏弹框（外部调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
