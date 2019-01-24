<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="修改彩票游戏配置" width="760px">
      <LotterySettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

      <span slot="footer">
        <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import LotterySettingForm from './LotterySettingForm'

export default {
  name: 'LotterySettingDialogUpdate',
  components: {
    LotterySettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateLotterySettingItem',
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
