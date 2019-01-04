<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改权限信息" width="500px">
    <PermissionsSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import PermissionsSettingForm from './PermissionsSettingForm'

export default {
  name: 'PermissionsSettingDialogUpdate',
  components: {
    PermissionsSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystePermissionsItem',
      httpParams: { id: this.data.id }
    }
  },
  watch: {
    data () {
      this.httpParams.id = this.data.id
    }
  }
}
</script>
