<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="110px"
    size="small"
    ref="form"
    class="clearfix"
  >
    <el-form-item prop="name" label="返水计划名称">
      <el-input v-model.trim="formData.name" placeholder="请输入名称" />
    </el-form-item>

    <el-form-item prop="gameConfigId" label="游戏类型">
      <FormSelectAsync
        @on-change="$set(formData, 'gameConfigId', $event)"
        :value="formData.gameConfigId"
        httpAPIName="fetchGameClasses"
        labelAttr="name"
        valueAttr="id"
        ref="gameConfigId"
      />
    </el-form-item>

    <el-form-item prop="upperLimit" label="投注上限">
      <el-input v-model.trim="formData.upperLimit" type="number" min="0" placeholder="投注上限" />
    </el-form-item>

    <el-form-item prop="lowerLimit" label="投注下限">
      <el-input v-model.trim="formData.lowerLimit" type="number" min="0" placeholder="投注下限" />
    </el-form-item>

    <el-form-item prop="ratio" label="返佣比率%">
      <el-input v-model.trim="formData.ratio" type="number" min="0" placeholder="返佣比率" />
    </el-form-item>

    <el-form-item prop="status" label="是否启用">
      <el-radio-group v-model="formData.status">
        <el-radio :label="0">启用</el-radio>
        <el-radio :label="1">禁用</el-radio>
      </el-radio-group>
    </el-form-item>

    <FormTimeSelect
      @on-change="$set(formData, 'startTime', $event)"
      :time="formData.startTime"
      prop="startTime"
      label="计划开始时间"
      placeholder="开始时间"
      ref="startTime"
    />

    <FormTimeSelect
      @on-change="$set(formData, 'endTime', $event)"
      :time="formData.endTime"
      prop="endTime"
      label="计划结束时间"
      placeholder="结束时间"
      ref="endTime"
    />
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelectAsync from '@/components/form/FormSelectAsync'
import FormTimeSelect from '@/components/form/FormTimeSelect'

export default {
  name: 'InterestSettingForm',
  components: {
    FormSelectAsync,
    FormTimeSelect
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', gameConfigId: '', upperLimit: '', lowerLimit: '', ratio: '', status: 0 },
      rules: {
        name: validators.validateRequired('分润设置名称'),
        gameConfigId: validators.validateSelect('游戏类型'),
        upperLimit: validators.validateInteger('投注上限'),
        lowerLimit: validators.validateInteger('投注下限'),
        ratio: validators.validateRequired('返佣比率'),
        status: validators.validateSelect('启用状态')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
