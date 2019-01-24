<template>
  <el-dialog :visible.sync="dialogVisible" title="创建新支付类型" width="500px">
    <PaymentTypeForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import PaymentTypeForm from './PaymentTypeForm'

export default {
  name: 'PaymentTypeDialogCreate',
  components: {
    PaymentTypeForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createTransactionPaymentType'
    }
  }
}
</script>
