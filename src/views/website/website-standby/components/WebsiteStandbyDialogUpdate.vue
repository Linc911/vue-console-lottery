<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改备用网站配置" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="showDomain" label="显示域名">
        <el-input v-model.trim="formData.showDomain" placeholder="http://www.baidu.com" />
      </el-form-item>

      <el-form-item prop="forwardDomain" label="跳转域名">
        <el-input v-model.trim="formData.forwardDomain" placeholder="http://www.baidu.com" />
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'WebsiteStandbyDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteStandbyItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { showDomain: '', forwardDomain: '', status: '' },
      rules: {
        showDomain: FormValidation.validateRequired('显示域名'),
        forwardDomain: FormValidation.validateRequired('跳转域名'),
        status: FormValidation.validateSelect('启用状态')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { websiteId: this.data.websiteId }
    }
  }
}
</script>
