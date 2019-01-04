<template lang="html">
  <el-form
    @submit.native.prevent
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <el-form-item label="角色名称" prop="name">
      <el-input v-model.trim="formData.name" placeholder="角色名称" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'UsersSettingForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { name: '' },
      rules: {
        name: validators.validateStringLength('角色名称', 1, 20)
      }
    }
  }
}
</script>
