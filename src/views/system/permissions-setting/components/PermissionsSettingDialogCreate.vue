<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新权限" width="500px">
    <PermissionsSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import PermissionsSettingForm from './PermissionsSettingForm'

export default {
  name: 'PermissionsSettingDialogCreate',
  components: {
    PermissionsSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSystePermissionsItem'
    }
  }
}
</script>
