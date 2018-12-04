<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新分组" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="name" label="分组名称">
        <el-input v-model.trim="formData.name" placeholder="VIP客户组" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="存款超过100万之间的" />
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
  name: 'GroupSettingDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'postSystemGroupChange',
      formData: { },
      rules: {
        name: FormValition.validateRequired('分组名称')
      }
    }
  }
}
</script>
