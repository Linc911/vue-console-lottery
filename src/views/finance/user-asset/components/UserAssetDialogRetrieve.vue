<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员资金回收确认" width="400px">
    <div>
      <span class="highlight-text">回收</span>
      会员账户 为
      <span class="highlight-text">{{ data.username }}</span> 资金?
    </div>
    <span slot="footer">
      <el-button type="primary" @click="submitForm">确认</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </span>
  </el-dialog>
</template>

<script type="text/javascript">
export default {
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
    submitForm () {
      this.dialogVisible = false

      this.$httpAPI.updateFinanceUserAssetStatus({
        capitalId: this.data.capitalId
      }).then((response) => {
        if (response.data.status === 200) {
          this.$emit('on-status-changed')
          this.$message.success('修改状态成功！')
        } else {
          this.$message.error('修改状态失败！')
        }
      }).catch(error => {
        this.$message.error('修改状态失败！')
        console.log(error)
      })
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<style lang="scss" scoped>
.highlight-text {
  color: #F56C6C;
}
</style>
