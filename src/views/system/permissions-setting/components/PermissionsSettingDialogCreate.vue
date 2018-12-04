<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新权限" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
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
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValition from '@/config/form'

export default {
  name: 'PermissionsSettingDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSystePermissionsItem',
      formData: {},
      rules: {
        name: FormValition.validateRequired('权限名称'),
        permission: FormValition.validateRequired('权限标识')
      }
    }
  }
}
</script>
