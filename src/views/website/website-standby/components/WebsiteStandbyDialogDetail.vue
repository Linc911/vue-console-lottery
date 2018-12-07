<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="备用网站详情" width="760px">
    <el-form :model="formData" size="small" label-width="90px" class="clearfix" disabled>
      <el-form-item label="启用状态">
        <el-input :value="formData.status | statusTrible" />
      </el-form-item>

      <el-form-item label="创建时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>

      <el-form-item label="显示域名">
        <el-input :value="formData.showDomain" />
      </el-form-item>

      <el-form-item label="跳转域名">
        <el-input :value="formData.forwardDomain" />
      </el-form-item>

      <el-form-item label="备用网站ID">
        <el-input :value="formData.websiteId" />
      </el-form-item>

      <el-form-item label="创建人ID">
        <el-input :value="formData.creator" />
      </el-form-item>

      <el-form-item label="创建人账号">
        <el-input :value="formData.creatorUsername" />
      </el-form-item>

      <el-form-item label="创建人昵称">
        <el-input :value="formData.creatorNickname" />
      </el-form-item>

      <el-form-item label="更新时间">
        <el-input :value="formData.updateTime | time" />
      </el-form-item>

      <el-form-item label="更新人ID">
        <el-input :value="formData.updateId" />
      </el-form-item>

      <el-form-item label="更新人账号">
        <el-input :value="formData.updateUsername" />
      </el-form-item>

      <el-form-item label="更新人昵称">
        <el-input :value="formData.updateNickname" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'WebsiteStandbyDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
