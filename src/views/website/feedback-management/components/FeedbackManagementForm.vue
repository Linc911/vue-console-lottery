<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    <el-form-item prop="title" label="反馈标题">
      <el-input v-model.trim="formData.title" placeholder="字数控制在50字以内" />
    </el-form-item>

    <el-form-item prop="fileUrl" label="文件路径">
      <el-input v-model.trim="formData.fileUrl" placeholder="http://www.baidu.com/xxx.doc" />
    </el-form-item>

    <el-form-item prop="content" label="反馈内容">
      <el-input v-model.trim="formData.content" type="textarea" rows="5" placeholder="字数控制在150字以内,内容较多可以上传附件形式上传" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

export default {
  name: 'FeedbackManagemen',
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { title: '', fileUrl: '', content: '' },
      rules: {
        title: validators.validateRequired('反馈标题'),
        content: validators.validateRequired('反馈内容'),
        fileUrl: validators.validateRequired('文件路径')
      }
    }
  }
}
</script>
