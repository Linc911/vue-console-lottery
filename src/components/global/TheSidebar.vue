<template lang="html">
  <div class="the-sidebar">
    <el-menu
      mode="vertical"
      text-color="#fff"
      background-color="#324057"
      active-text-color="#409eff"
    >
      <template v-for="group in menu[0]">
        <el-submenu :index="group.name" :key="group.id">
          <template slot="title">
            <i :class="`fa ${group.css}`"></i>
            <span>{{group.name}}</span>
          </template>

          <router-link v-for="item in menu[group.id]" :to="item.url" :key="item.id">
            <el-menu-item :index="item.name" :class="{ 'unprepared-link': item.url === '/users/unset' }">
              <i :class="`fa ${item.css}`"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('sidebar')

export default {
  name: 'TheSidebar',
  data () {
    return {
      //   {
      //     id: 'test08',
      //     name: '代理管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test0804', name: '代理会员列表', path: '/agent/list', icon: 'fa-cubes' },
      //       { id: 'test0801', name: '创建代理会员', path: '/agent/create', icon: 'fa-cubes' },
      //       { id: 'test0803', name: '邀请号码管理', path: '/agent/invitationcode', icon: 'fa-cubes' },
      //       { id: 'test0805', name: '代理个人业绩', path: '/agent/achievement/users', icon: 'fa-cubes' },
      //       { id: 'test0806', name: '代理线条业绩', path: '/agent/achievement/linear', icon: 'fa-cubes' },
      //       { id: 'test0802', name: '游戏分润基数', path: '/agent/interest/games', icon: 'fa-cubes' },
      //       { id: 'test0807', name: '代理一键分润', path: '/agent/interest/division', icon: 'fa-cubes' },
      //       { id: 'test0808', name: '会员一键分润', path: '/agent/interest/usersdivision', icon: 'fa-cubes' }
      //     ]
      //     id: 'test11',
      //     name: '港彩管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1101', name: '六合彩开盘开奖', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1102', name: '六合彩注单查询', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1103', name: '六合彩会员报表', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1104', name: '六合彩基础设置', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1105', name: '六合彩赔率设置', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1106', name: '六合彩总报表', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test12',
      //     name: '网站管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1201', name: '网站菜单配置', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1202', name: '备用网址管理', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1203', name: '手机首页图片', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1204', name: '系统信息清理', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1205', name: '问题反馈管理', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1206', name: '会员注册配置', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test13',
      //     name: '优惠活动',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1301', name: '优惠图片管理', path: '/promotion/list', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test14',
      //     name: '公告管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1401', name: '发布公告', path: '/notice/publish', icon: 'fa-cubes' },
      //       { id: 'test1403', name: '已发公告', path: '/notice/published/list', icon: 'fa-cubes' },
      //       { id: 'test1406', name: '系统公告', path: '/notice/system/notifications', icon: 'fa-cubes' },
      //       { id: 'test1402', name: '系统消息', path: '/notice/system/messages', icon: 'fa-cubes' },
      //       { id: 'test1404', name: '会员反馈', path: '/notice/feedback/users', icon: 'fa-cubes' },
      //       { id: 'test1405', name: '意见反馈', path: '/notice/feedback/suggestions', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test16',
      //     name: '体育管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1601', name: '三昇体育注单', path: '/sport/three/bets', icon: 'fa-cubes' },
      //       { id: 'test1602', name: '三昇额度转换', path: '/sport/three/transfer', icon: 'fa-cubes' },
      //       { id: 'test1603', name: '体育总报表', path: '/sport/statistics', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test17',
      //     name: '电子管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1701', name: 'AG电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1702', name: 'PT电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1703', name: 'MG电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1704', name: 'HB电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1705', name: 'MW电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1706', name: 'SA电子游戏', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1707', name: '电子总报表', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   },
      //   {
      //     id: 'test18',
      //     name: '视讯管理',
      //     path: '',
      //     icon: 'fa-user',
      //     children: [
      //       { id: 'test1801', name: 'OB视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1802', name: 'AG视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1803', name: 'OG视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1804', name: 'SA视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1805', name: 'BBIN视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1806', name: 'DS视讯', path: '/users/unset', icon: 'fa-cubes' },
      //       { id: 'test1807', name: '视讯总报表', path: '/users/unset', icon: 'fa-cubes' }
      //     ]
      //   }
      // ]
    }
  },
  created () {
    this.fetchSidebarMenu()
  },
  computed: mapGetters([
    'menu'
  ]),
  methods: {
    ...mapActions([
      'refreshMenu'
    ]),
    // 获取全部菜单
    fetchSidebarMenu () {
      this.refreshMenu()
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

  .unprepared-link {
    text-decoration: line-through;
    color: #de8c8c !important;
  }
</style>
