<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="系统消息详情" width="500px">
    <el-form :model="formData" size="small" label-width="80px" disabled>
      <el-form-item label="消息作者">
        <el-input :value="formData.author" />
      </el-form-item>

      <el-form-item label="消息标题">
        <el-input :value="formData.title" />
      </el-form-item>

      <el-form-item label="消息对象">
        <el-input :value="formData.target" />
      </el-form-item>

      <el-form-item label="消息内容">
        <el-input :value="formData.content" type="textarea" rows="5" />
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
  name: 'SystemMessageDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>
