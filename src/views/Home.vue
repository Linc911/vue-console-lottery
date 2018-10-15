<template lang="html">
  <section class="home">
    <el-row>
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="success" disabled>Success</el-button>
      <el-button type="info" disabled>Info</el-button>
      <el-button type="warning" disabled>Warning</el-button>
      <el-button type="danger" disabled>Danger</el-button>
    </el-row>
  </section>
</template>

<script>
export default {
  created () {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => console.log(response))
  }
}
</script>

<style lang="scss" scoped>
</style>
