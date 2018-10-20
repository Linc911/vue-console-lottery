<template lang="html">
  <section v-if="userInfoReady" class="user-info">
    <el-form :model="formData" :rules="rules" label-width="100px" ref="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" disabled></el-input>
      </el-form-item>

      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="formData.nickname" placeholder="用户昵称"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-select v-model="formData.sex" placeholder="选择性别">
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
      formData: {
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
          this.$axios.put('/api-u/users/me', this.formData).then(response => {
            this.$message.success('修改登录用户信息成功！')
            this.$router.push('/home')
          }).catch(error => {
            console.log(error)
            this.$message.error('修改登录用户信息失败！')
          })
        } else {
          this.$message.warning('登录用户信息填写不正确！')
        }
      })
    },
    fetchUserInfo () {
      this.$axios.get('/api-u/users/current')
        .then(response => {
          const { id, username, nickname, sex } = response.data
          Object.assign(this.formData, { id, username, nickname, sex })

          this.userInfoReady = true
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
