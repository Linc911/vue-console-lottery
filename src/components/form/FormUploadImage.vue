<template lang="html">
  <el-upload
    :action="action"
    :on-success="handleUploadSuccess"
    :on-remove="handleRemoveFile"
    :limit="limit"
    :disabled="uploadDisabled"
    list-type="picture-card"
  >
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script>
export default {
  name: 'FormUploadImage',
  props: {
    limit: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      action: process.env.VUE_APP_BASEURL + '/api-f/files-anon/fdfsupload',
      uploadDisabled: false
    }
  },
  methods: {
    // 上传完成时，将状态 emit 到父组件
    handleUploadSuccess (response, file, fileList) {
      // 当超过上传数量时，关闭上传功能（组件功能不齐全，暂不做此限制）
      // if (fileList.length <= this.limit) {
      //   this.uploadDisabled = true
      // }

      this.$message.success(`上传成功 该功能只能上传${this.limit}张图片`)

      this.$emit('on-uploaded', { response, file, fileList })
    },
    // 删除已上传图片时
    handleRemoveFile (file) {
      if (this.limit <= 1) {
        this.$emit('on-removed', '')
      } else {
        this.$emit('on-removed', file)
      }
    }
  }
}
</script>
