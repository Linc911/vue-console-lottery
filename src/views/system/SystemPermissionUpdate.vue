<template lang="html">
  <section class="permission-update">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      ref="updatePermissionForm"
    >
      <el-form-item label="权限名">
        <el-input v-model="formData.name" placeholder="权限名" />
      </el-form-item>

      <el-form-item label="权限标识">
        <el-input
          @keyup.native.enter="submitForm('updatePermissionForm')"
          v-model="formData.permission"
          placeholder="权限名"
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('updatePermissionForm')" type="primary">修改</el-button>
        <el-button @click="$router.push('/system/permissions')" type="info">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'permissionUpdate',
  data () {
    return {
      formData: { id: '', code: '', name: '' },
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
  created () {
    this.fetchUserInfo()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.put('/api-u/permissions', this.formData).then(() => {
            this.$router.push('/system/permissions')
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('权限名或权限标识填写不正确！')
        }
      })
    },
    fetchUserInfo () {
      this.$axios.get('/api-u/roles/' + this.$route.params.id).then(response => {
        const { id, name, permission } = response.data
        Object.assign(this.formData, { id, name, permission })
      }).catch(error => console.log(error))
    }
  }
}
</script>
