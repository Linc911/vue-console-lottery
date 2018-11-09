<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员信息详情" width="760px">
    <el-form :model="user" label-width="90px" size="small" class="clearfix">
      <el-form-item label="用户ID">
        <el-input :value="user.id" disabled />
      </el-form-item>

      <el-form-item label="会员账号">
        <el-input :value="user.username" disabled />
      </el-form-item>

      <el-form-item label="会员昵称">
        <el-input :value="user.nickname" disabled />
      </el-form-item>

      <el-form-item label="注册时间">
        <el-input :value="user.createTime | time" disabled />
      </el-form-item>

      <el-form-item label="是否代理">
        <el-input :value="user.agent ? '代理' : '不是代理'" disabled />
      </el-form-item>

      <el-form-item label="邀请码">
        <el-input disabled />
      </el-form-item>

      <el-form-item label="分组ID">
        <el-input :value="user.groupIds" disabled />
      </el-form-item>

      <el-form-item label="分组名称">
        <el-input :value="user.groupNames" disabled />
      </el-form-item>

      <el-form-item label="会员余额">
        <el-input :value="user.banlance | RMB" disabled />
      </el-form-item>

      <el-form-item label="会员输赢">
        <el-input :value="user.win" disabled />
      </el-form-item>

      <el-form-item label="充值状态">
        <el-input :value="user.recharge ? '充值' : '没有充值'" disabled />
      </el-form-item>

      <el-form-item label="监控状态">
        <el-input :value="user.control ? '监控' : '没有监控'" disabled />
      </el-form-item>

      <el-form-item label="账号状态">
        <el-input :value="user.enable ? '正常' : '异常'" disabled />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogUserDetails',
  props: {
    user: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
