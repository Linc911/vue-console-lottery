<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改出款商户配置" width="768px">
    <WithdrawAccountForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import WithdrawAccountForm from './WithdrawAccountForm'

export default {
  name: 'WithdrawAccountDialogUpdate',
  components: {
    WithdrawAccountForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWithdrawAccountItem',
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
