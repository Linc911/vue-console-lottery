<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新出款商户配置" width="760px">
    <WithdrawAccountForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import WithdrawAccountForm from './WithdrawAccountForm'

export default {
  name: 'WithdrawAccountDialogCreate',
  components: {
    WithdrawAccountForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWithdrawAccountItem'
    }
  }
}
</script>
