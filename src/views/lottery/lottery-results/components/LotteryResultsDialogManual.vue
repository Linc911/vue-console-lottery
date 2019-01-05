<template lang="html">
  <el-dialog
    :visible.sync="dialogVisible"
    title="手动开奖"
    width="768px"
    center
  >
    <el-form label-width="100px">
      <el-form-item label="开奖选择：">
        <!-- 骰子类型 -->
        <div v-if="this.data.gameType >= 7 && this.data.gameType <= 17 && this.data.gameType != 10" class="container-box">
          <span v-for="(ball, index) in balls" :key="index">
            <BaseDice :number="ball" @click.native="choseBall(ball, index)" />
          </span>
        </div>

        <!-- 其他类型 -->
        <div v-else class="container-box">
          <span v-for="(ball, index) in balls" :key="index">
            <LotteryBall :number="ball" @click.native="choseBall(ball, index)" />
          </span>
        </div>
      </el-form-item>

      <el-form-item label="开奖结果：">
        <!-- 骰子类型 -->
        <div v-if="this.data.gameType >= 7 && this.data.gameType <= 17 && this.data.gameType != 10" class="container-box">
          <draggable v-model="results" @start="drag = true" @end="drag = false">
            <span v-for="(ball, index) in results" :key="index">
              <BaseDice :number="ball" @dblclick.native="undoBall(ball, index)" />
            </span>
          </draggable>
        </div>

        <!-- 其他类型 -->
        <div v-else class="container-box">
          <draggable v-model="results" @start="drag = true" @end="drag = false">
            <span v-for="(ball, index) in results" :key="index">
              <LotteryBall :number="ball" @dblclick.native="undoBall(ball, index)" />
            </span>
          </draggable>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="tip-container">
          <p class="tip-content">
            操作提示：<br>
            &nbsp;&nbsp;&nbsp;&nbsp;1. 单击开奖选择框中的数字，可以选中该数字<br>
            &nbsp;&nbsp;&nbsp;&nbsp;2. 双击开奖结果框中的数字，可以撤销该数字<br>
            &nbsp;&nbsp;&nbsp;&nbsp;3. 拖动开奖结果框中的数字，可以调换顺序<br>
          </p>
        </div>
      </el-form-item>

      <el-form-item style="text-align: right">
        <el-button @click="handleConfirm" type="primary" size="small">确认</el-button>
      </el-form-item>
    </el-form>

  </el-dialog>
</template>

<script>
import config from '@/config/data'

import draggable from 'vuedraggable'

import BaseDice from '@/components/base/BaseDice'
import LotteryBall from '@/components/base/LotteryBall'

export default {
  name: 'LotteryResultsDialogCancel',
  components: {
    draggable,
    BaseDice,
    LotteryBall
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      results: [],
      balls: Object.assign([], this.data.balls),
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
      // 判断是否符合开奖规则
      if (this.results.length < this.data.ballNum) {
        this.$message.warning(`不符合游戏开奖规则：开奖位数为 ${this.data.ballNum} 位`)
      } else {
        this.dialogVisible = false // 隐藏弹框

        this.$httpAPI.updateLotteryResultManual({
          gameType: this.data.gameType,
          drawno: this.data.drawno,
          balls: this.results
        }).then((response) => {
          if (response.data.status === 200) {
            this.$emit('on-changed')
            this.$message.success(config.OPERATION_SUCCEEDED)
          } else {
            this.$message.error(`${config.OPERATION_FAILED}: ${response.data.msg}`)
          }
        }).catch((error) => {
          console.log(error)
          this.$message.error(config.SERVER_RESPONSE_EXCEPTION)
        })
      }
    },
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<style scoped>
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
