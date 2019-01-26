<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新返水计划设置" width="768px">
    <PlanForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import PlanForm from './Form'

export default {
  name: 'DialogCreate',
  components: {
    PlanForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateRebateSettingList'
    }
  }
}
</script>
