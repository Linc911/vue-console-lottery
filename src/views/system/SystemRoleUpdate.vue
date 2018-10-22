<template lang="html">
  <section class="role-update">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      ref="updateRoleForm"
    >
      <el-form-item label="角色ID">
        <el-input v-model="formData.id" disabled />
      </el-form-item>

      <el-form-item label="Code">
        <el-input v-model="formData.code" disabled />
      </el-form-item>

      <el-form-item label="角色名称" prop="name">
        <el-input
          @keyup.native.enter="submitForm('updateRoleForm')"
          v-model="formData.name"
          placeholder="角色名称"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('updateRoleForm')">确认</el-button>
        <el-button type="info" @click="$router.push('/system/roles')">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'roleUpdate',
  data () {
    return {
      formData: { id: '', code: '', name: '' },
      rules: {
        name: [
          { required: true, message: '角色名称' },
          { max: 20, message: '角色名称不能超过20位字符' }
        ]
      }
    }
  },
  created () {
    this.fetchUserInfo()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.put('/api-u/roles', this.formData).then(() => {
            this.$router.push('/system/roles')
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('角色名称填写不正确！')
        }
      })
    },
    fetchUserInfo () {
      this.$axios.get('/api-u/roles/' + this.$route.params.id).then(response => {
        const { id, code, name } = response.data
        Object.assign(this.formData, { id, code, name })
      }).catch(error => console.log(error))
    }
  }
}
</script>
