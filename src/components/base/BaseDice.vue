<template lang="html">
  <div class="dice" :class="diceClassName"></div>
</template>

<script type="text/javascript">
export default {
  props: {
    number: {
      type: Number,
      default: 1
    },
    // size: large, medium, small
    size: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    diceClassName () {
      return `${this.size} ${this.size}-${this.number}`
    }
  }
}
</script>

<style lang="scss" scoped>
.dice {
  display: inline-block;
  margin-right: 5px;
  background-image: url('../../assets/images/dice.png');
  background-repeat: no-repeat;
}
.small {
  width: 26px;
  height: 26px;
}
.small-1 {
  background-position: 0 0;
}
.small-2 {
  background-position: -27px 0;
}
.small-3 {
  background-position: -54px 0;
}
.small-4 {
  background-position: -81px 0;
}
.small-5 {
  background-position: -108px 0;
}
.small-6 {
  background-position: -135px 0;
}
</style>
