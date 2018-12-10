<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新系统消息" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="author" label="消息作者">
        <el-input v-model.trim="formData.author" placeholder="张三" />
      </el-form-item>

      <el-form-item prop="title" label="消息标题">
        <el-input v-model.trim="formData.title" placeholder="控制在30字以内" />
      </el-form-item>

      <FormSelect
        @on-change="$set(formData, 'target', $event)"
        httpAPIName="fetchPublicUserGroup"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 1000 } }"
        labelAttr="name"
        valueAttr="groupId"
        prop="target"
        label="消息对象"
        filterable
      />

      <el-form-item prop="content" label="消息内容">
        <el-input v-model.trim="formData.content" type="textarea" rows="5" placeholder="控制在500字以内" />
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

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'SystemMessageDialogCreate',
  components: {
    FormSelect
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateSystemMessageItem',
      formData: {},
      rules: {
        author: FormValidation.validateRequired('消息作者'),
        title: FormValidation.validateRequired('消息标题'),
        target: FormValidation.validateSelect('消息对象'),
        content: FormValidation.validateRequired('消息内容')
      }
    }
  }
}
</script>
