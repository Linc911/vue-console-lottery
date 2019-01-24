<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新银行卡" width="500px">
    <BanksSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import BanksSettingForm from './BanksSettingForm'

export default {
  name: 'BanksSettingDialogCreate',
  components: {
    BanksSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSystemBanksItem'
    }
  }
}
</script>
