<template lang="html">
  <div class="">
    <el-form :model="formData" :rules="rules" label-width="100px" size="small" ref="billCancelForm">
      <FormSelectGame
        @on-change="$set(formData, 'gameType', $event)"
        httpAPIName="fetchGamesMenu"
        :httpAPIParams="{ params: { type: 1 } }"
        labelAttr="name"
        valueAttr="id"
        prop="gameType"
        label="所属彩种"
        filterable
        ref="gameType"
      />

      <el-form-item prop="drawno" label="彩种期号">
        <el-input v-model="formData.drawno" type="number" placeholder="1873281" />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('billCancelForm')" type="primary">确认撤单</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import validators from '@/config/form'
import config from '@/config/data'

import FormSelectGame from '@/components/form/FormSelectGame'

export default {
  name: 'LotteryBillCancel',
  components: {
    FormSelectGame
  },
  data () {
    return {
      formData: {},
      rules: {
        gameType: validators.validateSelect('所属彩种'),
        drawno: validators.validateInteger('彩种期号')
      }
    }
  },
  methods: {
    // 确认撤单,发送请求
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.updateLotteryBillCancel(this.formData).then((response) => {
            if (response.data.status === 200) {
              // 成功时重置form fileds
              this.$refs[formName].resetFields()
              this.$refs.gameType.reset()

              this.$message.success(config.OPERATION_SUCCEEDED)
            } else {
              this.$message.error(`${config.OPERATION_FAILED}: ${response.data.msg}`)
            }
          }).catch((error) => {
            console.log(error)
            this.$message.error(config.SERVER_RESPONSE_EXCEPTION)
          })
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    }
  }
}
</script>
