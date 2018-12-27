<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改分组信息" width="500px">
    <GroupSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import GroupSettingForm from './GroupSettingForm'

export default {
  name: 'GroupSettingDialogUpdate',
  components: {
    GroupSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'postSystemGroupItem'
    }
  }
}
</script>
