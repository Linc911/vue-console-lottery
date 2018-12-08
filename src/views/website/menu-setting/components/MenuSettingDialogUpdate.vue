<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改网站菜单配置" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formUpdate"
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
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'MenuSettingDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteMenuItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', content: '', sort: '' },
      rules: {
        name: FormValidation.validateRequired('显示名称'),
        sort: FormValidation.validateInteger('排序'),
        content: FormValidation.validateRequired('网站菜单内容')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { webMenuId: this.data.webMenuId }
    }
  }
}
</script>
