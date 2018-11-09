<template lang="html">
  <div class="dialog-withdraw-apply">
    <el-dialog :visible.sync="dialogVisible" title="提款申请详情" width="760px">
      <el-form :model="formData" label-width="100px" size="small">
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请单号">
              <el-input :value="formData.orderId" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请时间">
              <el-input :value="formData.applyTime | time" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户ID">
              <el-input :value="formData.userId" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会员账号">
              <el-input :value="formData.username" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="会员昵称">
              <el-input :value="formData.nickname" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="会员分组">
              <el-input :value="formData.groupNames" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="银行户名">
              <el-input :value="formData.accountName" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="银行卡号">
              <el-input :value="formData.accountNo" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="银行名称">
              <el-input :value="formData.branchName" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="金额">
              <el-input :value="formData.money | RMB" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="审批人账号">
              <el-input :value="formData.operator" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="审批时间">
              <el-input :value="formData.operatorTime" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="审核状态">
              <el-input :value="formData.status | auditStatus" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="备注">
              <el-input :value="formData.remark" type="textarea" rows="3" disabled />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span v-if="formData.status <= 1" slot="footer">
        <el-button @click="changeStatus(2)" type="primary" >审批通过</el-button>
        <el-button @click="changeStatus(3)" type="danger" >审批拒绝</el-button>
        <el-button v-if="formData.status !== 1" @click="changeStatus(1)" >已查阅，待审批</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogWithdrawApply',
  props: {
    formData: {
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
    changeStatus (status) {
      this.$httpAPI.updateFinanceWithdrawApplyStatus({
        params: { withdrawId: this.formData.withdrawId, status }
      }).then(() => {
        this.$emit('on-success', { withdrawId: this.formData.withdrawId, status })
        this.dialogVisible = false
        this.$message.success('修改状态成功！')
      }).catch(error => console.log(error))
    }
  }
}
</script>
