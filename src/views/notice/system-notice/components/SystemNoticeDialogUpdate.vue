<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改系统公告" width="500px">
    <SystemNoticeDialogForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import SystemNoticeDialogForm from './SystemNoticeDialogForm'

export default {
  name: 'SystemNoticeDialogUpdate',
  components: {
    SystemNoticeDialogForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemNoticeItem'
    }
  }
}
</script>
