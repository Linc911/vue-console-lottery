<template lang="html">
  <section class="the-header clearfix">
    <!-- 左侧logo部分 -->
    <div class="head-logo">
      <router-link to="/home" class="head-logo-link">后台管理系统</router-link>
      <!-- 页面前进与后退 -->
      <div class="history-go">
        <div @click="myWindow.history.back()" class="history-go-item">
          <i class="el-icon-d-arrow-left"></i>
          <span>上一页</span>
        </div>
        <div @click="myWindow.history.forward()" class="history-go-item">
          <span>下一页</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </div>
    </div>
    <!-- 右侧用户信息部分 -->
    <div class="head-user">
      <div class="user-info">
        <img src="https://placehold.it/40x40" class="user-avatar" alt="User avatar">
        <span class="user-username">{{user.nickname}}</span>
      </div>
      <el-dropdown @command="handleDropdownCommand">
        <span>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in menuDropdown" :key="item.name" :command="item.command">
            <i :class="item.icon" class="fa"></i>
            <span>{{item.name}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      user: { nickname: '' },
      menuDropdown: [
        { name: '个人信息', icon: 'fa-user-circle', command: 'info' },
        { name: '上传头像', icon: 'fa-drupal', command: 'avatar' },
        { name: '绑定手机', icon: 'fa-mobile-phone', command: 'phone' },
        { name: '退出', icon: 'fa-sign-out', command: 'logout' }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.user = this.$store.state.app.user
    })
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    handleDropdownCommand (command) {
      switch (command) {
        case 'info':
          this.$router.push({ name: 'UserActiveInfoUpdate' })
          break
        case 'avatar':
          this.$router.push({ name: 'UserActiveAvatarUpdate' })
          break
        case 'phone':
          this.$router.push({ name: 'UserActivePhoneUpdate' })
          break
        case 'logout':
          this.$httpAPI.fetchLogoutInfo().then(response => {
            // 清除本地缓存的 token 信息
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('token_type')
            // 将http headers的登录验证属性去掉，防止在登录过程中验证过期的token
            this.$axios.defaults.headers.common['Authorization'] = ''
            this.$router.push({ name: 'User' })
          }).catch(error => {
            console.log(error)
            this.$message.error('登出账号异常!')
          })
          break
        default:
          this.$message.error('操作异常，请检查代码！')
      }
    },
    // 获取数据后，把数据存到veux中
    getUserInfo () {
      this.$httpAPI.fetchUserInfo().then(response => {
        const { id, username, nickname, sex, phone } = response.data
        this.$store.dispatch('fetchUser', { id, username, nickname, sex, phone })
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.head-logo {
  float: left;
  line-height: 60px;
}
.head-logo-link {
  font-size: 22px;
  color: #333;
}

// 用户登录信息
.head-user {
  float: right;
}
.user-info {
  display: inline-block;
  line-height: 60px;
}
.user-avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
  background-color: #eee;
  border-radius: 100%;
}
.user-username {
  font-size: 14px;
  color: #777;
}
.el-dropdown-menu .fa {
  width: 24px;
  font-size: 18px;
  text-align: center;
}
.el-dropdown-menu .fa-mobile-phone {
  position: relative;
  top: 2px;
  font-size: 24px;
}

// 页面前进与后退
.history-go {
  display: inline-block;
  padding-left: 60px;
}
.history-go-item {
  display: inline-block;
  font-size: 14px;
  color: #189F92;
  cursor: pointer;
}
.history-go-item:last-child {
  margin-left: 20px;
}
</style>
