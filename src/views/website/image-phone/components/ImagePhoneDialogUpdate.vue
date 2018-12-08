<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改手机首页图片" width="600px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="name" label="图片名称">
        <el-input v-model.trim="formData.name" placeholder="双11大优惠" clearable />
      </el-form-item>

      <el-form-item prop="url" label="跳转地址">
        <el-input v-model.trim="formData.url" placeholder="http://www.baidu.com" clearable />
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
      </el-form-item>

      <el-form-item prop="remark" label="活动内容">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" clearable placeholder="图片用双11当前活动促销..." />
      </el-form-item>

      <!-- <el-form-item prop="coverImg" label="封面图片" class="custom-block">
        <FormUploadImage
          @on-uploaded="$set(formData, 'coverImg', $event.response)"
          @on-removed="$set(formData, 'coverImg', $event)"
        />
      </el-form-item>

      <el-form-item prop="activityImg" label="活动内容图片" class="custom-block">
        <FormUploadImage
          @on-uploaded="$set(formData, 'activityImg', $event.response)"
          @on-removed="$set(formData, 'activityImg', $event)"
        />
      </el-form-item> -->
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormValidation from '@/config/form'

export default {
  name: 'ImagePhoneDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateWebsiteImagePhoneItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', url: '', status: 0, sort: 0 },
      rules: {
        name: FormValidation.validateRequired('图片名称'),
        status: FormValidation.validateSelect('启用状态'),
        sort: FormValidation.validateInteger('排序'),
        coverUrl: FormValidation.validateRequired('图片地址'),
        url: FormValidation.validateRequired('跳转地址')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { coverConfigId: this.data.coverConfigId }
    }
  }
}
</script>
