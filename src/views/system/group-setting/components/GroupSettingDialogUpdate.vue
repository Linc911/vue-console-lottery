<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改分组信息" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="name" label="分组名称">
        <el-input v-model.trim="formData.name" placeholder="VIP客户组" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="存款超过100万之间的" />
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
  name: 'GroupSettingDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'postSystemGroupChange',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '' },
      rules: {
        name: FormValition.validateRequired('分组名称')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { id: this.data.groupId }
    }
  }
}
</script>
