<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新用户" width="760px">
    <UsersSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import UsersSettingForm from './UsersSettingForm'

export default {
  name: 'UsersSettingDialogCreate',
  components: {
    UsersSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSystemUsersList'
    }
  }
}
</script>
