<template lang="html">
  <el-form-item :label="label" class="el-range-editor--small el-date-editor el-range-editor">
    <div class="el-input__inner">
      <input
        v-model="start"
        @blur="handleBlur"
        :placeholder="startPlaceholder"
        type="number"
        class="el-range-input"
      >
      <span class="el-range-separator">至</span>
      <input
        v-model="end"
        @blur="handleBlur"
        :placeholder="endPlaceholder"
        type="number"
        class="el-range-input"
      >
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
    },
    startPlaceholder: {
      type: String,
      default: '开始'
    },
    endPlaceholder: {
      type: String,
      default: '结束'
    }
  },
  data () {
    return {
      start: '',
      end: ''
    }
  },
  methods: {
    handleBlur () {
      this.$emit('on-change', { start: this.start, end: this.end })
    },
    reset () {
      this.start = ''
      this.end = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input__inner {
  width: 240px;
  height: 32px;
  line-height: 32px;
}
.el-range-editor .el-range-input {
  height: 28px;
}
</style>
