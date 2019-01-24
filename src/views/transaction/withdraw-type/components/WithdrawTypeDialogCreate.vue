<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新出款商户类型" width="500px">
    <WithdrawTypeForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import WithdrawTypeForm from './WithdrawTypeForm'

export default {
  name: 'WithdrawTypeDialogCreate',
  components: {
    WithdrawTypeForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWithdrawAccountTypeItem'
    }
  }
}
</script>
