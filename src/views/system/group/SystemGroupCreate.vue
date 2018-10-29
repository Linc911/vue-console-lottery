<template lang="html">
  <section class="group-create">
    <el-form
      :model="group"
      :rules="rules"
      label-width="100px"
      ref="groupForm"
    >
      <el-form-item label="分组名称" prop="name">
        <el-input v-model="group.name" placeholder="分组名称" />
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input
          @keyup.native.enter="submitForm('groupForm')"
          v-model="group.remark"
          type="textarea"
          placeholder="备注"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('groupForm')">确认</el-button>
        <el-button type="info" @click="$router.push({ name: 'SystemGroupList' })">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'SystemGroupCreate',
  data () {
    return {
      group: { name: '', remark: '' },
      rules: {
        name: [
          { required: true, message: '分组名称' },
          { max: 20, message: '分组名称不能超过20位字符' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.postSystemGroupChange(this.group).then(() => {
            this.$router.push({ name: 'SystemGroupList' })
            this.$message.success('创建分组成功！')
          }).catch(error => {
            console.log(error)
            this.$message.error('创建分组失败！')
          })
        }
      })
    }
  }
}
</script>
