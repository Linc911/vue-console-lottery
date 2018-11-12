<template lang="html">
  <el-form-item :label="label" :width="width">
    <el-input v-model="value" @input="$emit('on-change', $event)" :placeholder="label" clearable />
  </el-form-item>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: {
      type: String,
      default: '请输入内容'
    },
    width: {
      type: String,
      default: ''
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
