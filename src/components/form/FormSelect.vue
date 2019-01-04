<template lang="html">
  <el-form-item :prop="prop" :label="label" :class="{ 'custom-block': multiple }">
    <el-select
      v-model="selectedOption"
      @change="$emit('on-change', selectedOption)"
      :placeholder="'选择' + label"
      :multiple="multiple"
      :filterable="filterable"
      class="custom-block"
      clearable
    >
      <el-option v-if="optionRoot" :label="rootLabel" :value="rootValue" />
      <el-option v-for="option in options" :key="option.label" :label="option.label" :value="option.value" />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    // select 接受的值
    value: {
      type: [ String, Number, Array ],
      default: ''
    },
    // http接口
    httpAPIName: {
      type: String,
      required: true
    },
    // http 参数
    httpAPIParams: {
      type: Object,
      default () {
        return {}
      }
    },
    // option label
    labelAttr: {
      type: String,
      required: true
    },
    // option value
    valueAttr: {
      type: String,
      required: true
    },
    // el-form-item prop
    prop: {
      type: String,
      default: ''
    },
    // el-form-item label
    label: {
      type: String,
      default: ''
    },
    // option 是否有默认选项
    optionRoot: {
      type: Boolean,
      default: false
    },
    // option 默认选项 label
    rootLabel: {
      type: String,
      default: 'root'
    },
    // option 默认选项 value
    rootValue: {
      type: [ String, Number ],
      default: ''
    },
    // select 是否添加多选功能
    multiple: {
      type: Boolean,
      default: false
    },
    // select 是否添加过滤功能
    filterable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: [],
      selectedOption: this.value
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
