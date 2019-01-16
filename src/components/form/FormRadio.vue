<template lang="html">
  <el-radio-group v-model="selectedOption" @change="$emit('on-change', $event)">
    <el-radio
      v-for="option in options"
      :key="option.value"
      :label="option.value"
    >{{ option.label }}</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: 'FormRadio',
  props: {
    // 当前绑定值
    value: {
      type: [ String, Number ],
      default: ''
    },
    // 选择项对象（必须有对应的value、label属性）
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectedOption: this.value
    }
  },
  watch: {
    value () {
      this.selectedOption = this.value
    }
  },
  methods: {
    // 重置数值（外部调用）
    reset () {
      this.selectedOption = ''
    }
  }
}
</script>
