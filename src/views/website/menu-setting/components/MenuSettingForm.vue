<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    <el-form-item prop="name" label="菜单名称">
      <el-input v-model.trim="formData.name" placeholder="关于我们" />
    </el-form-item>

    <el-form-item prop="sort" label="排列顺序">
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
    </el-form-item>

    <el-form-item prop="content" label="菜单内容">
      <el-input v-model.trim="formData.content" type="textarea" rows="3" placeholder="对我们公司的详细介绍..." />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'MenuSettingForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { name: '', content: '', sort: '' },
      rules: {
        name: validators.validateRequired('显示名称'),
        sort: validators.validateInteger('排序'),
        content: validators.validateRequired('网站菜单内容')
      }
    }
  }
}
</script>
