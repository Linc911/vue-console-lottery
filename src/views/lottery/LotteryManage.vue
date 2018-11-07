<template lang="html">
  <section class="lottery-manage">
    <aside class="aside-menu">
      <GamesMenu v-if="menu.length" :menu="menu" :activeItemId="$route.params.id" />
    </aside>
    <main class="content-container">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view />
      </keep-alive>
      <router-view v-else />
    </main>
  </section>
</template>

<script>
import GamesMenu from '@/components/global/GamesMenu'

export default {
  name: 'LotteryManage',
  components: {
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
  position: fixed;
  left: 240px;
  top: 120px;
  z-index: 3;
  width: 200px;
  height: 100%;
  background-color: #fff;
}
.content-container {
  padding-left: 200px;
}
</style>
