<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新系统公告" width="500px">
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

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormValidation from '@/config/form'

import BaseDateTimePicker from '@/components/base/BaseDateTimePicker'

export default {
  name: 'SystemNoticeDialogCreate',
  components: {
    BaseDateTimePicker
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateSystemNoticeItem',
      formData: { pc: 1, mp: 1, sort: 0, status: 0 },
      rules: {
        title: FormValidation.validateRequired('公告标题'),
        content: FormValidation.validateRequired('公告内容'),
        onlineTime: FormValidation.validateRequired('时间期限'),
        pc: FormValidation.validateSelect('是否PC'),
        mp: FormValidation.validateSelect('是否PM'),
        status: FormValidation.validateSelect('启用状态'),
        sort: FormValidation.validateInteger('排序')
      }
    }
  }
}
</script>
