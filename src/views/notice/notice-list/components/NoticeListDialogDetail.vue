<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="公告详情" width="500px">
    <el-form :model="formData" size="small" label-width="80px" disabled>
      <el-form-item label="公告标题">
        <el-input :value="formData.title" />
      </el-form-item>

      <el-form-item label="公告内容">
        <el-input :value="formData.content" type="textarea" rows="5" />
      </el-form-item>

      <el-form-item label="开始时间">
        <el-input :value="formData.startTime | time" />
      </el-form-item>

      <el-form-item label="截止时间">
        <el-input :value="formData.endTime | time" />
      </el-form-item>

      <el-form-item label="启用状态">
        <el-radio-group :value="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
          <el-radio :label="2">发布</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="排序">
        <el-input :value="formData.sort" />
      </el-form-item>

      <el-form-item label="创建时间">
        <el-input :value="formData.createTime | time" />
      </el-form-item>

      <el-form-item label="更新时间">
        <el-input :value="formData.updateTime | time" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'NoticeListDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>
