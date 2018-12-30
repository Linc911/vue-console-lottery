<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改网站菜单配置" width="450px">
    <MenuSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import MenuSettingForm from './MenuSettingForm'

export default {
  name: 'MenuSettingDialogUpdate',
  components: {
    MenuSettingForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteMenuItem'
    }
  }
}
</script>
