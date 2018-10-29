<template lang="html">
  <i @click="$emit('on-click')" class="el-icon-search"></i>
</template>

<style lang="scss" scoped>
@import '../../styles/variables';

.more-detail {
  display: inline-block;
}
.el-icon-search {
  width: 20px;
  font-size: 14px;
  line-height: 24px;
  color: $--color-primary;
  cursor: pointer;
}
</style>
