<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
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
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'WebsiteStandbyForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { showDomain: '', forwardDomain: '', status: '' },
      rules: {
        showDomain: validators.validateRequired('显示域名'),
        forwardDomain: validators.validateRequired('跳转域名'),
        status: validators.validateSelect('启用状态')
      }
    }
  }
}
</script>
