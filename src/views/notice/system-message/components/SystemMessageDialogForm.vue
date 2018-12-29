<template>
  <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="form">
    <el-form-item prop="author" label="消息作者">
      <el-input v-model.trim="formData.author" placeholder="张三" />
    </el-form-item>

    <el-form-item prop="title" label="消息标题">
      <el-input v-model.trim="formData.title" placeholder="控制在30字以内" />
    </el-form-item>

    <FormSelect
      @on-change="$set(formData, 'target', $event)"
      :value="formData.target"
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
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'SystemMessageDialogForm',
  components: {
    FormSelect
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { author: '', title: '', target: '', content: '' },
      rules: {
        author: validators.validateRequired('消息作者'),
        title: validators.validateRequired('消息标题'),
        target: validators.validateSelect('消息对象'),
        content: validators.validateRequired('消息内容')
      }
    }
  }
}
</script>
