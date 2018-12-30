<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新会员注册配置" width="500px">
    <RegistryUserForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import RegistryUserForm from './RegistryUserForm'

export default {
  name: 'RegitryUserDialogCreate',
  components: {
    RegistryUserForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteRegistryUserItem'
    }
  }
}
</script>
