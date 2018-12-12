<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="出款商户类型详情" width="450px">
    <el-form :model="formData" size="small" label-width="80px" disabled>
      <el-form-item label="类型名称">
        <el-input :value="formData.name" />
      </el-form-item>

      <el-form-item label="启用状态">
        <el-radio-group :value="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="排序">
        <el-input :value="formData.sort" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input :value="formData.remark" type="textarea" rows="3" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'WithdrawAccountDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>
