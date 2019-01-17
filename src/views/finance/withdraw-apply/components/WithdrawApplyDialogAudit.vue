<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="提款申请详情" width="760px">
    <el-form :model="data" label-width="100px" size="small" disabled class="clearfix">
      <el-form-item label="申请单号">
        <el-input :value="data.orderId" />
      </el-form-item>

      <el-form-item label="申请时间">
        <el-input :value="data.applyTime | time" />
      </el-form-item>

      <el-form-item label="用户ID">
        <el-input :value="data.userId" />
      </el-form-item>

      <el-form-item label="会员账号">
        <el-input :value="data.username" />
      </el-form-item>

      <el-form-item label="会员昵称">
        <el-input :value="data.nickname" />
      </el-form-item>

      <el-form-item label="会员分组">
        <el-input :value="data.groupNames" />
      </el-form-item>

      <el-form-item label="银行户名">
        <el-input :value="data.accountName" />
      </el-form-item>

      <el-form-item label="银行卡号">
        <el-input :value="data.accountNo" />
      </el-form-item>

      <el-form-item label="银行名称">
        <el-input :value="data.branchName" />
      </el-form-item>

      <el-form-item label="金额">
        <el-input :value="data.money | RMB" />
      </el-form-item>

      <el-form-item label="审批人账号">
        <el-input :value="data.operator" />
      </el-form-item>

      <el-form-item label="审批时间">
        <el-input :value="data.operatorTime" />
      </el-form-item>

      <el-form-item label="审核状态">
        <el-input :value="data.status | auditStatus" />
      </el-form-item>

      <el-form-item label="备注" class="custom-block">
        <el-input :value="data.remark" type="textarea" rows="3" />
      </el-form-item>
    </el-form>

    <span v-if="data.status <= 1" slot="footer">
      <el-button @click="changeStatus(2)" type="primary" size="medium">审批通过</el-button>
      <el-button @click="changeStatus(3)" type="danger" size="medium">审批拒绝</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogAuditMixin } from '@/mixins'

export default {
  name: 'DialogWithdrawDialogAudit',
  mixins: [ dialogAuditMixin ],
  data () {
    return {
      requestParams: {},
      audit: {
        httpAPI: 'updateFinanceWithdrawApplyStatus',
        attrName: 'status'
      }
    }
  },
  watch: {
    data () {
      this.requestParams.withdrawId = this.data.withdrawId
    }
  }
}
</script>

<style scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
