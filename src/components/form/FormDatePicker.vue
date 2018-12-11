<template lang="html">
  <el-form-item :label="label">
    <el-date-picker
      v-model="value"
      @change="$emit('on-change', Date.parse($event))"
      type="date"
      :style="{ width }"
      size="small"
      align="right"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'FormDateRange',
  props: {
    label: {
      type: String,
      default: '时间查询'
    },
    // 内容长度
    width: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    reset () {
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
// .el-date-editor--daterange.el-input__inner {
//   width: 240px;
// }
</style>
