<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="撤单确认" width="400px">
    <div>
      <span class="highlight-text">撤单 </span>游戏类型:
      <span class="highlight-text">{{ data.gameName }}</span>&nbsp;&nbsp;&nbsp; 期号：
      <span class="highlight-text">{{ data.drawno }} ?</span>
    </div>
    <span slot="footer">
      <el-button type="primary" @click="handleConfirm">确认</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import config from '@/config/data'

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
      dialogVisible: false
    }
  },
  methods: {
    // 确认撤单；发送请求，成功时通知父组件更新数据
    handleConfirm () {
      this.dialogVisible = false // 隐藏弹框

      this.$httpAPI.updateLotteryBillCancel({
        gameType: this.data.gameType,
        drawno: this.data.drawno
      }).then((response) => {
        if (response.data.status === 200) {
          this.$emit('on-canceled')
          this.$message.success(config.OPERATION_SUCCEEDED)
        } else {
          this.$message.error(`${config.OPERATION_FAILED}: ${response.data.msg}`)
        }
      }).catch((error) => {
        console.log(error)
        this.$message.error(config.SERVER_RESPONSE_EXCEPTION)
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
.highlight-text {
  color: #F56C6C;
}
</style>
