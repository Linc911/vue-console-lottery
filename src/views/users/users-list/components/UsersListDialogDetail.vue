<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员信息详情" width="760px">
    <el-form
      :model="formData"
      label-width="100px"
      size="small"
      disabled
      class="clearfix"
    >
      <el-form-item prop="id" label="账号ID">
        <el-input :value="formData.id" />
      </el-form-item>

      <el-form-item prop="username" label="会员账号">
        <el-input :value="formData.username" />
      </el-form-item>

      <el-form-item prop="nickname" label="会员昵称">
        <el-input :value="formData.nickname" />
      </el-form-item>

      <el-form-item prop="groupNames" label="会员分组">
        <el-input :value="formData.groupNames" />
      </el-form-item>

      <el-form-item prop="relation" label="邀请码">
        <el-input :value="formData.relation" />
      </el-form-item>

      <el-form-item prop="banlance" label="会员余额">
        <el-input :value="formData.banlance | RMB" />
      </el-form-item>

      <el-form-item prop="win" label="输赢">
        <el-input :value="formData.win | RMB" />
      </el-form-item>

      <el-form-item prop="agent" label="是否代理">
        <el-input :value="formData.agent ? '代理' : '未代理'" />
      </el-form-item>

      <el-form-item prop="rechange" label="充值状态">
        <el-input :value="formData.rechange ? '充值' : '未充值'" />
      </el-form-item>

      <el-form-item prop="control" label="监控状态">
        <el-input :value="formData.control ? '监控' : '未监控'" />
      </el-form-item>

      <el-form-item prop="enabled" label="账号状态">
        <el-input :value="formData.enabled ? '正常' : '异常'" />
      </el-form-item>

      <el-form-item prop="createTime" label="创建时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'UsersListDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
