<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    <el-form-item prop="title" label="公告标题">
      <el-input v-model.trim="formData.title" placeholder="控制在30字以内" />
    </el-form-item>

    <el-form-item prop="content" label="公告内容">
      <el-input v-model.trim="formData.content" type="textarea" rows="5" placeholder="控制在500字以内" />
    </el-form-item>

    <el-form-item prop="startTime" label="时间期限">
      <FormTimeRange
        @on-change="handleTimeChange"
        :value="[ new Date(formData.startTime), new Date(formData.endTime) ]"
        width="100%"
        ref="dateRange"
      />
    </el-form-item>

    <el-form-item prop="status" label="启用状态">
      <el-radio-group v-model="formData.status">
        <el-radio :label="0">启用</el-radio>
        <el-radio :label="1">禁用</el-radio>
        <el-radio :label="2">发布</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="sort" label="排序">
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="整数" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormTimeRange from '@/components/form/FormTimeRange'

export default {
  name: 'NoticeListDialogForm',
  components: {
    FormTimeRange
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: {
        type: 0,
        title: '',
        content: '',
        startTime: '',
        status: 2,
        sort: 0
      },
      rules: {
        title: validators.validateRequired('公告标题'),
        content: validators.validateRequired('公告内容'),
        startTime: validators.validateRequired('时间期限'),
        status: validators.validateSelect('启用状态'),
        sort: validators.validateInteger('排序')
      }
    }
  },
  methods: {
    handleTimeChange (payload) {
      this.$set(this.formData, 'startTime', payload.startTime)
      this.$set(this.formData, 'endTime', payload.endTime)
    }
  }
}
</script>
