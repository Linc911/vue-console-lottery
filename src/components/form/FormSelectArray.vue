<template lang="html">
  <el-select
    v-model="selectedOption"
    @change="$emit('on-change', selectedOption)"
    :placeholder="placeholder"
    :style="styles"
    clearable
  >
    <el-option
      v-for="(option, index) in options"
      :key="index"
      :label="option"
      :value="index"
    />
  </el-select>
</template>

<script>
export default {
  name: 'FormSelectArray',
  props: {
    // 当前绑定值
    value: {
      type: [ String, Number ],
      default: ''
    },
    // 用下标作为其 value 值
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: '请选择'
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
