<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新角色" width="400px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="90px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="code" label="Code" >
        <el-input v-model.trim="formData.code" placeholder="code(一旦创建，不能修改)" />
      </el-form-item>

      <el-form-item label="角色名称" prop="name">
        <el-input @keyup.native.enter="submitForm('roleCreateForm')" v-model.trim="formData.name" placeholder="角色名称" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

export default {
  name: 'RolesSettingDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createSystemRolesItem',
      formData: {},
      rules: {
        code: [
          { required: true, message: 'code不能为空' },
          { max: 20, message: 'code不能超过20位字符' }
        ],
        name: [
          { required: true, message: '角色名称' },
          { max: 20, message: '角色名称不能超过20位字符' }
        ]
      }
    }
  }
}
</script>
