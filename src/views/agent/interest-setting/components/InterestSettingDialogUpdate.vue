<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改返水计划设置" width="768px">
    <InterestSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import InterestSettingForm from './InterestSettingForm'

export default {
  name: 'InterestSettingDialogCreate',
  components: {
    InterestSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateAgentInterestSettingItem',
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
