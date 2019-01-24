<template>
  <el-dialog :visible.sync="dialogVisible" title="修改支付类型配置" width="500px">
    <PaymentTypeForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import PaymentTypeForm from './PaymentTypeForm'

export default {
  name: 'PaymentTypeDialogUpdate',
  components: {
    PaymentTypeForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateTransactionPaymentType',
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
