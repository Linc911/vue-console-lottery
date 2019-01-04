<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新角色" width="500px">
    <RolesSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import RolesSettingForm from './RolesSettingForm'

export default {
  name: 'RolesSettingDialogCreate',
  components: {
    RolesSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSystemRolesItem'
    }
  }
}
</script>
