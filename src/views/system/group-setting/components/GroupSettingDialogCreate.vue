<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新分组" width="500px">
    <GroupSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import GroupSettingForm from './GroupSettingForm'

export default {
  name: 'GroupSettingDialogCreate',
  components: {
    GroupSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'postSystemGroupItem'
    }
  }
}
</script>
