<template lang="html">
  <div class="item-create">
    <el-dialog :visible.sync="dialogVisible" title="创建新汇款快捷" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="130px"
        size="small"
        ref="formCreate"
        class="clearfix"
      >
        <el-form-item prop="payName" label="支付户名">
          <el-input v-model.trim="formData.payName" placeholder="支付户名" />
        </el-form-item>

        <FormSelect
          @on-change="$set(formData, 'quickPayTypeId', $event)"
          httpAPIName="fetchRemittanceShortcutType"
          :httpAPIParams="{ params: { type: 2 } }"
          labelAttr="name"
          valueAttr="dictionaryId"
          prop="quickPayTypeId"
          label="汇款快捷类型"
          ref="quickPayTypeId"
        />

        <el-form-item prop="payUrl" label="支付链接地址">
          <el-input v-model.trim="formData.payUrl" placeholder="支付链接地址" />
        </el-form-item>

        <el-form-item prop="codeUrl" label="二维码链接地址">
          <el-input v-model.trim="formData.codeUrl" placeholder="二维码链接地址" />
        </el-form-item>

        <el-form-item prop="phoneStatus" label="是否手机端">
          <el-radio-group v-model="formData.phoneStatus">
            <el-radio :label="0">是</el-radio>
            <el-radio :label="1">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="pcStatus" label="是否电脑端">
          <el-radio-group v-model="formData.pcStatus">
            <el-radio :label="0">是</el-radio>
            <el-radio :label="1">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="status" label="是否启用">
          <el-radio-group v-model="formData.status">
            <el-radio :label="0">启用</el-radio>
            <el-radio :label="1">禁用</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="sort" label="排列顺序">
          <el-input v-model="formData.sort" placeholder="排列顺序" type="number" />
        </el-form-item>

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
import { dialogCreateMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'
import FormRadio from '@/components/form/FormRadio'

export default {
  name: 'RemittanceShortcutDialogCreate',
  components: {
    FormSelect,
    FormRadio
  },
  mixins: [ dialogCreateMixin ],
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
        sort: this.$utils.generateFormValidatorInteger('排序顺序'),
        userGroups: { required: true, message: '会员分组至少选择一个' }
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
