<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新网站菜单" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="name" label="菜单名称">
        <el-input v-model.trim="formData.name" placeholder="关于我们" />
      </el-form-item>

      <el-form-item prop="sort" label="排列顺序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
      </el-form-item>

      <el-form-item prop="content" label="菜单内容">
        <el-input v-model.trim="formData.content" type="textarea" rows="3" placeholder="对我们公司的详细介绍..." />
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
  name: 'MenuSettingDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteMenuItem',
      formData: { name: '', content: '', sort: 0 },
      rules: {
        name: FormValidation.validateRequired('显示名称'),
        sort: FormValidation.validateInteger('排序'),
        content: FormValidation.validateRequired('网站菜单内容')
      }
    }
  }
}
</script>
