<template lang="html">
  <el-form :model="formData" :rules="rules" size="small" label-width="80px" ref="form">
    <el-form-item prop="name" label="类型名称">
      <el-input v-model.trim="formData.name" placeholder="控制在20字以内" />
    </el-form-item>

    <el-form-item prop="status" label="启用状态">
      <el-radio-group v-model="formData.status">
        <el-radio :label="0">启用</el-radio>
        <el-radio :label="1">禁用</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="sort" label="排序">
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
    </el-form-item>

    <el-form-item prop="remark" label="备注">
      <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="控制在200字以内" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'WithdrawTypeForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', sort: '', status: '' },
      rules: {
        name: validators.validateRequired('类型名称'),
        status: validators.validateSelect('启用状态'),
        sort: validators.validateInteger('排序')
      }
    }
  }
}
</script>
