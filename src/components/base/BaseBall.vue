<template lang="html">
  <span class="ball" :style="{ backgroundColor: bgcolor }">{{number}}</span>
</template>

<script type="text/javascript">
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    bgcolor: {
      type: String,
      default: '#189F92'
    }
  }
}
</script>

<style lang="scss" scoped>
.ball {
  display: inline-block;
  width: 30px;
  margin-right: 5px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}
</style>
