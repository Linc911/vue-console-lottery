<template lang="html">
  <div class="search-container">
    <div class="search-left-part">
      <slot name="left"></slot>
    </div>

    <div class="search-right-part">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchLayout'
}
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
}
.search-left-part {
  display: inline-block;
  margin-right: 90px;
}
.search-right-part {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
}
</style>
