<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="100px"
    size="medium"
    style="max-width: 800px"
    ref="form"
  >
    <el-form-item prop="username" label="用户账号">
      <el-input v-model.trim="formData.username" placeholder="用户账号" />
      <!-- <FormSelectAsync
        @on-change="$set(formData, 'username', $event)"
        httpAPIName="fetchPublicUsersBasic"
        labelAttr="username"
        valueAttr="id"
      /> -->
    </el-form-item>

    <el-form-item prop="gameType" label="账户类型">
      <FormSelectAsync
        @on-change="$set(formData, 'gameType', $event)"
        httpAPIName="fetchGamesList"
        labelAttr="name"
        valueAttr="id"
        ref="gameType"
      />
    </el-form-item>

    <el-form-item prop="type" label="调整方向">
      <el-radio-group v-model="formData.type">
        <el-radio :label="0">增加</el-radio>
        <el-radio :label="1">减少</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="loanType" label="借贷类型">
      <FormSelectAsync
        @on-change="$set(formData, 'loanType', $event)"
        httpAPIName="fetchFinanceLoanType"
        labelAttr="name"
        valueAttr="dictionaryId"
        ref="loanType"
      />
    </el-form-item>

    <el-form-item prop="money" label="调整金额">
      <el-input v-model.trim="formData.money" type="number" min="0" placeholder="调整金额" />
    </el-form-item>

    <el-form-item prop="remark" label="调整理由">
      <el-input
        v-model.trim="formData.remark"
        @keyup.native.enter="submitForm('balanceForm')"
        type="textarea"
        :rows="5"
        placeholder="调整理由"
      />
    </el-form-item>

    <el-form-item>
      <el-checkbox v-model="checked">{{ saveString }}</el-checkbox>
      <el-button
        @click="submitForm('form')"
        type="primary"
        style="margin-left: 50px"
      >提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import config from '@/config/data'

import validators from '@/config/form'

import FormSelectAsync from '@/components/form/FormSelectAsync'

export default {
  name: 'BalanceManipulationForm',
  components: {
    FormSelectAsync
  },
  data () {
    return {
      checked: true,
      saveString: config.COMPONENT_CREATION_RECORD,
      createHttpAPI: 'saveFinanceBalanceChange',
      formData: { type: 0 },
      rules: {
        username: validators.validateRequired('用户账号'),
        gameType: validators.validateSelect('游戏类型'),
        type: validators.validateSelect('调整方向'),
        loanType: validators.validateSelect('借贷类型'),
        money: validators.validateRequired('调整金额不能为空')
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI[this.createHttpAPI](this.formData).then((response) => {
            if (response.data.status === 200) {
              // 清除表单填写记录
              if (!this.checked) {
                this.$utils.invokeRefResetMothod(this.$refs)
                this.$refs[formName].resetFields()
              }

              this.$emit('on-created')

              this.$message.success(config.CREATE_SUCCEEDED)
            } else {
              this.$message.error(`${config.CREATE_FAILED}: ${response.data.msg}`)
            }
          }).catch((error) => {
            console.dir(error)
            this.$message.error(config.CREATE_FAILED)
          })
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    }
  }
}
</script>
