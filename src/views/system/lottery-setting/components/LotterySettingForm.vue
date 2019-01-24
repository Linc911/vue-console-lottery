<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="100px"
    size="small"
    ref="form"
    class="clearfix"
  >
    <el-form-item prop="name" label="游戏名称">
      <el-input v-model.trim="formData.name" placeholder="广东11选5" />
    </el-form-item>

    <el-form-item prop="information" label="游戏副标题">
      <el-input v-model.trim="formData.information" placeholder="11选5" />
    </el-form-item>

    <el-form-item prop="startTime" label="开始时间">
      <BaseTimePicker :second="formData.startTime" @on-change="handleTimePickerChange" />
    </el-form-item>

    <el-form-item prop="endTime" label="结束时间">
      <BaseTimePicker :second="formData.endTime" @on-change="handleTimePickerChange" />
    </el-form-item>

    <el-form-item prop="intervalTime" label="相隔时间">
      <BaseTimePicker :second="formData.intervalTime" @on-change="handleTimePickerChange" />
    </el-form-item>

    <el-form-item prop="url" label="开奖结果地址" class="custom-block">
      <el-input v-model.trim="formData.url" placeholder="https://baidu.com" />
    </el-form-item>

    <el-form-item prop="icon" label="游戏图标地址" class="custom-block">
      <el-input v-model.trim="formData.icon" placeholder="https://baidu.com" />
    </el-form-item>

    <el-form-item prop="crontab" label="开奖结果定时器crontab表达式" label-width="200px" class="custom-block">
      <el-input v-model.trim="formData.crontab" placeholder="0 0/5 9-23 * * ?" />
    </el-form-item>

    <el-form-item prop="myCrontab" label="系统封盘定时器crontab表达式" label-width="200px" class="custom-block">
      <el-input v-model.trim="formData.myCrontab" placeholder="0 0/5 9-23 * * ?" />
    </el-form-item>

    <el-form-item prop="sort" label="排序">
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="0" />
    </el-form-item>

    <el-form-item label="启用状态">
      <el-radio-group v-model="formData.status">
        <el-radio :label="1">启用</el-radio>
        <el-radio :label="0">禁用</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin, timePickerMixin } from '@/mixins'

import validators from '@/config/form'

import FormTimeSelect from '@/components/form/FormTimeSelect'

export default {
  name: 'LotterySettingForm',
  components: {
    FormTimeSelect
  },
  mixins: [ formComponentMixin, timePickerMixin ],
  data () {
    return {
      formData: {}, // 验证的form属性必须要初始化，否则在更新时无法验证
      rules: {
        name: validators.validateRequired('游戏名称')
      }
    }
  }
}
</script>

<style scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
