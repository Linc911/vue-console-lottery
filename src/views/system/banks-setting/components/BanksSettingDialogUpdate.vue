<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改银行卡配置" width="500px">
    <BanksSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import BanksSettingForm from './BanksSettingForm'

export default {
  name: 'UsersSettingDialogUpdate',
  components: {
    BanksSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemUsersItem',
      httpParams: {}
    }
  },
  watch: {
    data () {
      this.httpParams.id = this.data.id
    }
  }
}
</script>
