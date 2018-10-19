<template lang="html">
  <div v-rainbow class="ball">
    {{number}}
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.ball {
  display: inline-block;
  width: 30px;
  margin-left: 8px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
}
</style>
