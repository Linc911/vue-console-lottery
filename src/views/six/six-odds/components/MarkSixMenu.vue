<template lang="html">
  <el-menu :default-active="gameType" mode="vertical" unique-opened>
    <template v-for="group in menu">
      <!--  不显示六合彩系列 -->
      <el-submenu v-if="group.id === 29" :index="String(group.id)" :key="group.id">
        <template slot="title">
          <span>{{ group.name }}</span>
        </template>

        <template v-for="item in group.children">
          <el-menu-item
            @click="$emit('on-change', item)"
            :index="String(item.id)"
            :key="item.id"
          >
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'GamesMenu',
  props: {
    gameType: {
      type: String,
      default: ''
    }
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

        // 找到当前展开的 submenu
        this.$_.forEach(this.menu, (group) => {
          this.$_.forEach(group.children, (item) => {
            if (item.type === Number(this.gameType)) this.$emit('on-loaded', item)
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>
