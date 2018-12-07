<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="优惠活动详情" width="760px">
    <el-form :model="formData" size="small" label-width="80px" class="clearfix" disabled>
      <el-form-item label="活动标题">
        <el-input :value="formData.title" />
      </el-form-item>

      <el-form-item label="应用设备">
        <el-input :value="formData.type ? '手机端' : '电脑端'" />
      </el-form-item>

      <el-form-item label="开始时间">
        <el-input :value="formData.startTime | time" />
      </el-form-item>

      <el-form-item label="结束时间">
        <el-input :value="formData.endTime | time" />
      </el-form-item>

      <!-- 当选择手机端时才显示 -->
      <template v-if="formData.type">
        <el-form-item label="申请方式" class="custom-block">
          <el-input :value="formData.applyMode" type="textarea" rows="3" />
        </el-form-item>

        <el-form-item label="活动简介" class="custom-block">
          <el-input :value="formData.introduce" type="textarea" rows="3" />
        </el-form-item>

        <el-form-item label="活动细则" class="custom-block">
          <el-input :value="formData.activityBylaws" type="textarea" rows="3" />
        </el-form-item>

        <el-form-item label="活动条款" class="custom-block">
          <el-input :value="formData.activityClause" type="textarea" rows="3" />
        </el-form-item>
      </template>

      <el-form-item label="活动内容" class="custom-block">
        <el-input :value="formData.content" type="textarea" rows="3" />
      </el-form-item>

      <el-form-item label="封面图片">
        <div class="image-box">
          <img :src="formData.coverImg" alt="封面图片" class="activity-image">
        </div>
      </el-form-item>

      <el-form-item label="活动内容图片">
        <div class="image-box">
          <img :src="formData.activityImg" alt="活动内容图片" class="activity-image">
        </div>
      </el-form-item>

      <el-form-item label="启用状态">
        <el-input :value="formData.status ? '禁用' : '启用'" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'ActivityListDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}

.image-box {
  width: 148px;
  height: 148px;
  background-color: #eee;
}

.activity-image {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
</style>
