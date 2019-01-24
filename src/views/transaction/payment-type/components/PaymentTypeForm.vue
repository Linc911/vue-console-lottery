<template lang="html">
  <el-form :model="formData" :rules="rules" size="small" label-width="80px" ref="form">
    <el-form-item prop="name" label="类型名称">
      <el-input v-model.trim="formData.name" placeholder="类型名称" />
    </el-form-item>

    <el-form-item prop="status" label="是否推荐">
      <el-radio-group v-model="formData.status">
        <el-radio :label="0">推荐</el-radio>
        <el-radio :label="1">不推荐</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="sort" label="排序">
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="排序" />
    </el-form-item>

    <el-form-item prop="remark" label="备注">
      <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="备注" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'PaymentTypeForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', sort: '', status: '' },
      rules: {
        name: validators.validateRequired('类型名称不能为空'),
        status: validators.validateSelect('推荐状态'),
        sort: validators.validateInteger('排列顺序')
      }
    }
  }
}
</script>
