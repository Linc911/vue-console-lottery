<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新优惠活动" width="768px">
    <ActivityListForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import ActivityListForm from './ActivityListForm'

export default {
  name: 'ActivityListDialogCreate',
  components: {
    ActivityListForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateActivityItem'
    }
  }
}
</script>
