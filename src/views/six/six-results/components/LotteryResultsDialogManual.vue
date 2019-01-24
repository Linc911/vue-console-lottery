<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="手动开奖" width="768px">
    <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form" class="clearfix">
      <el-form-item prop="number1" label="正码一">
        <el-input v-model.trim="formData.number1" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item prop="number2" label="正码二">
        <el-input v-model.trim="formData.number2" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item prop="number3" label="正码三">
        <el-input v-model.trim="formData.number3" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item prop="number4" label="正码四">
        <el-input v-model.trim="formData.number4" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item prop="number5" label="正码五">
        <el-input v-model.trim="formData.number5" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item prop="number6" label="正码六">
        <el-input v-model.trim="formData.number6" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item prop="number7" label="特码">
        <el-input v-model.trim="formData.number7" type="number" min="1" max="49" />
      </el-form-item>

      <el-form-item style="text-align: right">
        <el-button @click="handleConfirm" type="primary" size="small">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import config from '@/config/data'

import validators from '@/config/form'

export default {
  name: 'LotteryResultsDialogCancel',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formData: {},
      rules: {
        number1: validators.validateRequired('正码一'),
        number2: validators.validateRequired('正码二'),
        number3: validators.validateRequired('正码三'),
        number4: validators.validateRequired('正码四'),
        number5: validators.validateRequired('正码五'),
        number6: validators.validateRequired('正码六'),
        number7: validators.validateRequired('特码')
      },
      results: [],
      dialogVisible: false
    }
  },
  // 没有找到更好的方法清除上次选择的记录；暂在弹框
  watch: {
    data () {
      // 每次变动数据时，清除上次的选择结果
      this.balls = Object.assign([], this.data.balls)
      this.results = []
    }
  },
  methods: {
    // 确认撤单；发送请求，成功时通知父组件更新数据
    handleConfirm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.dialogVisible = false

          const result = [
            this.formData.number1,
            this.formData.number2,
            this.formData.number3,
            this.formData.number4,
            this.formData.number5,
            this.formData.number6,
            this.formData.number7
          ]

          this.$httpAPI.updateSixResultManual({
            drawno: this.data.drawno,
            gameType: this.data.gameType,
            balls: result
          }).then(response => {
            if (response.data.status === 200) {
              this.$emit('on-updated')

              this.$message.success(config.UPDATE_SUCCEEDED)
            } else {
              this.$message.error(`${config.UPDATE_FAILED}: ${response.data.msg}`)
            }
          }).catch(error => console.log(error))
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    },
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<style scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
