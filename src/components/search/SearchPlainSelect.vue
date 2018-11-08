<template lang="html">
  <el-form-item :label="label">
    <el-select
      v-model="selectedOption"
      @change="$emit('on-change', selectedOption)"
      :placeholder="label"
      clearable
      :style="{ width: width + 'px'}"
    >
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchPlainSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: '状态'
    },
    width: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      selectedOption: ''
    }
  },
  methods: {
    reset () {
      this.selectedOption = ''
    }
  }
}
</script>
