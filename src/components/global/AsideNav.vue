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
          <el-submenu v-if="group.children" :index="group.id" :key="group.id">
            <template slot="title">
              <i :class="`fa ${group.icon}`"></i>
              <span>{{group.name}}</span>
            </template>

            <router-link v-for="item in group.children" :to="item.path" :key="item.id">
              <el-menu-item :index="item.id">
                <i :class="`fa ${item.icon}`"></i>
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
      menu: [
        {
          id: 'test02',
          name: '会员管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test0201', name: '信息管理', path: '/vip/info/manage', icon: 'fa-cubes' },
            { id: 'test0202', name: '账号核查', path: '/vip/accout/check', icon: 'fa-cubes' },
            { id: 'test0203', name: '信息修改', path: '/vip/info/change', icon: 'fa-cubes' },
            { id: 'test0204', name: '分组管理', path: '/vip/group/manage', icon: 'fa-cubes' },
            { id: 'test0205', name: '资料管理', path: '/vip/data/manage', icon: 'fa-cubes' },
            { id: 'test0206', name: '统计图表', path: '/vip/data/statistic', icon: 'fa-cubes' },
            { id: 'test0207', name: '日志管理', path: '/vip/log/manage', icon: 'fa-cubes' },
            { id: 'test0208', name: '卡片管理', path: '/vip/card/manage', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test01',
          name: '系统设置',
          path: '',
          icon: 'fa-gears',
          children: [
            { id: 'test0101', name: '菜单', path: '/system/menu', icon: 'fa-windows' },
            { id: 'test0102', name: '角色', path: '/system/role', icon: 'fa-cubes' },
            { id: 'test0103', name: '权限', path: '/system/authorization', icon: 'fa-align-justify' }
          ]
        }
      ]
    }
  },
  created () {
    // this.fetchAsideMenuInfo()
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
