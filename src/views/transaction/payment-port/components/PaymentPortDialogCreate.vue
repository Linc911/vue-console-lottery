<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新支付接口" width="768px">
    <PaymentPortForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import PaymentPortForm from './PaymentPortForm'

export default {
  name: 'PaymentPortDialogCreate',
  components: {
    PaymentPortForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createTransactionPaymentPort'
    }
  }
}
</script>
