<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="手机首页图片详情" width="600px">
    <el-form :model="formData" size="small" label-width="80px" disabled>
      <el-form-item label="图片名称">
        <el-input :value="formData.name" />
      </el-form-item>

      <el-form-item label="跳转地址">
        <el-input :value="formData.url" />
      </el-form-item>

      <el-form-item label="图片地址">
        <div class="image-box">
          <img :src="formData.coverUrl" alt="封面图片" class="activity-image">
        </div>
      </el-form-item>

      <el-form-item label="启用状态">
        <el-radio-group :value="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="排列顺序">
        <el-input :value="formData.sort" />
      </el-form-item>

      <el-form-item label="备注">
        <el-input :value="formData.remark" type="textarea" rows="3" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

export default {
  name: 'ImagePhoneDialogDetail',
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
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
