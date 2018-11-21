<template lang="html">
  <section class="games-menu">
    <el-menu mode="vertical" :default-active="gameType" unique-opened>
      <template v-for="group in menu">
        <el-submenu :index="String(group.id)" :key="group.id">
          <template slot="title">
            <span>{{group.name}}</span>
          </template>

          <template v-for="item in group.children">
            <el-menu-item @click="$emit('on-change', { groupId: group.id, itemId: item.id })" :index="String(item.id)" :key="item.id">
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
    gameType: {
      type: String,
      default: ''
    }
  }
}
</script>
