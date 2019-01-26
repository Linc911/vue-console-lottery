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

    <el-form-item prop="lowerLimit" label="投注注数下限">
      <el-input v-model.trim="formData.lowerLimit" type="number" min="0" placeholder="投注下限" />
    </el-form-item>

    <el-form-item prop="upperLimit" label="投注注数上限">
      <el-input v-model.trim="formData.upperLimit" type="number" min="0" placeholder="投注上限" />
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

    <el-form-item prop="rebateUserGroups" label="会员分组" class="custom-block">
      <FormSelectAsync
        @on-change="$set(formData, 'rebateUserGroups', $event)"
        :value="formData.rebateUserGroups"
        httpAPIName="fetchUserGroups"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="groupId"
        multiple
        ref="rebateUserGroups"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormTimeSelect from '@/components/form/FormTimeSelect'
import FormSelectAsync from '@/components/form/FormSelectAsync'

export default {
  name: 'RebatePlanForm',
  components: {
    FormTimeSelect,
    FormSelectAsync
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', gameConfigId: '', upperLimit: '', lowerLimit: '', ratio: '', rebateUserGroups: [], status: 0 },
      rules: {
        name: validators.validateRequired('返水名称'),
        gameConfigId: validators.validateSelect('游戏类型'),
        upperLimit: validators.validateInteger('投注上限'),
        lowerLimit: validators.validateInteger('投注下限'),
        ratio: validators.validateRequired('返佣比率'),
        status: validators.validateRequired('启用状态'),
        rebateUserGroups: validators.validateSelect('会员分组')
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
