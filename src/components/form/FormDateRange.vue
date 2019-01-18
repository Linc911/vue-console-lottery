<template lang="html">
  <el-form-item :prop="prop" :label="label">
    <el-date-picker
      v-model="value"
      @change="handleDatePickerChange"
      :type="type"
      :picker-options="pickerOptions"
      :default-time="['00:00:00', '23:59:59']"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :style="{ width }"
      size="small"
      align="right"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'FormDateRange',
  props: {
    prop: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'daterange'
    },
    label: {
      type: String,
      default: '时间查询'
    },
    // 内容长度
    width: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      value: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  methods: {
    handleDatePickerChange (timeArray) {
      let payload
      if (timeArray) {
        payload = {
          startTime: Date.parse(timeArray[0]),
          endTime: Date.parse(timeArray[1])
        }
      } else {
        payload = { startTime: '', endTime: '' }
      }

      this.$emit('on-change', payload)
    },
    reset () {
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-date-editor--daterange.el-input__inner{
  width: 240px;
}
</style>
