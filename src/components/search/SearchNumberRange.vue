<template lang="html">
  <div class="el-range-editor--small el-date-editor el-range-editor">
    <div class="el-input__inner">
      <input
        v-model="start"
        @keyup.enter="$emit('on-enter')"
        @keydown="handleBlur"
        :placeholder="startPlaceholder"
        type="number"
        class="el-range-input"
      >
      <span class="el-range-separator">至</span>
      <input
        v-model="end"
        @keyup.enter="$emit('on-enter')"
        @keydown="handleBlur"
        :placeholder="endPlaceholder"
        type="number"
        class="el-range-input"
      >
    </div>
  </div>
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
      default: '最小金额'
    },
    endPlaceholder: {
      type: String,
      default: '最大金额'
    }
  },
  data () {
    return {
      start: '',
      end: ''
    }
  },
  methods: {
    // 将改变的数值通知给父组件
    handleBlur () {
      this.$emit('on-change', { start: this.start, end: this.end })
    },
    // 将组件重置为空状态（外部函数调用）
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
