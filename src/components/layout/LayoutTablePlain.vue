<template>
  <el-table :data="tableData" size="small" max-height="600" highlight-current-row stripe border>
    <slot>需要传form相关组件进来</slot>
  </el-table>
</template>

<script>
export default {
  name: 'LayoutTablePlain',
  props: {
    tableData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
