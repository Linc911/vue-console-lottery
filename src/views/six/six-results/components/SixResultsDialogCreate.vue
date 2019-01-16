<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新香港六合彩彩期" width="500px">
    <SixResultsForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import SixResultsForm from './SixResultsForm'

export default {
  name: 'SixResultsDialogCreate',
  components: {
    SixResultsForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSixOfficalItem'
    }
  }
}
</script>
