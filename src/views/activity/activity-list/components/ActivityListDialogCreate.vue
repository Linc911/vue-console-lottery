<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新优惠活动" width="760px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      size="small"
      class="clearfix"
      ref="formCreate"
    >
      <el-form-item prop="title" label="活动标题">
        <el-input v-model.trim="formData.title" placeholder="双11大优惠" />
      </el-form-item>

      <el-form-item prop="applyMode" label="申请方式">
        <el-input v-model.trim="formData.applyMode" placeholder="提交表格..." />
      </el-form-item>

      <el-form-item prop="startTime" label="时间期限" class="custom-block">
        <FormTimeRange
          @on-change="handleDateRangeChange"
          width="100%"
          ref="dateRange"
        />
      </el-form-item>

      <el-form-item prop="content" label="活动内容" class="custom-block">
        <el-input v-model.trim="formData.content" type="textarea" rows="3" placeholder="优惠活动内容" />
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

      <el-form-item prop="pc" label="是否电脑段">
        <el-radio-group v-model="formData.pc">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="phone" label="是否手机段">
        <el-radio-group v-model="formData.phone">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">禁用</el-radio>
          <el-radio :label="1">启用</el-radio>
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

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

import FormTimeRange from '@/components/form/FormTimeRange'
import FormUploadImage from '@/components/form/FormUploadImage'

export default {
  name: 'ActivityListDialogCreate',
  components: {
    FormTimeRange,
    FormUploadImage
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateActivityItem',
      formData: { pc: 1, phone: 1, status: 1, sort: 1 },
      rules: {
        title: FormValidation.validateRequired('活动标题'),
        // startTime: { required: true, message: '时间期限不能为空', trigger: 'blur' },
        sort: FormValidation.validateRequired('排序'),
        pc: FormValidation.validateSelect('是否电脑段'),
        phone: FormValidation.validateSelect('是否手机段'),
        status: FormValidation.validateSelect('启用状态')
      }
    }
  },
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      Object.assign(this.formData, { startTime, endTime })

      console.log(this.formData.startTime)
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
