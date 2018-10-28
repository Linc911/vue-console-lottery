<template lang="html">
  <section class="login-by-username">
    <el-form :model="user" :rules="rules" label-width="100px" ref="userForm">
      <el-form-item label="用户名">
        <el-input v-model="user.username" disabled></el-input>
      </el-form-item>

      <el-form-item label="昵称">
        <el-input v-model="user.nickname" disabled></el-input>
      </el-form-item>

      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="user.phone" placehold="手机号码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        nickname: '',
        phone: ''
      },
      rules: {
        phone: [
          { required: true, message: '手机号码不能为空' },
          { pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/, message: '请输入有效的11位手机号' }
        ]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const { id, username, nickname, phone } = this.$store.state.app.user
      this.user = { id, username, nickname, phone }
    })
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
    }
  }
}
</script>
