<template lang="html">
  <el-date-picker
    v-model="time"
    :type="type"
    @change="handleTimePickerChange"
    style="width: 100%"
  />
</template>

<script type="text/javascript">
export default {
  props: {
    value: {
      type: [ Date, String ],
      default: ''
    },
    type: {
      type: String,
      default: 'datetime'
    }
  },
  data () {
    return {
      time: this.value
    }
  },
  methods: {
    handleTimePickerChange (payload) {
      this.$emit('on-change', Date.parse(payload))
    }
  }
}
</script>
