<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <FormSelectGame
      @on-change="$set(formData, 'gameType', $event)"
      :value="formData.gameType"
      httpAPIName="fetchGamesMenu"
      :httpAPIParams="{ params: { type: 1 } }"
      labelAttr="name"
      valueAttr="id"
      prop="gameType"
      label="游戏类型"
      filterable
      ref="gameType"
    />

    <el-form-item prop="type" label="应用场景">
      <el-radio-group v-model="formData.type">
        <el-radio :label="0">电脑页面</el-radio>
        <el-radio :label="1">手机页面</el-radio>
        <el-radio :label="2">手机APP</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="explain" label="游戏说明">
      <quill-editor
        @blur="$set(formData, 'explain', content)"
        v-model="content"
        :options="editorOption"
        ref="myQuillEditor"
      />
    </el-form-item>
  </el-form>
</template>

<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import { quillEditor } from 'vue-quill-editor'
import FormSelectGame from '@/components/form/FormSelectGame'

export default {
  name: 'GroupSettingForm',
  components: {
    quillEditor,
    FormSelectGame
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      content: '',
      editorOption: {
        // some quill options
      },
      formData: { gameType: '', type: 0, explain: '' }, // 验证的form属性必须要初始化，否则在更新时无法验证
      rules: {
        gameType: validators.validateSelect('游戏类型'),
        type: validators.validateSelect('应用场景'),
        explain: validators.validateRequired('游戏说明')
      }
    }
  },
  watch: {
    // 变化时，更新数据
    data () {
      this.content = this.formData.explain
    }
  },
  mounted () {
    this.content = this.formData.explain
  }
}
</script>
