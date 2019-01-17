<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改彩票赔率设置" width="500px">
    <LotteryOddsForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import LotteryOddsForm from './LotteryOddsForm'

export default {
  name: 'LotteryOddsDialogUpdate',
  components: {
    LotteryOddsForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateLotterOddsItem',
      httpParams: {}
    }
  },
  watch: {
    data () {
      this.httpParams = { gameType: this.data.gameType, type: this.data.type }
    }
  }
}
</script>
