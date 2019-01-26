<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="返水记录详情" width="768px">
    <el-form :model="formData" label-width="80px" size="small" class="clearfix" disabled>
      <el-form-item label="用户账户">
        <el-input :value="formData.username" />
      </el-form-item>

      <el-form-item label="返水日期">
        <el-input :value="formData.rebateDate | time" />
      </el-form-item>

      <el-form-item label="开始日期">
        <el-input :value="formData.rebateBegin | time" />
      </el-form-item>

      <el-form-item label="结束日期">
        <el-input :value="formData.rebateEnd | time" />
      </el-form-item>

      <el-form-item label="返水类型">
        <el-input :value="formData.rebateTypeDesc" />
      </el-form-item>

      <el-form-item label="返水账户">
        <el-input :value="formData.gameTypeDesc" />
      </el-form-item>

      <el-form-item label="返水金额">
        <el-input :value="formData.rebateMoney | RMB" />
      </el-form-item>

      <el-form-item label="返水状态">
        <el-input :value="formData.rebateStatus | rebateStatus" />
      </el-form-item>

      <el-form-item label="赔率">
        <el-input :value="formData.ratio | percent" />
      </el-form-item>

      <el-form-item label="总投注">
        <el-input :value="formData.totalBetting" />
      </el-form-item>

      <el-form-item label="投注笔数">
        <el-input :value="formData.bettingAmount" />
      </el-form-item>

      <el-form-item label="有效投注">
        <el-input :value="formData.validBetting" />
      </el-form-item>

      <el-form-item label="盈利金额">
        <el-input :value="formData.gainMoney | RMB" />
      </el-form-item>

      <el-form-item label="输赢状态">
        <el-input :value="formData.gainStatus ? '输' : '赢'" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'RebateListDialogDetail',
  components: {
    FormSelect
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
