<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新菜单" width="500px">
    <MenuSettingForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
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
      createHttpAPI: 'createSystemMenuItem'
    }
  }
}
</script>
