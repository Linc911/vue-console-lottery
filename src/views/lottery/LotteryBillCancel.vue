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
import FormValidation from '@/config/form'

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
        gameType: FormValidation.validateSelect('所属彩种'),
        drawno: FormValidation.validateInteger('彩种期号')
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.updateLotteryBillCancel({
            params: this.formData
          }).then(response => {
            if (response.data.status === 200) {
              this.$message.success('撤单成功！')
            } else {
              this.$message.error('撤单失败: ' + response.data.msg)
            }
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请按提示填写！')
        }
      })
    }
  }
}
</script>
