<template lang="html">
  <div>
    <template v-if="data === null">
      <span></span>
    </template>

    <template v-else-if="String(data).length <= maxLength">
      <span>{{ data }}</span>
    </template>

    <template v-else>
      <el-popover width="400" :trigger="triggerType">
        <div v-html="data"></div>
        <div slot="reference">
          <span>{{ data.substr(0, maxLength) }}...</span>
          <i class="el-icon-search"></i>
        </div>
      </el-popover>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BasePopoverTextarea',
  props: {
    data: {
      type: [ String, Number, Object ],
      reqrired: true
    },
    maxLength: {
      type: Number,
      default: 30
    },
    triggerType: {
      type: String,
      default: 'hover'
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
