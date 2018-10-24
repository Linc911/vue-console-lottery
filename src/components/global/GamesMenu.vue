<template lang="html">
  <section class="games-menu">
    <el-menu mode="vertical" :default-active="activeItemId">
      <template v-for="group in menu">
        <el-submenu :index="String(group.id)" :key="group.id">
          <template slot="title">
            <span>{{group.name}}</span>
          </template>

          <template v-for="item in group.children">
            <el-menu-item @click="jumpTo(item.id, item.parentType)" :index="String(item.id)" :key="item.id">
              <span>{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </section>
</template>

<script>
export default {
  name: 'gamesMenu',
  props: {
    menu: {
      type: Array,
      required: true
    },
    activeItemId: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 根据选项的 parentType, 转换对应的游戏；通过监控路由变化来获取对应的数据
    jumpTo (id, parentType) {
      const route = `/lottery/odds/${this._generateRouteByParentType(parentType)}/${id}`
      this.$router.push(route)
    },
    _generateRouteByParentType (type) {
      switch (type) {
        case 18:
          return 'pk10'
        case 23:
          return 'everycolor'
        case 29:
          return 'marksix'
        case 33:
          return 'veryhappy'
        case 2:
          return 'fast3'
        case 1:
          return 'eleven'
        case 39:
          return 'peeggs'
        default:
          return 'others'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
