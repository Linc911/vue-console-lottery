<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <el-form-item prop="name" label="分组名称">
      <el-input v-model.trim="formData.name" placeholder="VIP客户组" />
    </el-form-item>

    <el-form-item prop="remark" label="备注">
      <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="存款在50万-100万之间的" />
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
      formData: { name: '' }, // 验证的form属性必须要初始化，否则在更新时无法验证
      rules: {
        name: validators.validateRequired('分组名称')
      }
    }
  }
}
</script>
