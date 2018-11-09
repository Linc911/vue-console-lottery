<template>
<div class="dialog-create">
  <el-dialog :visible.sync="dialogVisible" title="创建新支付类型" width="450px">
    <el-form :model="formData" :rules="rules" ref="formCreate" label-width="80px" size="small">
      <el-form-item prop="name" label="类型名称">
        <el-input v-model="formData.name" placeholder="类型名称" />
      </el-form-item>

      <el-form-item props="sort" label="排序">
        <el-input v-model="formData.sort" type="number" min="0" placeholder="排序" />
      </el-form-item>

      <el-form-item props="remark" label="备注">
        <el-input v-model="formData.remark" @keypu.native.enter="submitForm('formCreate')" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'PaymentTypeDialogCreate',
  data () {
    return {
      dialogVisible: false,
      formData: { name: '', sort: '', remark: '' },
      rules: {
        name: [
          { required: true, message: '类型名称不能为空' },
          { min: 2, max: 20, message: '类型名称长度在 2 - 20 字符之间' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.createTransactionPaymentType(this.formData).then(response => {
            if (response.data.status === 200) {
              this.$utils.initializeObjectProperties(this.formData)
              this.$emit('on-success')
              this.$message.success('创建支付类型成功！')
            } else {
              this.$message.error(`创建支付类型失败（${response.data.msg}）！`)
            }
          }).catch(error => console.log(error))

          this.dialogVisible = false
        } else {
          this.$message.warning('支付类型名称填写不正确，请按提示填写！')
        }
      })
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
