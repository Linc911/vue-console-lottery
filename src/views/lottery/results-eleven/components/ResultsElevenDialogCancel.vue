<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="撤单确认" width="400px">
    <el-form :model="data" label-width="100px" size="small">
      <el-form-item label="游戏类型">
        <el-input value="11选5" disabled />
      </el-form-item>

      <el-form-item label="游戏期号">
        <el-input v-model="data.drawno" type="number" placeholder="游戏期号" />
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="confirmCancelOrder" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ResultsElevenDialogCancel',
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
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    confirmCancelOrder () {
      this.$httpAPI.cancelLotteryResultEleven({
        params: this.data
      }).then(response => {
        if (response.data.status === -100) {
          this.$message.warning(response.data.msg)
        } else if (response.data.status === 200) {
          this.$message.success('撤单操作成功！')
        }

        this.dialogCancelVisible = false
      }).catch(error => console.log(error))
    }
  }
}
</script>
