<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改出款商户类型" width="500px">
    <WithdrawTypeForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import WithdrawTypeForm from './WithdrawTypeForm'

export default {
  name: 'WithdrawTypeDialogUpdate',
  components: {
    WithdrawTypeForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWithdrawAccountTypeItem',
      httpParams: {}
    }
  },
  watch: {
    data () {
      this.httpParams = { id: this.data.dictionaryId, type: 5 }
    }
  }
}
</script>
