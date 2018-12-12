<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新出款商户类型" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="name" label="类型名称">
        <el-input v-model.trim="formData.name" placeholder="控制在20字以内" />
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="控制在200字以内" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'WithdrawAccountDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateTransactionWithdrawAccountItem',
      formData: { sort: 0, status: 0, type: 5 },
      rules: {
        name: FormValidation.validateRequired('类型名称'),
        status: FormValidation.validateSelect('启用状态'),
        sort: FormValidation.validateInteger('排序')
      }
    }
  }
}
</script>
