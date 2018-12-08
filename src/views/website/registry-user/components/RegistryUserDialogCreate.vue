<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新会员注册配置" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="name" label="显示名称">
        <el-input v-model.trim="formData.name" placeholder="微信" />
      </el-form-item>

      <el-form-item prop="value" label="注册属性">
        <el-input v-model.trim="formData.value" placeholder="wechat" />
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="微信登录方式..." />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'RegitryUserDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteRegistryUserItem',
      formData: { name: '', value: '', sort: 0, status: 0, type: 3 },
      rules: {
        name: FormValidation.validateRequired('显示名称'),
        value: FormValidation.validateRequired('注册属性'),
        sort: FormValidation.validateInteger('排序'),
        status: FormValidation.validateSelect('启用状态')
      }
    }
  }
}
</script>
