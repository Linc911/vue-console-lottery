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
  name: 'FormNumberRange',
  props: {
    label: {
      type: String,
      default: '数字范围'
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

<style scoped>
.el-input__inner {
  width: 220px;
  height: 32px;
  padding: 0;
  line-height: 32px;
}
.el-range-editor .el-range-input {
  width: 42%;
  height: 28px;
  padding-left: 10px;
}
</style>
