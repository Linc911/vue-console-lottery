<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="返水计划详情" width="768px">
    <el-form :model="formData" label-width="110px" size="small" class="clearfix" disabled>
      <el-form-item label="返水计划ID">
        <el-input :value="formData.id" />
      </el-form-item>

      <el-form-item label="返水计划名称">
        <el-input :value="formData.name" />
      </el-form-item>

      <el-form-item label="投注注数下限">
        <el-input :value="formData.lowerLimit" />
      </el-form-item>

      <el-form-item label="投注注数上限">
        <el-input :value="formData.upperLimit" />
      </el-form-item>

      <el-form-item label="游戏类型名称">
        <el-input :value="formData.gameConfigName" />
      </el-form-item>

      <el-form-item label="返佣比例">
        <el-input :value="formData.ratio | percent" />
      </el-form-item>

      <el-form-item label="会员分组" class="custom-block">
        <el-input :value="formData.sysGroupNames | separator('  ')" />
      </el-form-item>

      <el-form-item label="计划开始时间">
        <el-input :value="formData.startTime | time" />
      </el-form-item>

      <el-form-item label="计划结束时间">
        <el-input :value="formData.endTime | time" />
      </el-form-item>

      <el-form-item label="创建人ID">
        <el-input :value="formData.createId" />
      </el-form-item>

      <el-form-item label="创建时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>

      <el-form-item label="更新人ID">
        <el-input :value="formData.updateId" />
      </el-form-item>

      <el-form-item label="更新时间">
        <el-input :value="formData.updateTime | time" />
      </el-form-item>

      <el-form-item label="启用状态">
        <el-input :value="formData.status ? '禁用' : '启用'" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'RebatePlanDialogDetail',
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
