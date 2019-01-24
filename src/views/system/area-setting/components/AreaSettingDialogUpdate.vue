<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改银行配置" width="500px">
    <AreaSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import AreaSettingForm from './AreaSettingForm'

export default {
  name: 'AreaSettingDialogUpdate',
  components: {
    AreaSettingForm
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
