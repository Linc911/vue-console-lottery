<template lang="html">
  <el-date-picker
    @change="handleTimePickerChange"
    v-model="time"
    :type="type"
    style="width: 100%"
  />
</template>

<script type="text/javascript">
export default {
  name: 'FormDateTimePicker',
  props: {
    // 默认值
    value: {
      type: [ String, Number ],
      default: ''
    },
    // 不同的值类型的时间选择器
    type: {
      type: String,
      default: 'datetime'
    }
  },
  data () {
    return {
      time: ''
    }
  },
  watch: {
    value () {
      if (typeof this.value === 'number') this.time = new Date(this.value)
    }
  },
  methods: {
    // 将时间戳传递给父组件
    handleTimePickerChange (payload) {
      this.$emit('on-change', Date.parse(payload))
    }
  }
}
</script>
