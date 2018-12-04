<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改权限信息" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="name" label="权限名称">
        <el-input v-model.trim="formData.name" placeholder="日志查询" />
      </el-form-item>

      <el-form-item prop="permission" label="权限标识">
        <el-input
          @keyup.native.enter="submitForm('permissionCreateForm')"
          v-model.trim="formData.permission"
          placeholder="log:query"
        />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormValition from '@/config/form'

export default {
  name: 'PermissionsSettingDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystePermissionsItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', permission: '' },
      rules: {
        name: FormValition.validateRequired('权限名称'),
        permission: FormValition.validateRequired('权限标识')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { id: this.data.id }
    }
  }
}
</script>
