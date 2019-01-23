<template>
    <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
      <el-form-item prop="name" label="显示名称">
        <el-input v-model.trim="formData.name" placeholder="微信" />
      </el-form-item>

      <el-form-item prop="value" label="注册属性">
        <el-input v-model.trim="formData.value" placeholder="wechat" />
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="微信登陆方式..." />
      </el-form-item>
    </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'RegistryUserForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { name: '', value: '', sort: 0, status: 0 },
      rules: {
        name: validators.validateRequired('显示名称'),
        value: validators.validateRequired('注册属性'),
        sort: validators.validateInteger('排序'),
        status: validators.validateSelect('启用状态')
      }
    }
  }
}
</script>
