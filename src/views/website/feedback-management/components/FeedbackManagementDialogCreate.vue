<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新问题反馈" width="450px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="title" label="反馈标题">
        <el-input v-model.trim="formData.title" placeholder="字数控制在50字以内" />
      </el-form-item>

      <el-form-item prop="fileUrl" label="文件路径">
        <el-input v-model.trim="formData.fileUrl" placeholder="http://www.baidu.com/xxx.doc" />
      </el-form-item>

      <el-form-item prop="content" label="反馈内容">
        <el-input v-model.trim="formData.content" type="textarea" rows="5" placeholder="字数控制在150字以内,内容较多可以上传附件形式上传" />
      </el-form-item>

      <!-- <el-form-item prop="remark" label="备注" class="custom-block">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="微信登录方式..." />
      </el-form-item> -->
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
  name: 'FeedbackManagementDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWebsiteFeedbackItem',
      formData: {},
      rules: {
        title: FormValidation.validateRequired('反馈标题'),
        content: FormValidation.validateRequired('反馈内容'),
        fileUrl: FormValidation.validateRequired('文件路径')
      }
    }
  }
}
</script>
