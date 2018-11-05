<template lang="html">
  <el-form-item :label="label">
    <div class="el-input__inner">
      <input autocomplete="off" placeholder="开始日期" name="" class="el-range-input">
      <span class="el-range-separator">至</span>
      <input autocomplete="off" placeholder="开始日期" name="" class="el-range-input">
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchNumberRange',
  props: {
    label: {
      type: String,
      required: true
    }
  },
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
