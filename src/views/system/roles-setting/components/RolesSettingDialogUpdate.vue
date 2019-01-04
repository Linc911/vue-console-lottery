<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改角色信息" width="500px">
    <RolesSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import RolesSettingForm from './RolesSettingForm'

export default {
  name: 'RolesSettingDialogUpdate',
  components: {
    RolesSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemRolesItem',
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
