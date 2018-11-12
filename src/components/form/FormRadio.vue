<template lang="html">
  <el-form-item :prop="prop" :label="label">
    <el-radio-group v-model="selectedOption" @change="$emit('on-change', $event)">
      <el-radio v-for="option in options" :key="option.value" :label="option.label">{{ option.title }}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormRadio',
  props: {
    value: {
      type: [ String, Number ],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    prop: {
      type: String,
      default: ''
    },
    label: {
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
