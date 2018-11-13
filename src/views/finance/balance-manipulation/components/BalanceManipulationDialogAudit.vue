<template lang="html">
  <div class="dialog-deposit">
    <el-dialog :visible.sync="dialogVisible" title="加减款操作每项详情" width="760px">
      <el-form :model="formData" label-width="100px">
        <el-row>
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
            <el-form-item label="金额类型">
              <el-input :value="formData.gameName" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="借贷类型">
              <el-input :value="formData.loanName" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="调整方向">
              <el-input :value="formData.type | depositDircetion" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="调整金额">
              <el-input :value="formData.money" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间">
              <el-input :value="formData.createTime | time" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建者">
              <el-input :value="formData.createName" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="调整理由">
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
  name: 'BalanceManipulationDialogAudit',
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
      this.$httpAPI.updateDepositFormStatus({
        params: { changeId: this.formData.changeId, status }
      }).then(() => {
        this.$emit('on-success', { changeId: this.formData.changeId, status })
        this.dialogVisible = false
        this.$message.success('修改状态成功！')
      }).catch(error => console.log(error))
    }
  }
}
</script>
