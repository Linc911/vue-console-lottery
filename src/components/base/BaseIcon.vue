<template lang="html">
  <i @click="$emit('on-click')" :class="icon"></i>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: 'el-icon-edit'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';

.more-detail {
  display: inline-block;
}

i {
  font-size: 14px;
  border-width: 4px 10px;
  border-style: solid;
  border-color: transparent;
  color: $--color-primary;
  cursor: pointer;
}
</style>
