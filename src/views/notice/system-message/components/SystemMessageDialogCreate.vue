<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新系统消息" width="500px">
    <SystemMessageDialogForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import SystemMessageDialogForm from './SystemMessageDialogForm'

export default {
  name: 'SystemMessageDialogCreate',
  components: {
    SystemMessageDialogForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateSystemMessageItem'
    }
  }
}
</script>
