<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改会员注册配置" width="500px">
    <RegistryUserForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import RegistryUserForm from './RegistryUserForm'

export default {
  name: 'RegistryUserDialogUpdate',
  components: {
    RegistryUserForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteRegistryUserItem'
    }
  }
}
</script>
