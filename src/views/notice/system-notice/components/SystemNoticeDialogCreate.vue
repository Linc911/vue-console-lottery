<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新系统公告" width="500px">
    <SystemNoticeDialogForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import SystemNoticeDialogForm from './SystemNoticeDialogForm'

export default {
  name: 'SystemNoticeDialogCreate',
  components: {
    SystemNoticeDialogForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateSystemNoticeItem'
    }
  }
}
</script>
