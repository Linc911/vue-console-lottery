<template lang="html">
  <el-popover width="400" trigger="hover" :content="data">
    <p slot="reference">
      <span>{{ data.substr(0, maxLength) }}...</span>
      <i class="el-icon-search"></i>
    </p>
  </el-popover>
</template>

<script>
export default {
  name: 'BasePopoverTextarea',
  props: {
    data: {
      type: String,
      reqrired: true
    },
    maxLength: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';

.el-icon-search {
  width: 20px;
  margin-left: 10px;
  font-size: 14px;
  line-height: 24px;
  color: $--color-primary;
  cursor: pointer;
}
</style>
