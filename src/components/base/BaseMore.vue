<template lang="html">
  <el-button @click="$emit('on-click')" type="primary" size="mini" icon="el-icon-view"></el-button>
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
