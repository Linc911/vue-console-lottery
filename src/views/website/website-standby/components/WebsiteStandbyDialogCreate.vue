<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新备用网站" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      class="clearfix"
      ref="formCreate"
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
          <el-radio :label="2">发布</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'WebsiteStandbyDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteStandbyItem',
      formData: { showDomain: '', forwardDomain: '', status: 0 },
      rules: {
        showDomain: FormValidation.validateRequired('显示域名'),
        forwardDomain: FormValidation.validateRequired('跳转域名'),
        status: FormValidation.validateSelect('启用状态')
      }
    }
  }
}
</script>
