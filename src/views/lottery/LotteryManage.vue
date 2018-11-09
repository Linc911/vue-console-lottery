<template lang="html">
  <div class="lottery-manage">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 彩票分类菜单 -->
    <aside class="aside-menu">
      <GamesMenu v-if="menu.length" :menu="menu" :activeItemId="$route.params.gameId" />
    </aside>

    <!-- 主要内容 -->
    <main class="content-container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </main>
  </div>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import GamesMenu from '@/components/global/GamesMenu'

export default {
  name: 'LotteryManage',
  components: {
    BaseBreadcrumb,
    GamesMenu
  },
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.getGamesMenu()
  },
  methods: {
    getGamesMenu () {
      this.$httpAPI.fetchGamesMenu().then(response => {
        this.menu = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-menu {
  float: left;
  // left: 240px;
  // top: 171px;
  // z-index: 3;
  width: 200px;
  height: 100%;
  margin-top: 51px;
  background-color: #fff;
}
.content-container {
  padding-left: 200px;
}
</style>
