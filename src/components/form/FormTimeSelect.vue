<template lang="html">
  <el-form-item :prop="prop" :label="label">
    <el-date-picker
      v-model="value"
      @change="$emit('on-change', Date.parse($event))"
      :picker-options="pickerOptions"
      :default-time="defaltTime"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      style="width: 100%"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchUsername',
  props: {
    time: {
      props: Number,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '时间查询'
    },
    placeholder: {
      type: String,
      default: '选择日期时间'
    },
    defaltTime: {
      type: String,
      default: '00:00:00'
    }
  },
  data () {
    return {
      value: this.time,
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  watch: {
    time () {
      this.value = this.time
    }
  },
  methods: {
    reset () {
      this.value = ''
    }
  }
}
</script>
