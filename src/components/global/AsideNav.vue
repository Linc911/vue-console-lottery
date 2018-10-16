<template lang="html">
  <section class="aside-main">
    <el-row>
      <el-col>
       <el-menu
        mode="vertical"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
        class="el-menu-vertical-demo"
      >
        <template v-for="group in menu">
          <el-submenu v-if="group.child" :index="group.name" :key="group.name">
            <template slot="title">
              <i :class="`fa ${group.css}`"></i>
              <span>{{group.name}}</span>
            </template>

            <router-link v-for="item in group.child" :to="item.name" :key="item.name">
              <el-menu-item :index="item.name">
                <i :class="`fa ${item.css}`"></i>
                <span>{{item.name}}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
          <router-link v-else to="/">
            <el-menu-item :index="group.name">
              <i :class="`fa ${group.css}`"></i>
              <span>{{group.name}}</span>
            </el-menu-item>
          </router-link>
        </template>
       </el-menu>
      </el-col>
     </el-row>
  </section>
</template>

<script>
export default {
  name: 'asideMain',
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.fetchAsideMenuInfo()
  },
  methods: {
    fetchAsideMenuInfo () {
      this.$axios.get('/api-b/menus/me')
        .then(response => {
          this.menu = response.data
          this.userInfoReady = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu .fa {
  margin-right: 6px;
  font-size: 20;
  color: #fff;
}
</style>
