<template lang="html">
  <section class="user-update">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="120px"
      ref="userCreateForm"
    >
      <el-form-item label="用户名">
        <el-input v-model="formData.username" placeholder="用户名" />
      </el-form-item>

      <el-form-item label="昵称" >
        <el-input v-model="formData.nickname" placeholder="密码" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="formData.password" placeholder="密码" />
      </el-form-item>

      <el-form-item label="性别" prop="parentId">
        <el-select v-model="formData.parentId" placeholder="选择性别" style="width: 100%;">
          <el-option key="root" label="男" :value="1"/>
          <el-option key="roo" label="女" :value="0"/>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('userCreateForm')" type="primary">修改</el-button>
        <el-button @click="$router.push('/admin/users')" type="info">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'menuItemUpdate',
  data () {
    return {
      selectOptions: [],
      formData: {
        parentId: 1,
        username: '',
        nickname: '',
        password: '888888'
      },
      rules: {}
    }
  },
  methods: {
    submitForm (formName) {
      this.$message.warning('接口有问题，正在调试中...')
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     this.$axios.put('/api-b/menus', this.formData).then(() => {
      //       this.$message.success('修改菜单信息成功！')
      //       this.$router.push('/system/menu')
      //     }).catch(error => console.log(error))
      //   }
      // })
    }
  }
}
</script>
