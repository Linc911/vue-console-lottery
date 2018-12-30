<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新备用网站" width="500px">
    <WebsiteStandbyForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import WebsiteStandbyForm from './WebsiteStandbyForm'

export default {
  name: 'WebsiteStandbyDialogCreate',
  components: {
    WebsiteStandbyForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteStandbyItem'
    }
  }
}
</script>
