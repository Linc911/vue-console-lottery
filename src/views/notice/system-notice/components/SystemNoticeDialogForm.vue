<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    <el-form-item prop="title" label="公告标题">
      <el-input v-model.trim="formData.title" placeholder="控制在30字以内" />
    </el-form-item>

    <el-form-item prop="content" label="公告内容">
      <el-input v-model.trim="formData.content" type="textarea" rows="5" placeholder="控制在500字以内" />
    </el-form-item>

    <el-form-item prop="onlineTime" label="上线时间">
      <BaseDateTimePicker
        @on-change="$set(formData, 'onlineTime', $event)"
        width="100%"
        ref="dateRange"
      />
    </el-form-item>

    <el-form-item prop="pc" label="是否PC">
      <el-radio-group v-model="formData.pc">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="mp" label="是否MP">
      <el-radio-group v-model="formData.mp">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
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

    <el-form-item prop="remarks" label="备注">
      <el-input v-model.trim="formData.remarks" type="textarea" rows="3" placeholder="对公告内容补充" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import BaseDateTimePicker from '@/components/base/BaseDateTimePicker'

export default {
  name: 'SystemNoticeDialogForm',
  components: {
    BaseDateTimePicker
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: {
        type: 0,
        title: '',
        content: '',
        onlineTime: '',
        pc: 1,
        mp: 1,
        status: 0,
        sort: 0
      },
      rules: {
        title: validators.validateRequired('公告标题'),
        content: validators.validateRequired('公告内容'),
        onlineTime: validators.validateRequired('时间期限'),
        pc: validators.validateSelect('是否PC'),
        mp: validators.validateSelect('是否PM'),
        status: validators.validateSelect('启用状态'),
        sort: validators.validateInteger('排序')
      }
    }
  }
}
</script>
