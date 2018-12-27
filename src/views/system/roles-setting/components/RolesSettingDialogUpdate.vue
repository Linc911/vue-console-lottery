<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改用户信息" width="400px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="90px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="code" label="Code" >
        <el-input v-model="formData.code" disabled />
      </el-form-item>

      <el-form-item label="角色名称" prop="name">
        <el-input
          @keyup.native.enter="submitForm('roleCreateForm')"
          v-model.trim="formData.name"
          placeholder="角色名称"
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

import validators from '@/config/form'

export default {
  name: 'RolesSettingDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemRolesItem',
      idParams: {},
      formData: { name: '' },
      rules: {
        name: validators.validateStringLength('角色名称', 1, 20)
      }
    }
  },
  watch: {
    // 唯一标识每个接口可能不样，要动态传入
    data () {
      this.idParams = { id: this.data.id }
    }
  }
}
</script>
