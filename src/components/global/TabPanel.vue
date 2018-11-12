<template lang="html">
  <div class="tab-panel">
    <el-tag @click.native="highlightHomeTab" :class="{ current: $route.name === 'HomePage' }">
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
  computed: {
    tags () {
      return this.$store.state.app.historyRoutes
    }
  },
  methods: {
    // 点击主页时，高亮标签；改变其他标签高亮状态
    highlightHomeTab () {
      this.$store.dispatch('initHistoryRoutesStatus')
      this.$router.push({ name: 'HomePage' })
    },
    openRoute (path) {
      this.$router.push(path)
      this.$store.dispatch('highlightHistoryRoutes', path)
    },
    // 关闭标签，跳转到上一个标签页；直到主页
    closeRoute (index) {
      this.$store.dispatch('removeHistoryRoutes', index)
      if (index === 0) {
        this.$router.push({ name: 'HomePage' })
      } else {
        const path = this.$store.state.app.historyRoutes[index - 1].path
        this.$router.push(path)
      }
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
.el-tag {
  height: 39px;
  line-height: 39px;
  font-size: 14px;
  border-radius: 0;
  border: none;
  border-right: 1px solid #e5e5e5;
  cursor: pointer;
}
.el-tag.current {
  background-color: #fff;
}
.fa-home {
  padding-right: 5px;
  font-size: 15px;
}
</style>
