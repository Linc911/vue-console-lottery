<template lang="html">
  <el-dialog
    :visible.sync="dialogVisible"
    title="手动开奖"
    width="768px"
  >
    <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form" class="clearfix">
      <el-form-item prop="number1" label="正码一">
        <el-input v-model.trim="formData.number1" />
      </el-form-item>

      <el-form-item prop="number2" label="正码二">
        <el-input v-model.trim="formData.number2" />
      </el-form-item>

      <el-form-item prop="number3" label="正码三">
        <el-input v-model.trim="formData.number3" />
      </el-form-item>

      <el-form-item prop="number4" label="正码四">
        <el-input v-model.trim="formData.number4" />
      </el-form-item>

      <el-form-item prop="number5" label="正码五">
        <el-input v-model.trim="formData.number5" />
      </el-form-item>

      <el-form-item prop="number6" label="正码六">
        <el-input v-model.trim="formData.number6" />
      </el-form-item>

      <el-form-item prop="number7" label="特码">
        <el-input v-model.trim="formData.number7" />
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
    // 在开奖数字里选择
    choseBall (number, index) {
      if (this.results.length < this.data.ballNum) {
        this.results.push(number)

        // 如果是不能重复，直接在选择队列中删除
        if (!this.data.repeat) this.balls.splice(index, 1)
      } else {
        this.$message.warning(`不符合游戏开奖规则：开奖数字为 ${this.data.ballNum} 位`)
      }
    },
    // 在开奖结果里，撤销选择
    undoBall (number, index) {
      this.results.splice(index, 1)
      // 如果是不能重复，才再次放回到选择队列中
      if (!this.data.repeat) {
        this.balls.push(number)
        this.balls.sort((a, b) => a - b)
      }
    },
    // 确认撤单；发送请求，成功时通知父组件更新数据
    handleConfirm () {
      this.$message.warning('接口调试中...')
      return
      // eslint-disable-next-line
      console.log(this.data)
      console.log(this.formData)
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$httpAPI.updateSixResultManual(this.formData).then(response => {
            if (response.data.data) {
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
.container-box {
  min-height: 52px;
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: rgba(0,0,0,.1) 0 2px 12px 0;
}

.tip-container {
  padding: 8px 16px;
  background-color: #fff6f7;
  border-left: 5px solid #fe6c6f;
  border-radius: 4px;
}
.tip-content {
  font-size: 13px;
  color: #828282;
  line-height: 1.5em;
}
</style>
