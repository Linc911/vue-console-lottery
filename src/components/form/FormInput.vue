<template lang="html">
  <el-input
    v-model="value"
    @input="$emit('on-change', $event)"
    :placeholder="placeholder"
    :style="styles"
    clearable
  />
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    styles: {
      type: Object,
      default () {
        return {}
      }
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
