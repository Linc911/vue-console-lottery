<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <el-form-item prop="name" label="权限名称">
      <el-input v-model.trim="formData.name" placeholder="日志查询" />
    </el-form-item>

    <el-form-item prop="permission" label="权限标识">
      <el-input
        @keyup.native.enter="validateForm()"
        v-model.trim="formData.permission"
        placeholder="log:query"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'GroupSettingForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', permission: '' }, // 验证的form属性必须要初始化，否则在更新时无法验证
      rules: {
        name: validators.validateRequired('权限名称'),
        permission: validators.validateRequired('权限标识')
      }
    }
  }
}
</script>
