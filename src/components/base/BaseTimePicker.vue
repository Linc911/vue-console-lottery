<template lang="html">
  <el-time-picker
    v-model="time"
    @change="handleTimePickerChange"
    :clearable="false"
    style="width: 100%;"
  />
</template>

<script type="text/javascript">
export default {
  props: {
    second: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      time: this.second
    }
  },
  watch: {
    second () {
      const dateString = '1900-1-1 ' + this.transferSecondToTime(this.second)
      this.time = new Date(dateString)
    }
  },
  methods: {
    handleTimePickerChange (value) {
      this.$emit('on-change', this.transferTimeToSeconds(value))
    },
    transferTimeToSeconds (date) {
      const d = new Date(date)
      const h = d.getHours()
      const m = d.getMinutes()
      const s = d.getSeconds()

      return h * 3600 + m * 60 + s
    },
    transferSecondToTime (second) {
      const s = this.addZeroPrefix(second % 60)
      const m = this.addZeroPrefix(Math.floor(second / 60) % 60)
      const h = this.addZeroPrefix(Math.floor(second / 3600))

      return `${h}:${m}:${s}`
    },
    addZeroPrefix (n) {
      return n >= 10 ? n : '0' + n
    }
  }
}
</script>
