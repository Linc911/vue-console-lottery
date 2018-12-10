<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新公告" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="title" label="公告标题">
        <el-input v-model.trim="formData.title" placeholder="控制在30字以内" />
      </el-form-item>

      <el-form-item prop="content" label="公告内容">
        <el-input v-model.trim="formData.content" type="textarea" rows="5" placeholder="控制在500字以内" />
      </el-form-item>

      <el-form-item prop="startTime" label="时间期限">
        <FormTimeRange
          @on-change="handleTimeChange"
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

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

import FormTimeRange from '@/components/form/FormTimeRange'

export default {
  name: 'NoticeListDialogCreate',
  components: {
    FormTimeRange
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateNoticeItem',
      formData: { status: 2, sort: 1, type: 0 },
      rules: {
        title: FormValidation.validateRequired('公告标题'),
        content: FormValidation.validateRequired('公告内容'),
        startTime: FormValidation.validateRequired('时间期限'),
        status: FormValidation.validateSelect('启用状态'),
        sort: FormValidation.validateInteger('排序')
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
