<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="创建新会员分润设置" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="120px"
        size="small"
        class="clearfix"
        ref="formCreate"
      >
        <el-form-item prop="name" label="分润设置名称">
          <el-input v-model.trim="formData.name" placeholder="代理分润" />
        </el-form-item>

        <FormSelect
          @on-change="$set(formData, 'gameConfigId', $event)"
          :value="formData.gameConfigId"
          httpAPIName="fetchGameClasses"
          labelAttr="name"
          valueAttr="id"
          prop="gameConfigId"
          label="游戏类型"
          ref="gameConfigId"
        />

        <el-form-item prop="upperLimit" label="有效投注上限">
          <el-input v-model.trim="formData.upperLimit" type="number" min="0" placeholder="最大不能超过1000注" />
        </el-form-item>

        <el-form-item prop="lowerLimit" label="有效投注下限">
          <el-input v-model.trim="formData.lowerLimit" type="number" min="0" placeholder="最小不能低于10注" />
        </el-form-item>

        <el-form-item prop="ratio" label="返佣比率%">
          <el-input v-model.trim="formData.ratio" type="number" min="0" placeholder="返佣比率" />
        </el-form-item>

        <el-form-item prop="status" label="启用状态">
          <el-radio-group v-model="formData.status">
            <el-radio :label="0">启用</el-radio>
            <el-radio :label="1">禁用</el-radio>
          </el-radio-group>
        </el-form-item>

        <FormTimeSelect
          @on-change="$set(formData, 'startTime', $event)"
          prop="startTime"
          label="计划开始时间"
          placeholder="开始时间"
          ref="startTime"
        />

        <FormTimeSelect
          @on-change="$set(formData, 'endTime', $event)"
          prop="endTime"
          label="计划结束时间"
          placeholder="结束时间"
          ref="endTime"
        />
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

import FormSelect from '@/components/form/FormSelect'
import FormTimeSelect from '@/components/form/FormTimeSelect'

export default {
  name: 'InterestSettingDialogCreate',
  components: {
    FormSelect,
    FormTimeSelect
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateAgentInterestSettingItem',
      formData: { status: 0 },
      rules: {
        name: FormValidation.validateRequired('分润设置名称'),
        gameConfigId: FormValidation.validateSelect('游戏类型'),
        upperLimit: FormValidation.validateInteger('投注上限'),
        lowerLimit: FormValidation.validateInteger('投注下限'),
        ratio: FormValidation.validateRequired('返佣比率'),
        status: FormValidation.validateSelect('启用状态')
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
