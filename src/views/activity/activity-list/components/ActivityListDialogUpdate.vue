<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新优惠活动" width="768px">
    <ActivityListForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import ActivityListForm from './ActivityListForm'

export default {
  name: 'ActivityListDialogUpdate',
  components: {
    ActivityListForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateActivityItem',
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
