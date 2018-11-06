<template lang="html">
  <div class="rebate-setting">
    <el-button @click="showDialog" type="primary" size="mini">抽点详情</el-button>
    <!-- 会员抽点详情及设置弹框 -->
    <el-dialog
      title="会员抽点详情"
      :visible.sync="dialogVisible"
      width="400px"
      center
    >
      <el-form :model="rebateForm" label-width="100px">
        <el-form-item label="真人视讯%" >
          <el-input v-model="rebateForm.zrss" size="small" />
        </el-form-item>

        <el-form-item label="电子游艺%" >
          <el-input v-model="rebateForm.dzyy" size="small" />
        </el-form-item>

        <el-form-item label="皇冠体育%" >
          <el-input v-model="rebateForm.hgty" size="small" />
        </el-form-item>

        <el-form-item label="彩票游戏%" >
          <el-input v-model="rebateForm.cpyx" size="small" />
        </el-form-item>

        <el-form-item label="港彩游戏%" >
          <el-input v-model="rebateForm.gcyx" size="small" />
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="handleRebateFormConfirm" size="small">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserRebateSetting',
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      rebateForm: {
        zrss: 0,
        dzyy: 0,
        hgty: 0,
        cpyx: 0,
        gcyx: 0
      }
    }
  },
  methods: {
    // 请求抽点信息， 显示弹框
    showDialog () {
      if (!this.rebateForm.userId) {
        this.$httpAPI.getUsersRebate({ params: { userId: this.userId } }).then(response => {
          this.rebateForm = response.data.data
        }).catch(error => console.log(error))
      }
      this.dialogVisible = true
    },
    // 修改抽点比例
    handleRebateFormConfirm () {
      this.$httpAPI.updateUsersRebate(this.rebateForm).then(() => {
        this.dialogVisible = false
        this.$message.success('修改抽点比例成功！')
      }).catch(() => this.$message.error('修改抽点比例失败！'))
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
