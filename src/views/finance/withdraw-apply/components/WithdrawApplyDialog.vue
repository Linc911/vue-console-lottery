<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="提款申请详情" width="760px">
    <el-form :model="data" label-width="100px" size="small">
      <el-row>
        <el-col :span="12">
          <el-form-item label="申请单号">
            <el-input :value="data.orderId" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="申请时间">
            <el-input :value="data.applyTime | time" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户ID">
            <el-input :value="data.userId" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="会员账号">
            <el-input :value="data.username" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="会员昵称">
            <el-input :value="data.nickname" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="会员分组">
            <el-input :value="data.groupNames" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="银行户名">
            <el-input :value="data.accountName" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="银行卡号">
            <el-input :value="data.accountNo" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="银行名称">
            <el-input :value="data.branchName" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="金额">
            <el-input :value="data.money | RMB" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="审批人账号">
            <el-input :value="data.operator" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="审批时间">
            <el-input :value="data.operatorTime" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="审核状态">
            <el-input :value="data.status | auditStatus" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="备注">
            <el-input :value="data.remark" type="textarea" rows="3" disabled />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span v-if="data.status <= 1" slot="footer">
      <el-button @click="changeStatus(2)" type="primary" >审批通过</el-button>
      <el-button @click="changeStatus(3)" type="danger" >审批拒绝</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogAuditMixin } from '@/mixins'

export default {
  name: 'DialogWithdrawApply',
  mixins: [ dialogAuditMixin ],
  data () {
    return {
      requestParams: { withdrawId: this.data.withdrawId },
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
