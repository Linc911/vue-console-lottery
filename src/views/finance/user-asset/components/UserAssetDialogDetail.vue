<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员资金详情" width="760px">
    <el-form :model="formData" label-width="100px" size="small" disabled class="clearfix">
      <el-form-item label="会员账号">
        <el-input :value="formData.username" />
      </el-form-item>

      <el-form-item label="会员昵称">
        <el-input :value="formData.nickname" />
      </el-form-item>

      <el-form-item label="订单号">
        <el-input :value="formData.orderId" />
      </el-form-item>

      <el-form-item label="优惠%">
        <el-input :value="formData.discount" />
      </el-form-item>

      <el-form-item label="手续费">
        <el-input :value="formData.poundage | RMB" />
      </el-form-item>

      <el-form-item label="金额">
        <el-input :value="formData.money | RMB" />
      </el-form-item>

      <el-form-item label="改变前金额">
        <el-input :value="formData.before | RMB" />
      </el-form-item>

      <el-form-item label="改变后金额">
        <el-input :value="formData.after | RMB" />
      </el-form-item>

      <el-form-item label="类型">
        <el-input :value="formData.type | typeFilter" />
      </el-form-item>

      <el-form-item label="处理状态">
        <el-input :value="formData.status | statusFilter" />
      </el-form-item>

      <el-form-item label="创建时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>

      <el-form-item label="修改时间">
        <el-input :value="formData.updateTime | time" />
      </el-form-item>

      <el-form-item label="审批人ID">
        <el-input :value="formData.updateId" />
      </el-form-item>

      <el-form-item label="审批人账号">
        <el-input :value="formData.updateUsername" />
      </el-form-item>

      <el-form-item label="备注" class="custom-block">
        <el-input :value="formData.remark" type="textarea" rows="3" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'WithdrawTypeDialogDetail',
  filters: {
    typeFilter (value) {
      switch (value) {
        case 0:
          return '提款'
        case 1:
          return '在线存款'
        case 2:
          return '填单存款'
        case 3:
          return '优惠'
        case 4:
          return '返水'
        case 5:
          return '派送'
        case 6:
          return '红包转入'
        case 7:
          return '红包转出'
        case 8:
          return '分润'
        case 9:
          return '人工加款'
        case 10:
          return '人工减款'
        default:
          return '其他'
      }
    },
    statusFilter (value) {
      switch (value) {
        case 0:
          return '待处理'
        case 1:
          return '成功'
        case 2:
          return '失败'
        case 3:
          return '回收'
        default:
          return '其他'
      }
    }
  },
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
