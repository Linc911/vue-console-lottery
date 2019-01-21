<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改菜单配置" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
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
      updateHttpAPI: 'updateSystemMenuItem',
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
