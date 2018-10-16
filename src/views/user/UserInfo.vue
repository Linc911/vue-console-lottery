<template lang="html">
  <section v-if="userInfoReady" class="user-info">
    <el-form :model="ruleForm" :rules="rules" label-width="100px" ref="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="ruleForm.username" disabled></el-input>
      </el-form-item>

      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname" placeholder="用户昵称"></el-input>
      </el-form-item>

      <el-form-item label="昵称" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="选择性别">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="0"></el-option>
        </el-select>
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
        nickname: [
          { required: true, message: '昵称不能为空' },
          { max: 20, message: '昵称长度不大于20个字符' }
        ],
        sex: [
          { required: true, message: '密码不能为空' }
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
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
    fetchUserInfo () {
      this.$axios.get('/api-u/users/current')
        .then(response => {
          const { username, nickname, sex } = response.data
          Object.assign(this.ruleForm, { username, nickname, sex })
          this.userInfoReady = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
