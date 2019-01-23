<template lang="html">
  <el-select
    @change="$emit('on-change', selectedOption)"
    v-model="selectedOption"
    :placeholder="placeholder"
    :multiple="multiple"
    :filterable="filterable"
    clearable
    class="custom-block"
  >
    <el-option v-if="rootVisible" :label="rootLabel" :value="rootValue" />
    <el-option
      v-for="option in options"
      :key="option.label"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 'FormSelectAsync',
  props: {
    // select 接受的值
    value: {
      type: [ String, Number, Array ],
      default: ''
    },
    // 请求选项的http接口
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
    // 请求回来的http数据，用什么作为 el-select 的lable字段
    labelAttr: {
      type: String,
      required: true
    },
    // 请求回来的http数据，用什么作为 el-select 的value字段
    valueAttr: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    // option 是否有默认选项
    rootVisible: {
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
      default: 0
    },
    // select 是否添加多选功能
    multiple: {
      type: Boolean,
      default: false
    },
    // select 是否添加过滤功能
    filterable: {
      type: Boolean,
      default: true
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
    // 处理请求回来的数据，放到 el-select 组件中
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
