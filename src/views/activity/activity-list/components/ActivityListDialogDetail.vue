<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="优惠活动详情" width="760px">
    <el-form :model="formData" size="small" label-width="80px" class="clearfix" disabled>
      <el-form-item label="反馈标题">
        <el-input :value="formData.title" />
      </el-form-item>

      <el-form-item label="处理状态">
        <el-input :value="formData.status | statusPipe" />
      </el-form-item>

      <el-form-item label="反馈内容" class="custom-block">
        <el-input :value="formData.content" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="回复内容" class="custom-block">
        <el-input :value="formData.reply" />
      </el-form-item>

      <el-form-item label="用户ID">
        <el-input :value="formData.userId" />
      </el-form-item>

      <el-form-item label="用户账号">
        <el-input :value="formData.username" />
      </el-form-item>

      <el-form-item label="开始时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>

      <el-form-item label="结束时间">
        <el-input :value="formData.updateTime | time" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'FeedbackManagementDialogDetail',
  filters: {
    statusPipe (value) {
      switch (value) {
        case 0:
          return '待审核'
        case 1:
          return '已查看'
        case 2:
          return '待解决'
        case 3:
          return '已解决'
        case 4:
          return '不予解决'
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
