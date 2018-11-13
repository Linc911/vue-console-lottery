<template lang="html">
  <el-form-item :prop="prop" :label="label">
    <el-select
      v-model="selectedOption"
      @change="$emit('on-change', selectedOption)"
      :placeholder="label"
      clearable
      :style="{ width }"
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
  name: 'FormSelectStatic',
  props: {
    value: {
      type: [ String, Number ],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: '状态'
    },
    prop: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
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
