<template>
    <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'ImagePhoneForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { name: '', url: '', status: 0, sort: 0 },
      rules: {
        name: validators.validateRequired('图片名称'),
        status: validators.validateSelect('启用状态'),
        sort: validators.validateInteger('排序'),
        coverUrl: validators.validateRequired('图片地址'),
        url: validators.validateRequired('跳转地址')
      }
    }
  }
}
</script>
