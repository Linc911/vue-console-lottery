<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="单个用户信息详情" width="760px">
      <el-form :model="formData" label-width="80px" size="small" class="clearfix" disabled>
        <el-form-item label="创建时间">
          <el-input :value="formData.createTime | time" />
        </el-form-item>

        <el-form-item label="修改时间">
          <el-input :value="formData.updateTime | time" />
        </el-form-item>

        <el-form-item label="用户ID">
          <el-input :value="formData.id" />
        </el-form-item>

        <el-form-item label="用户名称">
          <el-input :value="formData.username" />
        </el-form-item>

        <el-form-item label="用户昵称">
          <el-input :value="formData.nickname" />
        </el-form-item>

        <el-form-item label="真实姓名">
          <el-input :value="formData.realname" />
        </el-form-item>

        <el-form-item label="用户类型">
          <el-input :value="formData.type | userType" />
        </el-form-item>

        <el-form-item label="用户性别">
          <el-input :value="formData.sex ? '男' : '女'" />
        </el-form-item>

        <el-form-item label="手机号码">
          <el-input :value="formData.phone | phoneFormat" />
        </el-form-item>

        <el-form-item label="登陆密码">
          <el-input :value="formData.password" />
        </el-form-item>

        <el-form-item label="取款密码">
          <el-input :value="formData.withdrawal" />
        </el-form-item>

        <el-form-item label="QQ号码">
          <el-input :value="formData.qq" />
        </el-form-item>

        <el-form-item label="微信号">
          <el-input :value="formData.wechat" />
        </el-form-item>

        <el-form-item label="电子邮箱">
          <el-input :value="formData.email" />
        </el-form-item>

        <el-form-item label="监控状态">
          <el-input :value="formData.control ? '启用' : '禁用'" />
        </el-form-item>

        <el-form-item label="启用状态">
          <el-input :value="formData.enabled ? '启用' : '禁用'" />
        </el-form-item>

        <el-form-item label="账户余额">
          <el-input :value="formData.banlance | RMB" />
        </el-form-item>

        <el-form-item label="账户输赢">
          <el-input :value="formData.win | RMB" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'UsersSettingDialogDetail',
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
