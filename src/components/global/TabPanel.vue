<template lang="html">
  <div class="tab-panel">
    <el-tag @click.native="$router.push({ name: 'HomePage' })">
      <i class="fa fa-home"></i>
      <span>主页</span>
    </el-tag>
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.path"
      @click.native="openRoute(tag.path)"
      @close="closeRoute(index)"
      :class="{ current: tag.active }"
      closable
    >{{tag.name}}</el-tag>
  </div>
</template>

<script>
export default {
  name: 'TabPanel',
  data () {
    return {
    }
  },
  computed: {
    tags () {
      return this.$store.state.app.historyRoutes
    }
  },
  methods: {
    openRoute (path) {
      this.$router.push(path)
      this.$store.dispatch('highlightHistoryRoutes', path)
    },
    closeRoute (index) {
      this.$store.dispatch('removeHistoryRoutes', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-panel {
  position: fixed;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 10;
  overflow: scroll;
}
.el-tag.current {
  background-color: #fff;
}
.fa-home {
  padding-right: 5px;
  font-size: 15px;
}
</style>
