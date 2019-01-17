<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <el-form-item prop="name" label="类型名称">
      <el-input v-model.trim="formData.name" placeholder="类型名称" />
    </el-form-item>

    <el-form-item prop="odds1" label="赔率">
      <el-input v-model.trim="formData.odds1" type="number" min="0" placeholder="赔率" />
    </el-form-item>

    <el-form-item prop="sort" label="排列顺序">
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="排列顺序" />
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
  name: 'LotteryOddsForm',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { name: '', odds1: '', sort: 0 },
      rules: {
        name: validators.validateRequired('类型名称'),
        odds1: validators.validateRequired('赔率'),
        sort: validators.validateInteger('排列顺序')
      }
    }
  }
}
</script>
