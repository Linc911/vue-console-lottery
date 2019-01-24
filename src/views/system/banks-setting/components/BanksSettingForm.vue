<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
  >
    <el-form-item prop="areaId" label="所属地区">
      <FormSelectAsync
        @on-change="$set(formData, 'areaId', $event)"
        :value="formData.areaId"
        httpAPIName="fetchSystemAreaList"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="areaId"
        ref="areaId"
      />
    </el-form-item>

    <el-form-item prop="parentId" label="上级银行">
      <FormSelectAsync
        @on-change="$set(formData, 'parentId', $event)"
        :value="formData.parentId"
        httpAPIName="fetchSystemBanksList"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="parentId"
        optionRoot
        ref="parentId"
      />
    </el-form-item>

    <el-form-item prop="sort" label="排序" >
      <el-input v-model.trim="formData.sort" placeholder="99" />
    </el-form-item>

    <el-form-item prop="remark" label="备注">
      <el-input v-model.trim="formData.wechat" placeholder="微信号" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelectAsync from '@/components/form/FormSelectAsync'

export default {
  name: 'BanksSettingForm',
  components: {
    FormSelectAsync
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { name: '', sort: 0 },
      rules: {
        name: validators.validateRequired('银行名称')
      }
    }
  }
}
</script>
