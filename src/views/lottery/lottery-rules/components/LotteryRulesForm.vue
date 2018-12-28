<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <FormSelectGame
      @on-change="$set(formData, 'gameType', $event)"
      :value="formData.gameType"
      httpAPIName="fetchGamesMenu"
      :httpAPIParams="{ params: { type: 1 } }"
      labelAttr="name"
      valueAttr="id"
      prop="gameType"
      label="游戏类型"
      filterable
      ref="gameType"
    />

    <el-form-item prop="type" label="应用场景">
      <el-radio-group v-model="formData.type">
        <el-radio :label="0">电脑页面</el-radio>
        <el-radio :label="1">手机页面</el-radio>
        <el-radio :label="2">手机APP</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="explain" label="游戏说明">
      <el-input
        v-model.trim="formData.explain"
        type="textarea"
        rows="8"
        placeholder="游戏说明"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelectGame from '@/components/form/FormSelectGame'

export default {
  name: 'GroupSettingForm',
  components: {
    FormSelectGame
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { gameType: '', type: 0, explain: '' }, // 验证的form属性必须要初始化，否则在更新时无法验证
      rules: {
        gameType: validators.validateSelect('游戏类型'),
        type: validators.validateSelect('应用场景'),
        explain: validators.validateRequired('游戏说明')
      }
    }
  }
}
</script>
