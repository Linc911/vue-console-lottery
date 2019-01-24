<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新汇款配置" width="768px">
    <RemittanceUserForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import RemittanceUserForm from './RemittanceUserForm'

export default {
  name: 'RemittanceUserDialogCreate',
  components: {
    RemittanceUserForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createTransactionRemittance'
    }
  }
}
</script>
