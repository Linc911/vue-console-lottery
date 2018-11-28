<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改用户信息" width="760px">
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
        <el-input @keyup.native.enter="submitForm('roleCreateForm')" v-model.trim="formData.name" placeholder="角色名称" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

export default {
  name: 'RolesSettingDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemRolesItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '' },
      rules: {
        name: [
          { required: true, message: '角色名称' },
          { max: 20, message: '角色名称不能超过20位字符' }
        ]
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
