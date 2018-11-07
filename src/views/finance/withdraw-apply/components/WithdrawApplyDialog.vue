<template lang="html">
  <div class="dialog-withdraw-apply">
    <el-dialog :visible.sync="dialogVisible" title="提款申请详情" width="760px">
      <el-form :model="formData" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="申请单号">
              <el-input :value="formData.orderId" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="申请时间">
              <el-input :value="formData.applyTime | time" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用户ID">
              <el-input :value="formData.userId" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会员账号">
              <el-input :value="formData.username" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会员昵称">
              <el-input :value="formData.nickname" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会员分组">
              <el-input :value="formData.groupNames" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="金额">
              <el-input :value="formData.money | RMB" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="审核状态">
              <el-input :value="formData.status | auditStatus" size="small" disabled />
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
        <el-button @click="changeStatus(2)" type="primary" size="small">审批通过</el-button>
        <el-button @click="changeStatus(3)" type="danger" size="small">审批拒绝</el-button>
        <el-button v-if="formData.status !== 1" @click="changeStatus(1)" size="small">已查阅，待审批</el-button>
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
