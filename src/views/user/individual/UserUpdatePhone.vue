<template lang="html">
  <section v-if="userInfoReady" class="login-by-username">
    <el-form :model="ruleForm" :rules="rules" label-width="100px" ref="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="ruleForm.username" disabled></el-input>
      </el-form-item>

      <el-form-item label="昵称">
        <el-input v-model="ruleForm.nickname" disabled></el-input>
      </el-form-item>

      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone" placehold="手机号码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        nickname: '',
        sex: ''
      },
      rules: {
        phone: [
          { required: true, message: '手机号码不能为空' },
          { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, message: '请输入有效的11位手机号' }
        ]
      },
      userInfoReady: false
    }
  },
  created () {
    this.fetchUserInfo()
  },
  methods: {
    submitForm (formName) {
      this.$message.info('该功能正在开发中...')
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     this.$message({
      //       message: '登录成功',
      //       type: 'success'
      //     })
      //     // 调用登录函数
      //     this.login()
      //   } else {
      //     this.$message({
      //       message: '用户名或密码格式不正确，无法登录！',
      //       type: 'warning'
      //     })
      //     return false
      //   }
      // })
    },
    fetchUserInfo () {
      this.$axios.get('/api-u/users/current')
        .then(response => {
          const { username, nickname, phone } = response.data
          Object.assign(this.ruleForm, { username, nickname, phone })
          this.userInfoReady = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
