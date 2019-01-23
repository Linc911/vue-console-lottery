<template lang="html">
  <section class="user-info">
    <el-form :model="user" :rules="rules" label-width="100px" ref="userInfoForm">
      <el-form-item label="用户名">
        <el-input v-model="user.username" disabled />
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="user.nickname" placeholder="用户昵称" />
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-select v-model="user.sex" placeholder="选择性别">
          <el-option label="男" :value="1" />
          <el-option label="女" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userInfoForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'UserActiveInfoUpdate',
  data () {
    return {
      user: {
        username: '',
        nickname: '',
        sex: ''
      },
      rules: {
        nickname: [
          { required: true, message: '昵称不能为空' },
          { max: 20, message: '昵称长度不大于20个字符' }
        ],
        sex: { required: true }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const { id, username, nickname, sex } = this.$store.state.app.user
      this.user = { id, username, nickname, sex }
    })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.putUserInfo(this.user).then(response => {
            this.$message.success('修改登陆用户信息成功！')
            this.$router.push({ name: 'HomePage' })
          }).catch(error => {
            console.log(error)
            this.$message.error('修改登陆用户信息失败！')
          })
        } else {
          this.$message.warning('登陆用户信息填写不正确！')
        }
      })
    }
  }
}
</script>
