<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新网站菜单" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import MenuSettingForm from './MenuSettingForm'

export default {
  name: 'MenuSettingDialogCreate',
  components: {
    MenuSettingForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteMenuItem'
    }
  }
}
</script>
