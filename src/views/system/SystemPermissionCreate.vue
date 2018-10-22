<template lang="html">
  <section class="permission-create">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      ref="permissionCreateForm"
    >
      <el-form-item label="权限名" prop="name">
        <el-input v-model="formData.name" placeholder="权限名"></el-input>
      </el-form-item>

      <el-form-item label="权限标识" prop="permission">
        <el-input @keyup.native.enter="submitForm('permissionCreateForm')" v-model="formData.permission" placeholder="权限标识"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('permissionCreateForm')">确认</el-button>
        <el-button type="info" @click="$router.push('/system/permissions')">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'permissionCreate',
  data () {
    return {
      formData: {
        name: '',
        permission: ''
      },
      rules: {
        name: [
          { required: true, message: '权限名不能为空' },
          { max: 20, message: '权限名长度不能超过20个字符' }
        ],
        permission: [
          { required: true, message: '权限标识不能为空' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post('/api-u/permissions', this.formData).then(() => {
            this.$router.push('/system/permissions')
          }).catch(error => console.log(error))
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
