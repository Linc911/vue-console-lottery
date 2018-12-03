<template lang="html">
  <el-switch v-model="value" @change="handleSwitchChange" />
</template>

<script type="text/javascript">
export default {
  name: 'BaseSwitch',
  props: {
    propValue: {
      type: [ Boolean, Number, String ],
      required: true
    },
    payload: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      value: this.propValue
    }
  },
  watch: {
    propValue () {
      this.value = this.propValue
    }
  },
  methods: {
    handleSwitchChange () {
      this.$emit('on-change', Object.assign(this.payload, { value: this.value }))
    }
  }
}
</script>
