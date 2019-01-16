<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    <el-form-item prop="drawno" label="彩票期号">
      <el-input v-model.trim="formData.drawno" type="number" placeholder="18010101" />
    </el-form-item>

    <el-form-item prop="drawTime" label="开奖时间">
      <FormDateTimePicker
        @on-change="$set(formData, 'drawTime', $event)"
        :value="formData.drawTime"
      />
    </el-form-item>

    <el-form-item prop="startTime" label="开盘时间">
      <FormDateTimePicker
        @on-change="$set(formData, 'startTime', $event)"
        :value="formData.startTime"
      />
    </el-form-item>

    <el-form-item prop="closeTime" label="封盘时间">
      <FormDateTimePicker
        @on-change="$set(formData, 'closeTime', $event)"
        :value="formData.closeTime"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormDateTimePicker from '@/components/form/FormDateTimePicker'

export default {
  name: 'SixResultsForm',
  components: {
    FormDateTimePicker
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { drawno: '', drawTime: '', startTime: '', closeTime: '' },
      rules: {
        drawno: validators.validateRequired('彩票期号'),
        drawTime: validators.validateRequired('开奖时间'),
        startTime: validators.validateRequired('开盘时间'),
        closeTime: validators.validateRequired('封盘时间')
      }
    }
  }
}
</script>
