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
    },
    // 当传入的值为相反时（0代表启用时），要在组件中将词值设为true
    opposite: {
      type: Boolean,
      default: false
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
      this.$emit('on-change', Object.assign(this.payload, { value: this.opposite ? !this.value : this.value }))
    }
  }
}
</script>
