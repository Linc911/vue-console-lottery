<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="创建新会员返水配置" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="120px"
        size="small"
        ref="formCreate"
        class="clearfix"
      >
        <el-form-item prop="name" label="返水名称">
          <el-input v-model="formData.name" placeholder="请输入名称" />
        </el-form-item>

        <FormSelect
          @on-change="$set(formData, 'gameConfigId', $event)"
          :value="formData.gameConfigId"
          httpAPIName="fetchGameClasses"
          :httpAPIParams="{}"
          labelAttr="name"
          valueAttr="id"
          prop="gameConfigId"
          label="游戏类型"
          ref="gameConfigId"
        />

        <el-form-item prop="upperLimit" label="投注上限">
          <el-input v-model="formData.upperLimit" type="number" min="0" placeholder="投注上限" />
        </el-form-item>

        <el-form-item prop="lowerLimit" label="投注下限">
          <el-input v-model="formData.lowerLimit" type="number" min="0" placeholder="投注下限" />
        </el-form-item>

        <el-form-item prop="ratio" label="返佣比率">
          <el-input v-model="formData.ratio" type="number" min="0" placeholder="返佣比率" />
        </el-form-item>

        <el-form-item prop="status" label="是否启用">
          <el-radio-group v-model="formData.status">
            <el-radio :label="0">启用</el-radio>
            <el-radio :label="1">禁用</el-radio>
          </el-radio-group>
        </el-form-item>

        <!-- <FormDateRange
          :prop="startTime"
        /> -->

        <FormSelect
          @on-change="$set(formData, 'userGroups', $event)"
          :value="formData.userGroups"
          httpAPIName="fetchUserGroups"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="groupId"
          prop="userGroups"
          label="会员分组"
          multiple
          ref="userGroups"
        />
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'
import FormRadio from '@/components/form/FormRadio'

export default {
  name: 'RebateSettingDialogCreate',
  components: {
    FormSelect,
    FormRadio
  },
  mixins: [ createMixin ],
  data () {
    return {
      createHttpAPI: 'createTransactionPaymentPort',
      formData: { userGroups: [] },
      rules: {
        payName: { required: true, message: '支付户名不能为空' },
        quickPayTypeId: { required: true, message: '汇款快捷类型必须选择一个' },
        payUrl: { required: true, message: '支付链接地址不能为空' },
        codeUrl: { required: true, message: '二维码链接地址不能为空' },
        status: { required: true, message: '启用状态必须选择一个' },
        pcStatus: { required: true, message: '手机端状态必须选择一个' },
        phoneStatus: { required: true, message: '电脑端状态必须选择一个' },
        sort: { required: true, message: '排序顺序不能为空' },
        userGroups: { required: true, message: '会员分组至少选择一个', trigger: 'change' }
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
