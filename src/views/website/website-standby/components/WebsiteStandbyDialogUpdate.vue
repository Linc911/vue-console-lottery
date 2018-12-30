<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改备用网站配置" width="500px">
    <WebsiteStandbyForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import WebsiteStandbyForm from './WebsiteStandbyForm'

export default {
  name: 'WebsiteStandbyDialogUpdate',
  components: {
    WebsiteStandbyForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteStandbyItem'
    }
  }
}
</script>
