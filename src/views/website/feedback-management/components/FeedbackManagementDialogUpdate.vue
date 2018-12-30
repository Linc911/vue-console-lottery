<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改问题反馈" width="500px">
    <FeedbackManagementForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FeedbackManagementForm from './FeedbackManagementForm'

export default {
  name: 'FeedbackManagementDialogUpdate',
  components: {
    FeedbackManagementForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteFeedbackItem'
    }
  }
}
</script>
