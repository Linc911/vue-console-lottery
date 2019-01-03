<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="填单存款每项详情" width="760px">
    <el-form :model="data" label-width="110px" size="small">
      <el-col :span="12">
        <el-form-item label="支付户名">
          <el-input :value="data.bankUsername" disabled />
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="支付方式">
          <el-input :value="data.configPayTypeName" disabled />
        </el-form-item>
      </el-col>

      <el-row>
        <el-col :span="12">
          <el-form-item label="汇款时间">
            <el-input :value="data.remitTime | time" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="汇款金额">
            <el-input :value="data.remitMoney | RMB" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="汇款人账号">
            <el-input :value="data.createUsername" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="汇款人账号昵称">
            <el-input :value="data.createNickname" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="填单时间">
            <el-input :value="data.createTime" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="审核状态">
            <el-input :value="data.status" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="银行名称">
            <el-input :value="data.bankName" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="银行账户">
            <el-input :value="data.bankAccount" disabled />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="银行地址">
            <el-input :value="data.bankAddress" disabled />
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
      <el-button @click="changeStatus(2)" type="primary" size="small">审批通过</el-button>
      <el-button @click="changeStatus(3)" type="danger" size="small">审批拒绝</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogAuditMixin } from '@/mixins'

export default {
  name: 'DepositFormDialog',
  mixins: [ dialogAuditMixin ],
  data () {
    return {
      requestParams: { remitInfoId: this.data.remitInfoId },
      audit: {
        httpAPI: 'updateFinanceDepositFormStatus',
        attrName: 'status'
      }
    }
  },
  watch: {
    data () {
      this.requestParams.remitInfoId = this.data.remitInfoId
    }
  }
}
</script>
