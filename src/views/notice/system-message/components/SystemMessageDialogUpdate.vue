<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改系统消息" width="500px">
    <SystemMessageDialogForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import SystemMessageDialogForm from './SystemMessageDialogForm'

export default {
  name: 'SystemMessageDialogUpdate',
  components: {
    SystemMessageDialogForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemMessageItem'
    }
  }
}
</script>
