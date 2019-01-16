<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改香港六合彩信息" width="500px">
    <SixResultsForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import SixResultsForm from './SixResultsForm'

export default {
  name: 'SixResultsDialogUpdate',
  components: {
    SixResultsForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSixOddsItem'
    }
  }
}
</script>
