<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新地区" width="500px">
    <AreaSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import AreaSettingForm from './AreaSettingForm'

export default {
  name: 'AreaSettingDialogCreate',
  components: {
    AreaSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateSystemAreaItem'
    }
  }
}
</script>
