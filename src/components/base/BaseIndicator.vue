<template lang="html">
  <span>
    <i v-if="!opposite" :class="status ? 'el-icon-success' : 'el-icon-error'"></i>
    <i v-else :class="status ? 'el-icon-error' : 'el-icon-success'"></i>
  </span>
</template>

<script type="text/javascript">
export default {
  props: {
    status: {
      type: [ Number, Boolean ],
      required: true
    },
    opposite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-icon-success {
  color: #189F92;
}
</style>
