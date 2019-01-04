<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="加减款操作每项详情" width="760px">
    <el-form :model="data" label-width="100px" size="small" disabled class="clearfix">
      <el-form-item label="会员账号">
        <el-input :value="data.username" />
      </el-form-item>

      <el-form-item label="会员昵称">
        <el-input :value="data.nickname" />
      </el-form-item>

      <el-form-item label="金额类型">
        <el-input :value="data.gameName" />
      </el-form-item>

      <el-form-item label="借贷类型">
        <el-input :value="data.loanName" />
      </el-form-item>

      <el-form-item label="调整方向">
        <el-input :value="data.type | depositDircetion" />
      </el-form-item>

      <el-form-item label="调整金额">
        <el-input :value="data.money" />
      </el-form-item>

      <el-form-item label="创建时间">
        <el-input :value="data.createTime | time" />
      </el-form-item>

      <el-form-item label="创建者">
        <el-input :value="data.createName" />
      </el-form-item>

      <el-form-item label="调整理由" class="custom-block">
        <el-input :value="data.remark" type="textarea" rows="3" />
      </el-form-item>
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
  name: 'BalanceManipulationDialogAudit',
  mixins: [ dialogAuditMixin ],
  data () {
    return {
      requestParams: { changeId: this.data.changeId },
      audit: {
        httpAPI: 'updateDepositFormStatus',
        attrName: 'status'
      }
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
