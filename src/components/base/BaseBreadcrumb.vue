<template lang="html">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in breadcrumb"
      :key="item.name"
      :to="item.path"
      :class="{ activeLink: item.path }"
    >
      {{item.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script type="text/javascript">
export default {
  name: 'BaseBreadcrumb',
  props: {
    breadcrumb: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;
}
.active-link {
  color: #333;
  cursor: pointer;
}
</style>
