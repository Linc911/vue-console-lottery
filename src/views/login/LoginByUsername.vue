<template lang="html">
  <section class="login-by-username">
    <el-form :model="ruleForm" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="switch-login-type">
      <router-link to="/login/phone" class="login-type">短信登陆</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空' },
          { min: 2, max: 20, message: '用户名长度在 2 - 20 字符之间' }
        ],
        password: [
          { required: true, message: '密码不能为空' },
          { min: 6, max: 20, message: '密码长度在 6 - 20 字符之间' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 调用登录函数
          this.login()
        } else {
          this.$message({
            message: '用户名或密码格式不正确，无法登录！',
            type: 'warning'
          })
          return false
        }
      })
    },
    login () {
      const formData = `username=${this.ruleForm.username}&password=${this.ruleForm.password}`
      this.$axios.post('/sys/login', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      }).then(response => {
        // 将access_token和refresh_token写入本地
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)
        // 跳转到首页
        this.$router.push('/home')

        // this.$message({
        //   message: '登录成功',
        //   type: 'success'
        // })
      }).catch(error => {
        if (error.code === '401') {
          this.$message({
            message: '用户不存在',
            type: 'info'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-button {
  display: block;
  width: 100%;
}
.switch-login-type {
  text-align: right;
  color: #27A9E3;
}
.login-type {
  font-size: 14px;
}
</style>
