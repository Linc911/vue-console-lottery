<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="类型名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="类型名称"
          :styles="{ width: '140px' }"
          ref="name"
        />
      </el-form-item>

      <el-form-item label="接口类型名称">
        <FormSelectAsync
          @on-change="$set(formData, 'dictionaryId', $event)"
          httpAPIName="fetchWithdrawAccountTypeList"
          :httpAPIParams="{ params: { type: 5 } }"
          labelAttr="name"
          valueAttr="dictionaryId"
          ref="dictionaryId"
        />
      </el-form-item>

      <el-form-item label="商户ID">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'merchantId', $event)"
          placeholder="商户ID"
          :styles="{ width: '100px' }"
          ref="merchantId"
        />
      </el-form-item>

      <el-form-item label="操作人">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'operator', $event)"
          placeholder="操作人"
          :styles="{ width: '120px' }"
          ref="operator"
        />
      </el-form-item>

      <el-form-item label="启用状态">
        <FormSelectArray
          @on-change="$set(formData, 'status', $event)"
          :options="[ '启用', '禁用']"
          :styles="{ width: '100px' }"
          ref="status"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import SearchFormLayout from '@/components/layout/SearchFormLayout'
import FormInput from '@/components/form/FormInput'
import FormSelectAsync from '@/components/form/FormSelectAsync'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'WithdrawAccountSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelectAsync,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
