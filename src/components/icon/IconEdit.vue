<template lang="html">
  <i @click="$emit('on-click')" class="el-icon-edit"></i>
</template>

<style lang="scss" scoped>
@import '../../styles/variables';

.more-detail {
  display: inline-block;
}
.el-icon-edit {
  font-size: 14px;
  border-width: 4px 10px;
  border-style: solid;
  border-color: transparent;
  color: $--color-primary;
  cursor: pointer;
}
</style>
