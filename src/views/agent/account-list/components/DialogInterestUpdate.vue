<template lang="html">
    <el-dialog
      :visible.sync="dialogVisible"
      title="修改分润"
      width="400px"
    >
      <el-form :model="formData" size="small" label-width="90px" >
        <el-form-item label="分润比例%">
          <el-input v-model="formData.rate" type="number" />
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm()" type="primary" size="small">确定</el-button>
      </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogInterestUpdate',
  props: {
    id: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      formData: { id: this.id, rate: '' }
    }
  },
  watch: {
    id () {
      if (this.id && this.dialogVisible) {
        this.formData.id = this.id
        this.fetchInterestRate()
      }
    }
  },
  methods: {
    // 提交表单
    submitForm () {
      this.dialogVisible = false

      if (this.formData.rate) {
        this.$httpAPI.updateAgentAccountInterest(this.formData).then(response => {
          if (response.data.status === 200) {
            this.$emit('on-changed', this.formData)
            this.$message.success('变更成功！')
          } else {
            this.$message.error('变更失败！')
          }
        }).catch(error => console.log(error))
      }
    },
    // 显示与隐藏弹框（外部调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // 获取所有代理账号列表
    fetchInterestRate () {
      this.$httpAPI.fetchAgentAccountInterest({
        params: { userId: this.id }
      }).then((response) => {
        this.formData = response.data.data
      }).catch((error) => console.log(error))
    }
  }
}
</script>
