<template lang="html">
  <el-form-item :prop="prop" :label="label" :class="{ 'custom-block': multiple }">
    <el-select
      v-model="selectedOption"
      @change="$emit('on-change', selectedOption)"
      :placeholder="'选择' + label"
      :multiple="multiple"
      class="custom-block"
      clearable
    >
        <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value" />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    value: {
      type: [ String, Number, Array ],
      default: ''
    },
    httpAPIName: {
      type: String,
      required: true
    },
    httpAPIParams: {
      type: Object,
      default () {
        return {}
      }
    },
    labelAttr: {
      type: String,
      required: true
    },
    valueAttr: {
      type: String,
      required: true
    },
    prop: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: [],
      selectedOption: this.value
      // selectedOption: this.value || (this.multiple ? [] : '')
    }
  },
  watch: {
    value () {
      this.selectedOption = this.value
    }
  },
  created () {
    this.fetchOptions()
  },
  methods: {
    reset () {
      this.selectedOption = this.multiple ? [] : ''
    },
    fetchOptions () {
      this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(response => {
        this.$_.forEach(response.data.data, item => {
          this.options.push({
            value: item[this.valueAttr],
            label: item[this.labelAttr]
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>
