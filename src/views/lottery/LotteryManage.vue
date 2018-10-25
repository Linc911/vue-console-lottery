<template lang="html">
  <section class="lottery-odds">
    <aside class="aside-menu">
      <GamesMenu v-if="menu.length" :menu="menu" :activeItemId="$route.params.id" />
    </aside>
    <main class="content-container">
      <router-view />
    </main>
  </section>
</template>

<script>
import GamesMenu from '@/components/global/GamesMenu'

export default {
  name: 'lotteryOdds',
  components: {
    GamesMenu
  },
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.fetchGameMenu()
  },
  methods: {
    fetchGameMenu () {
      this.$axios.get('/api-g/GameTypeConfig/tree').then(response => {
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
  top: 80px;
  z-index: 3;
  width: 200px;
  height: 100%;
  background-color: #fff;
}
.content-container {
  padding-left: 200px;
}
</style>
