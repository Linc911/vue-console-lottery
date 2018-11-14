<template>
<div class="dialog-update">
  <el-dialog :visible.sync="dialogVisible" title="修改支付类型配置" width="450px">
    <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="formUpdate">
      <el-form-item label="类型名称">
        <el-input :value="formData.name" disabled />
      </el-form-item>

      <FormSelectStatic
        @on-change="formData.status = $event"
        :value="formData.status"
        :options="[
          { value: 0, label: '推荐' },
          { value: 1, label: '不推荐' }
        ]"
        prop="status"
        label="是否推荐"
        width="100%"
      />

      <el-form-item prop="sort" label="排序">
        <el-input v-model="formData.sort" type="number" min="0" placeholder="排序" />
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="formData.remark" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import { updateMixin } from '@/mixins'

import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'PaymentTypeDialogUpdate',
  components: {
    FormSelectStatic
  },
  mixins: [ updateMixin ],
  data () {
    return {
      idObject: {}, // 必须携带的参数
      updateHttpAPI: 'updateTransactionPaymentType',
      // 要设置初始值，否则表单无法验证
      formData: { sort: '', status: '' },
      rules: {
        sort: { required: true, message: '排序顺序不能为空' },
        status: { required: true, message: '推荐状态必须选择其中一个', trigger: 'change' }
      }
    }
  },
  watch: {
    data () {
      this.idObject = { id: this.data.id }
    }
  }
}
</script>
