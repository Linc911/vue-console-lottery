<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改支付接口配置" width="768px">
    <PaymentPortForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import PaymentPortForm from './PaymentPortForm'

export default {
  name: 'PaymentPortDialogUpdate',
  components: {
    PaymentPortForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateTransactionPaymentPort',
      httpParams: {}
    }
  },
  watch: {
    data () {
      this.httpParams.id = this.data.id
    }
  }
}
</script>
