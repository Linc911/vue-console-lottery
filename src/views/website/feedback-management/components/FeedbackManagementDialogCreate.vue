<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新问题反馈" width="500px">
    <FeedbackManagementForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FeedbackManagementForm from './FeedbackManagementForm'

export default {
  name: 'FeedbackManagementDialogCreate',
  components: {
    FeedbackManagementForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteFeedbackItem'
    }
  }
}
</script>
