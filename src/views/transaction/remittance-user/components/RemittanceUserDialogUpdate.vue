<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改汇款配置" width="768px">
    <RemittanceUserForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import RemittanceUserForm from './RemittanceUserForm'

export default {
  name: 'RemittanceUserDialogUpdate',
  components: {
    RemittanceUserForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateTransactionRemittance',
      httpParams: {}
    }
  },
  watch: {
    data () {
      this.httpParams.paymentMerchantId = this.data.paymentMerchantId
    }
  }
}
</script>
