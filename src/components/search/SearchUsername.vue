<template lang="html">
  <el-form-item label="会员账号">
    <el-input v-model="username" @input="$emit('on-change', username)" placeholder="会员账号" clearable />
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchUsername',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    reset () {
      this.username = ''
    }
  }
}
</script>
