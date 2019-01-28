<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新会员分润设置" width="768px">
    <InterestSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import InterestSettingForm from './InterestSettingForm'

export default {
  name: 'InterestSettingDialogCreate',
  components: {
    InterestSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateAgentInterestSettingItem'
    }
  }
}
</script>
