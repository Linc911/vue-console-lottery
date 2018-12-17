<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="出款商户配置详情" width="760px">
    <el-form :model="formData" label-width="100px" size="small" disabled class="clearfix">
      <el-form-item label="接口名称">
        <el-input :value="formData.name" />
      </el-form-item>

      <el-form-item label="接口类型名称">
        <el-input :value="formData.dictionaryName" />
      </el-form-item>

      <el-form-item label="排列顺序">
        <el-input :value="formData.sort" />
      </el-form-item>

      <el-form-item label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="商户ID">
        <el-input :value="formData.merchantId" />
      </el-form-item>

      <el-form-item label="操作人">
        <el-input :value="formData.operator" />
      </el-form-item>

      <el-form-item label="地址" class="custom-block">
        <el-input :value="formData.address" />
      </el-form-item>

      <el-form-item label="秘钥(公钥)" class="custom-block">
        <el-input :value="formData.publicKey" placeholder="秘钥(公钥)" />
      </el-form-item>

      <el-form-item label="秘钥(私钥)" class="custom-block">
        <el-input :value="formData.privateKey" placeholder="秘钥(私钥)" />
      </el-form-item>

      <el-form-item label="IP白名单" class="custom-block">
        <el-input :value="formData.whiteList" placeholder="ip白名单，多个用逗号分隔" />
      </el-form-item>

      <el-form-item label="备注" class="custom-block">
        <el-input :value="formData.remark" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="创建时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'WithdrawTypeDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
