<template lang="html">
  <div class="balance-change">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 主要内容 -->
    <el-form :model="formData" :rules="rules" ref="balanceForm" label-width="120px">
      <el-form-item prop="username" label="会员账号">
        <el-input v-model="formData.username" placeholder="会员账号" />
      </el-form-item>

      <FormAccountType @on-change="formData.gameType = $event" ref="formAccountType" />

      <el-form-item prop="type" label="调整方向">
        <el-radio-group v-model="formData.type">
          <el-radio :label="0">增加</el-radio>
          <el-radio :label="1">减少</el-radio>
        </el-radio-group>
      </el-form-item>

      <FormLoanType @on-change="formData.loanType = $event" ref="formLoanType" />

      <el-form-item prop="money" label="调整金额">
        <el-input v-model="formData.money" type="number" min="0" placeholder="调整金额" />
      </el-form-item>

      <el-form-item prop="remark" label="调整理由">
        <el-input v-model="formData.remark" @keyup.native.enter="submitForm('balanceForm')" type="textarea" :rows="3" placeholder="调整理由" />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('balanceForm')" type="primary" size="medium">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import FormLoanType from '@/components/form/FormLoanType'
import FormAccountType from '@/components/form/FormAccountType'

export default {
  name: 'FinanceBalanceChange',
  components: {
    BaseBreadcrumb,
    FormLoanType,
    FormAccountType
  },
  data () {
    var validateUsername = (rule, value, callback) => {
      this.$httpAPI.fetchUserId({ params: { username: value } }).then(response => {
        if (response.data.data === null) {
          callback(new Error('系统中没有找到匹配的会员帐号！'))
        } else {
          callback()
        }
      }).catch(error => console.log(error))
    }

    return {
      loanTypes: [],
      gameTypes: [],
      formData: {
        username: '', gameType: '', type: '', loanType: '', money: '', remark: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空' },
          { validator: validateUsername, trigger: 'blur' }
        ],
        gameType: { required: true, message: '必须选择其中一个游戏类型' },
        type: { required: true, message: '必须选择其中一个调整方向' },
        loanType: { required: true, message: '必须选择其中一个借贷类型' },
        money: [
          { required: true, message: '调整金额不能为空' }
          // { required: true, message: '调整金额不能为少于0' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.saveFinanceBalanceChange(this.formData).then(() => {
            // 成功提交数据后，将表格属性初始化（本页面已缓存）
            this.$utils.initializeObjectProperties(this.formData)
            this.$refs.formLoanType.reset()
            this.$refs.formAccountType.reset()

            this.$message.success('创建加减款成功！')
            this.$router.push({ name: 'FinanceDepositForm' })
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    }
  }
}
</script>
