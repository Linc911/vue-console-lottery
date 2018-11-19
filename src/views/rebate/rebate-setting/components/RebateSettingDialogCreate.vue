<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="创建新返水计划设置" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="120px"
        size="small"
        class="clearfix"
        ref="formCreate"
      >
        <el-form-item prop="name" label="返水计划名称">
          <el-input v-model.trim="formData.name" placeholder="请输入名称" />
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

        <el-form-item prop="upperLimit" label="投注上限">
          <el-input v-model.trim="formData.upperLimit" type="number" min="0" placeholder="投注上限" />
        </el-form-item>

        <el-form-item prop="lowerLimit" label="投注下限">
          <el-input v-model.trim="formData.lowerLimit" type="number" min="0" placeholder="投注下限" />
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

        <FormSelect
          @on-change="$set(formData, 'rebateUserGroups', $event)"
          :value="formData.rebateUserGroups"
          httpAPIName="fetchUserGroups"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="groupId"
          prop="rebateUserGroups"
          label="会员分组"
          multiple
          ref="rebateUserGroups"
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

import FormSelect from '@/components/form/FormSelect'
import FormRadio from '@/components/form/FormRadio'
import FormTimeSelect from '@/components/form/FormTimeSelect'

export default {
  name: 'RebateSettingDialogCreate',
  components: {
    FormSelect,
    FormRadio,
    FormTimeSelect
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createRebateSettingList',
      formData: { rebateUserGroups: [], status: 0 },
      rules: {
        name: { required: true, message: '返水名称不能为空' },
        gameConfigId: { required: true, message: '游戏类型必须选择一个' },
        upperLimit: this.$utils.generateFormValidatorInteger('投注上限'),
        lowerLimit: this.$utils.generateFormValidatorInteger('投注下限'),
        ratio: { required: true, message: '返佣比率不能为空' },
        status: { required: true, message: '启用状态必须选择一个' },
        // startTime: { required: true, message: '计划开始时间不能为空' },
        // endTime: { required: true, message: '计划结束时间不能为空' },
        rebateUserGroups: { required: true, message: '会员分组至少选择一个', trigger: 'change' }
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
