<template lang="html">
  <el-select
    v-model="selectedOption"
    @change="$emit('on-change', selectedOption)"
    :placeholder="placeholder"
    clearable
    :style="styles"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 'FormSelectStatic',
  props: {
    // 当前绑定值
    value: {
      type: [ String, Number ],
      default: ''
    },
    // 选项对象（必须包含 label、value 属性）
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
    reset () {
      this.selectedOption = ''
    }
  }
}
</script>
