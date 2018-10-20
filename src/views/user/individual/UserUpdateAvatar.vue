<template lang="html">
  <section class="user-avartar">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">小于500kb的jpg/png图片</div>
    </el-upload>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fileList2: [
        { name: 'food.jpeg', url: 'https://placehold.it/360x360' }
      ]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>
