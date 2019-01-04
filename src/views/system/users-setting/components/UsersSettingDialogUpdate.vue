<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改用户信息" width="760px">
    <UsersSettingForm @on-validated="handleValidationSuccess" :data="data" hidden ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import UsersSettingForm from './UsersSettingForm'

export default {
  name: 'UsersSettingDialogUpdate',
  components: {
    UsersSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemUsersItem',
      httpParams: { id: this.data.idStr, type: 'BACKEND' }
    }
  },
  watch: {
    data () {
      this.httpParams.id = this.data.idStr
    }
  }
}
</script>
