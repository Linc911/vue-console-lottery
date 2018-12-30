<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新游戏规则" width="80%" style="min-width: 768px">
    <LotteryRulesForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import LotteryRulesForm from './LotteryRulesForm'

export default {
  name: 'LotteryRulesDialogCreate',
  components: {
    LotteryRulesForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateLotteryRulesItem'
    }
  }
}
</script>
