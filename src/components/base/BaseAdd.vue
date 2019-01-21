<template lang="html">
  <el-button
    @click="$emit('on-click')"
    icon="el-icon-circle-plus-outline"
    size="small"
    type="primary"
  >
    <slot>添加</slot>
  </el-button>
</template>

<script>
export default {
  name: 'BaseAdd'
}
</script>
