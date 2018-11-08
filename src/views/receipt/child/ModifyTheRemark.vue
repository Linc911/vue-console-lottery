<template lang="html">
  <div class="rebate-setting">
    <el-button @click="showDialog" type="primary" size="mini">修改备注</el-button>
    <!-- 会员抽点详情及设置弹框 -->
    <el-dialog
      title="修改备注"
      :visible.sync="dialogVisible"
      width="400px"
      center
    >
      <span class="form-label">备注</span>
      <el-input v-model="remark" size="small" style="width: 300px;margin-left: 20px" />
      <span slot="footer">
        <el-button type="primary" @click="handleRebateFormConfirm" size="small">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModifyTheRemark',
  props: {
    userId: {
      type: String,
      required: true
    },
    remarkProps: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      remark: ''
    }
  },
  created () {
    console.log(this.userId)
  },
  methods: {
    // 请求修改备注， 显示弹框
    showDialog () {
      if (this.remarkProps) {
        this.remark = this.remarkProps
      }
      this.dialogVisible = true
    },
    // 修改抽点比例
    handleRebateFormConfirm () {
      this.$httpAPI.configPayTypeUpdate({ id: this.userId, remark: this.remark }).then(() => {
        this.dialogVisible = false
        this.$message.success('修改备注成功！')
      }).catch(() => this.$message.error('修改备注失败！'))
    }
  }
}
</script>

<style lang="scss" scoped>
  .rebate-setting {
    display: inline-block;
    margin-left: 10px;
  }
</style>
