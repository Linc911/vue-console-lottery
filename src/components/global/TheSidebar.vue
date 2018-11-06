<template lang="html">
  <div class="the-sidebar">
    <el-menu
      mode="vertical"
      text-color="#fff"
      background-color="#324057"
      active-text-color="#409eff"
    >
      <template v-for="group in menu">
        <el-submenu :index="group.id" :key="group.id">
          <template slot="title">
            <i :class="`fa ${group.icon}`"></i>
            <span>{{group.name}}</span>
          </template>

          <router-link v-for="item in group.children" :to="item.path" :key="item.id">
            <el-menu-item :index="item.id" :class="{ 'unprepared-link': item.path === '/users/unset' }">
              <i :class="`fa ${item.icon}`"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data () {
    return {
      menu: [
        {
          id: 'test01',
          name: '系统设置',
          path: '',
          icon: 'fa-gears',
          children: [
            { id: 'test0101', name: '菜单', path: '/system/menu', icon: 'fa-windows' },
            { id: 'test0102', name: '角色', path: '/system/roles', icon: 'fa-cubes' },
            { id: 'test0103', name: '权限', path: '/system/permissions', icon: 'fa-align-justify' },
            { id: 'test0105', name: '分组', path: '/system/group', icon: 'fa-align-justify' },
            { id: 'test0104', name: '用户', path: '/system/users', icon: 'fa-cubes' },
            { id: 'test0601', name: '彩票', path: '/system/lottery', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test02',
          name: '会员管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test0201', name: '会员信息管理', path: '/users/list', icon: 'fa-cubes' },
            { id: 'test0202', name: '会员账户核查', path: '/users/account/check', icon: 'fa-cubes' },
            { id: 'test0203', name: '关键信息修改', path: '/users/keyinfo', icon: 'fa-cubes' },
            // { id: 'test0204', name: '会员分组管理', path: '/users/group', icon: 'fa-cubes' },
            { id: 'test0205', name: '会员资料管理', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test0206', name: '会员报表统计', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test0207', name: '会员日志管理', path: '/users/logs', icon: 'fa-cubes' },
            { id: 'test0208', name: '会员卡片管理', path: '/users/unset', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test09',
          name: '彩票管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test0901', name: '彩票开盘', path: '/lottery/open/eleven/3', icon: 'fa-cubes' },
            { id: 'test0902', name: '彩票开奖', path: '/lottery/results/eleven/3', icon: 'fa-cubes' },
            { id: 'test0903', name: '未结彩票撤单', path: '/lottery/withdraw', icon: 'fa-cubes' },
            { id: 'test0904', name: '彩票注单', path: '/lottery/bets', icon: 'fa-cubes' },
            { id: 'test0905', name: '彩票杀率配置', path: '/lottery/killrate', icon: 'fa-cubes' },
            { id: 'test0906', name: '彩票赔率设置', path: '/lottery/odds/eleven/3', icon: 'fa-cubes' },
            { id: 'test0907', name: '彩票期数校对', path: '/lottery/checkout', icon: 'fa-cubes' },
            { id: 'test0908', name: '彩票会员报表', path: '/lottery/users/info', icon: 'fa-cubes' },
            { id: 'test0909', name: '彩票注单报表', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test0910', name: '彩票总报表', path: '/lottery/statistics', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test07',
          name: '财务管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test0701', name: '加减款操作', path: '/finance/balance/change', icon: 'fa-cubes' },
            { id: 'test0702', name: '填单存款管理', path: '/finance/deposit/form', icon: 'fa-cubes' },
            { id: 'test0703', name: '在线存款管理', path: '/finance/deposit/online', icon: 'fa-cubes' },
            { id: 'test0704', name: '提款申请管理', path: '/finance/withdraw/apply', icon: 'fa-cubes' },
            { id: 'test0706', name: '额度转换管理', path: '/finance/limit/change', icon: 'fa-cubes' },
            { id: 'test0705', name: '会员资金管理', path: '/finance/users/assets', icon: 'fa-cubes' },
            { id: 'test0709', name: '存/取款记录', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test0710', name: '平台收支汇总', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test0707', name: '会员财务报表', path: '/finance/balance/sheet', icon: 'fa-cubes' },
            { id: 'test0708', name: '常规配置', path: '/finance/setting', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test08',
          name: '代理管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test0804', name: '代理会员列表', path: '/agent/list', icon: 'fa-cubes' },
            { id: 'test0801', name: '创建代理会员', path: '/agent/create', icon: 'fa-cubes' },
            { id: 'test0803', name: '邀请号码管理', path: '/agent/invitationcode', icon: 'fa-cubes' },
            { id: 'test0805', name: '代理个人业绩', path: '/agent/achievement/users', icon: 'fa-cubes' },
            { id: 'test0806', name: '代理线条业绩', path: '/agent/achievement/linear', icon: 'fa-cubes' },
            { id: 'test0802', name: '游戏分润基数', path: '/agent/interest/games', icon: 'fa-cubes' },
            { id: 'test0807', name: '代理一键分润', path: '/agent/interest/division', icon: 'fa-cubes' },
            { id: 'test0808', name: '会员一键分润', path: '/agent/interest/usersdivision', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test10',
          name: '返水管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1002', name: '会员返水信息', path: '/backwater/list', icon: 'fa-cubes' },
            { id: 'test1001', name: '会员返水设置', path: '/backwater/setting', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test11',
          name: '港彩管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1101', name: '六合彩开盘开奖', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1102', name: '六合彩注单查询', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1103', name: '六合彩会员报表', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1104', name: '六合彩基础设置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1105', name: '六合彩赔率设置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1106', name: '六合彩总报表', path: '/users/unset', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test12',
          name: '网站管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1201', name: '网站菜单配置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1202', name: '备用网址管理', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1203', name: '手机首页图片', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1204', name: '系统信息清理', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1205', name: '问题反馈管理', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1206', name: '会员注册配置', path: '/users/unset', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test13',
          name: '优惠活动',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1301', name: '优惠图片管理', path: '/promotion/list', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test14',
          name: '公告管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1401', name: '发布公告', path: '/notice/publish', icon: 'fa-cubes' },
            { id: 'test1403', name: '已发公告', path: '/notice/publised/list', icon: 'fa-cubes' },
            { id: 'test1406', name: '系统公告', path: '/notice/system/notifications', icon: 'fa-cubes' },
            { id: 'test1402', name: '系统消息', path: '/notice/system/messages', icon: 'fa-cubes' },
            { id: 'test1404', name: '会员反馈', path: '/notice/feedback/users', icon: 'fa-cubes' },
            { id: 'test1405', name: '意见反馈', path: '/notice/feedback/suggestions', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test15',
          name: '收款出款',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1501', name: '支付路线配置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1502', name: '出款商户配置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1503', name: '支付接口配置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1504', name: '会员汇款设置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1505', name: '汇款快捷设置', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1506', name: '支付描述配置', path: '/users/unset', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test16',
          name: '体育管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1601', name: '三昇体育注单', path: '/sport/three/bets', icon: 'fa-cubes' },
            { id: 'test1602', name: '三昇额度转换', path: '/sport/three/transfer', icon: 'fa-cubes' },
            { id: 'test1603', name: '体育总报表', path: '/sport/statistics', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test17',
          name: '电子管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1701', name: 'AG电子游戏', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1702', name: 'PT电子游戏', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1703', name: 'MG电子游戏', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1704', name: 'HB电子游戏', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1705', name: 'MW电子游戏', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1706', name: 'SA电子游戏', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1707', name: '电子总报表', path: '/users/unset', icon: 'fa-cubes' }
          ]
        },
        {
          id: 'test18',
          name: '视讯管理',
          path: '',
          icon: 'fa-user',
          children: [
            { id: 'test1801', name: 'OB视讯', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1802', name: 'AG视讯', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1803', name: 'OG视讯', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1804', name: 'SA视讯', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1805', name: 'BBIN视讯', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1806', name: 'DS视讯', path: '/users/unset', icon: 'fa-cubes' },
            { id: 'test1807', name: '视讯总报表', path: '/users/unset', icon: 'fa-cubes' }
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
.unprepared-link {
  text-decoration: line-through;
  color: #de8c8c !important;
}
</style>
