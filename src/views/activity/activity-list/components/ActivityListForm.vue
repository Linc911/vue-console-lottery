<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="100px"
    size="small"
    ref="form"
  >
    <el-form-item prop="title" label="活动标题">
      <el-input v-model.trim="formData.title" placeholder="双11大优惠" />
    </el-form-item>

    <el-form-item prop="type" label="应用设备">
      <el-radio-group v-model="formData.type">
        <el-radio :label="0">电脑端</el-radio>
        <el-radio :label="1">手机端</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 当选择手机端时才显示 -->
    <template v-if="formData.type">
      <el-form-item prop="applyMode" label="申请方式" class="custom-block">
        <el-input v-model.trim="formData.applyMode" placeholder="提交表格..." />
      </el-form-item>

      <el-form-item prop="introduce" label="活动简介" class="custom-block">
        <el-input v-model.trim="formData.introduce" type="textarea" rows="3" placeholder="双11大优惠-优惠活动简介" />
      </el-form-item>

      <el-form-item prop="activityBylaws" label="活动细则" class="custom-block">
        <el-input v-model.trim="formData.activityBylaws" type="textarea" rows="3" placeholder="双11大优惠-活动细则" />
      </el-form-item>

      <el-form-item prop="activityClause" label="活动条款" class="custom-block">
        <el-input v-model.trim="formData.activityClause" type="textarea" rows="3" placeholder="双11大优惠-活动条款" />
      </el-form-item>
    </template>

    <el-form-item prop="startTime" label="时间期限" class="custom-block">
      <FormTimeRange
        @on-change="Object.assign(this.formData, { startTime: $event.startTime, endTime: $event.endTime })"
        :value="[ new Date(formData.startTime), new Date(formData.endTime) ]"
        width="100%"
        ref="dateRange"
      />
    </el-form-item>

    <el-form-item prop="content" label="活动内容" class="custom-block">
      <el-input v-model.trim="formData.content" type="textarea" rows="3" placeholder="优惠活动内容" />
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

    <el-form-item prop="coverImg" label="封面图片" class="custom-block">
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
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormUploadImage from '@/components/form/FormUploadImage'
import FormTimeRange from '@/components/form/FormTimeRange'

export default {
  name: 'ActivityListForm',
  components: {
    FormUploadImage,
    FormTimeRange
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { title: '', type: 0, pc: '', phone: '', status: 0, sort: 1 },
      rules: {
        title: validators.validateRequired('活动标题'),
        sort: validators.validateInteger('排序'),
        pc: validators.validateSelect('是否电脑段'),
        phone: validators.validateSelect('是否手机段'),
        status: validators.validateSelect('启用状态')
      }
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
