<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <el-form-item prop="name" label="地区名称">
      <el-input v-model.trim="formData.name" placeholder="中国" />
    </el-form-item>

    <el-form-item prop="parentId" label="所属地区">
      <FormSelectAsync
        @on-change="$set(formData, 'parentId', $event)"
        :value="formData.parentId"
        httpAPIName="fetchSystemAreaList"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="parentId"
        optionRoot
        ref="parentId"
      />
    </el-form-item>

    <el-form-item prop="sort" label="排序" >
      <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="99" />
    </el-form-item>

    <el-form-item prop="remark" label="备注">
      <el-input v-model.trim="formData.remark" placeholder="中国_广东" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelectAsync from '@/components/form/FormSelectAsync'

export default {
  name: 'AreaSettingForm',
  components: {
    FormSelectAsync
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', sort: '' },
      rules: {
        name: validators.validateRequired('地区名称'),
        sort: validators.validateInteger('排序')
      }
    }
  }
}
</script>
