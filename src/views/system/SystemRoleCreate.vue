<template lang="html">
  <section class="role-create">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      ref="createRoleForm"
    >
      <el-form-item label="Code" prop="code">
        <el-input v-model="formData.code" placeholder="code(一旦创建，不能修改)"></el-input>
      </el-form-item>

      <el-form-item label="角色名称" prop="name">
        <el-input @keyup.native.enter="submitForm('createRoleForm')" v-model="formData.name" placeholder="角色名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('createRoleForm')">确认</el-button>
        <el-button type="info" @click="$router.push('/system/role')">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'roleCreate',
  data () {
    return {
      formData: {
        code: '',
        name: ''
      },
      rules: {
        code: [
          { required: true, message: 'code不能为空' },
          { max: 20, message: 'code不能超过20位字符' }
        ],
        name: [
          { required: true, message: '角色名称' },
          { max: 20, message: '角色名称不能超过20位字符' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post('/api-u/roles', this.formData).then(() => {
            this.$router.push('/system/role')
          }).catch(error => console.log(error))
        } else {
          this.$message({
            message: 'Code或角色名称输入不正确',
            type: 'warning'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 20px;
}
.search-left {
  float: left;
}
.search-right {
  float: right;
  text-align: right;
}
</style>
