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
    value: {
      type: [ String, Number ],
      default: ''
    },
    type: {
      type: String,
      default: 'datetime'
    }
  },
  data () {
    return {
      time: this.value === 'number' ? new Date(this.value) : this.value
    }
  },
  methods: {
    handleTimePickerChange (payload) {
      this.$emit('on-change', Date.parse(payload))
    }
  }
}
</script>
