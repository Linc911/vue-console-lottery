<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改游戏规则" width="80%" style="min-width: 768px">
    <LotteryRulesForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import LotteryRulesForm from './LotteryRulesForm'

export default {
  name: 'LotteryRulesDialogUpdate',
  components: {
    LotteryRulesForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateLotteryRulesItem'
    }
  }
}
</script>
