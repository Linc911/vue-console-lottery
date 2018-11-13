<template lang="html">
  <div class="dialog-deposit">
    <el-dialog :visible.sync="dialogVisible" title="填单存款每项详情" width="760px">
      <el-form :model="formData" label-width="110px" size="small">
        <el-col :span="12">
          <el-form-item label="支付户名">
            <el-input :value="formData.bankUsername" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="支付方式">
            <el-input :value="formData.configPayTypeName" disabled />
          </el-form-item>
        </el-col>

        <el-row>
          <el-col :span="12">
            <el-form-item label="汇款时间">
              <el-input :value="formData.remitTime | time" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="汇款金额">
              <el-input :value="formData.remitMoney | RMB" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="汇款人账号">
              <el-input :value="formData.createUsername" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="汇款人账号昵称">
              <el-input :value="formData.createNickname" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="填单时间">
              <el-input :value="formData.createTime" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="审核状态">
              <el-input :value="formData.status" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="银行名称">
              <el-input :value="formData.bankName" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="银行账户">
              <el-input :value="formData.bankAccount" disabled />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="银行地址">
              <el-input :value="formData.bankAddress" disabled />
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
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DepositFormDialog',
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
      this.dialogVisible = false

      this.$httpAPI.updateFinanceDepositFormStatus({
        params: { remitInfoId: this.formData.remitInfoId, status }
      }).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-success', { remitInfoId: this.formData.remitInfoId, status })
          this.$message.success('修改状态成功！')
        } else {
          this.$message.warning('修改状态失败！') 
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
