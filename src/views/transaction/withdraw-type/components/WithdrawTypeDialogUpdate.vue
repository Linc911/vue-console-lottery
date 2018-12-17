<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改出款商户类型" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formUpdate"
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
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'WithdrawTypeDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWithdrawAccountTypeItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', sort: '', status: '' },
      rules: {
        name: FormValidation.validateRequired('类型名称'),
        status: FormValidation.validateSelect('启用状态'),
        sort: FormValidation.validateInteger('排序')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { id: this.data.dictionaryId, type: 5 }
    }
  }
}
</script>
