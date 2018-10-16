<template lang="html">
  <section class="head">
    <el-row>
      <el-col :span="12">
        <!-- 左侧logo部分 -->
        <div class="head-logo">
          <router-link to="/home" class="head-logo-link">后台管理系统</router-link>
        </div>
      </el-col>
      <el-col :span="12">
        <!-- 右侧用户信息部分 -->
        <div v-if="userInfoReady" class="head-user">
          <div class="user-info">
            <img src="https://placehold.it/40x40" class="user-avatar" alt="User avatar">
            <span class="user-username">{{user.nickname}}</span>
          </div>
          <el-dropdown @command="handleDropdownCommand">
            <span>
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">

              <el-dropdown-item command="info">
                <i class="fa fa-user-circle"></i>
                <span>个人信息</span>
              </el-dropdown-item>

              <el-dropdown-item command="avatar">
                <i class="fa fa-drupal"></i>
                <span>上传头像</span>
              </el-dropdown-item>

              <el-dropdown-item command="phone">
                <i class="fa fa-mobile-phone"></i>
                <span>绑定手机</span>
              </el-dropdown-item>

              <el-dropdown-item command="logout">
                <i class="fa fa-sign-out"></i>
                <span>退出</span>
              </el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'headMain',
  data () {
    return {
      userInfoReady: false,
      user: {}
    }
  },
  created () {
    this.fetchUserInfo()
  },
  methods: {
    handleDropdownCommand (command) {
      switch (command) {
        case 'info':
          this.$router.push('/user/info')
          break;
        case 'avatar':
          this.$router.push('/user/avatar')
          break;
        case 'phone':
          this.$router.push('/user/phone')
          break;
        case 'logout':
          this.$axios.get('/sys/logout')
            .then(response => {
              localStorage.removeItem("access_token")
        			localStorage.removeItem("refresh_token")
              this.$router.push('/login/username')
            })
            .catch(error => {
              console.log(error)
              this.$message({
                message: '登出账号异常',
                type: 'warning'
              })
            })
          break;
        default:
          console.log('Jump to User Center Page')
      }
    },
    fetchUserInfo () {
      this.$axios.get('/api-u/users/current')
        .then(response => {
          this.user = response.data
          this.userInfoReady = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.head-logo {
  line-height: 60px;
}
.head-logo-link {
  font-size: 22px;
  color: #333;
}
.head-user {
  text-align: right;
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
</style>
