<template lang="html">
  <el-date-picker
    v-model="pickerValue"
    @change="handleDatePickerChange"
    :type="type"
    :picker-options="pickerOptions"
    :default-time="['00:00:00', '23:59:59']"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    size="small"
    align="right"
  />
</template>

<script>
export default {
  name: 'SearchDatePicker',
  props: {
    value: {
      type: [ String, Array ],
      default: ''
    },
    // type: year/month/date/dates/datetime/week/datetimerange/daterange
    type: {
      type: String,
      default: 'datetimerange'
    }
  },
  data () {
    return {
      pickerValue: '',
      // 定制默认时间搜索范围
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近两天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 2)
              picker.$emit('pick', [start, end])
            }
          },
          {
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
          }
        ]
      }
    }
  },
  watch: {
    value () {
      this.pickerValue = this.value
    }
  },
  methods: {
    handleDatePickerChange (timeArray) {
      let payload
      // 如果父组件重置状态，赋值为空值；否则将选择好的时间戳发送给父组件
      if (timeArray) {
        payload = {
          start: Date.parse(timeArray[0]),
          end: Date.parse(timeArray[1])
        }
      } else {
        payload = { start: '', end: '' }
      }

      // 将改变的时间通知给父组件
      this.$emit('on-change', payload)
    },
    // 将组件重置为空状态（外部函数调用）
    reset () {
      this.pickerValue = ''
    }
  }
}
</script>
