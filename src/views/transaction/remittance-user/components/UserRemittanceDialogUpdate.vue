<template lang="html">
  <div class="remittance-update">
    <el-dialog :visible.sync="dialogVisible" title="修改汇款配置" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="100px"
        size="small"
        class="clearfix"
        ref="formCreate"
      >
        <el-form-item prop="username" label="支付户名">
          <el-input v-model.trim="formData.username" placeholder="支付户名" />
        </el-form-item>

        <el-form-item prop="discountRatio" label="优惠比例%">
          <el-input v-model.trim="formData.discountRatio" type="number" placeholder="优惠比例" />
        </el-form-item>

        <el-form-item prop="sort" label="排列顺序">
          <el-input v-model.trim="formData.sort" type="number" placeholder="排列顺序" />
        </el-form-item>

        <el-form-item prop="codeUrl" label="二维码地址" class="custom-block">
          <el-input v-model.trim="formData.codeUrl" placeholder="二维码地址" />
        </el-form-item>

        <el-form-item prop="bank" label="收款银行" class="custom-block" >
          <el-input v-model.trim="formData.bank" placeholder="收款银行"/>
        </el-form-item>

        <el-form-item prop="userAccount" label="收款账号" class="custom-block">
          <el-input v-model.trim="formData.userAccount" placeholder="收款账号" />
        </el-form-item>

        <el-form-item prop="bankAddress" label="银行地址" class="custom-block">
          <el-input v-model.trim="formData.bankAddress" placeholder="银行地址" />
        </el-form-item>

        <FormSelect
          @on-change="$set(formData, 'userGroups', $event)"
          :value="formData.userGroups"
          httpAPIName="fetchUserGroups"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="groupId"
          prop="userGroups"
          label="会员分组"
          multiple
        />
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'UserRemittanceDialogUpdate',
  components: {
    FormSelect
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      formData: {},
      rules: {
        username: { required: true, message: '支付户名不能为空' },
        // bank: { required: true, message: '收款银行不能为空' },
        discountRatio: { required: true, message: '优惠比例不能为空' },
        // codeUrl: { required: true, message: '二维码地址不能为空' },
        sort: { required: true, message: '排序顺序不能为空' },
        userGroups: { type: 'array', required: true, message: '会员分组至少选择一个', trigger: 'change' }
        // userAccount: { required: true, message: '收款账号不能为空' },
        // bankAddress: { required: true, message: '银行地址不能为空' }
      }
    }
  },
  watch: {
    data () {
      this.formData = this.data
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false

          this.$httpAPI.updateTransactionRemittance(this.formData).then(response => {
            if (response.data.status === 200) {
              this.$emit('on-updated')
              this.$message.success('修改成功！')
            } else {
              this.$message.error('修改失败！')
            }
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
