<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="接口名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="接口名称"
          :styles="{ width: '140px' }"
          ref="name"
        />
      </el-form-item>

      <el-form-item label="接口类型">
        <FormSelectAsync
          @on-change="$set(formData, 'interfaceTypeId', $event)"
          httpAPIName="fetchTransactionPaymentPortType"
          :httpAPIParams="{ params: { type: 1 } }"
          labelAttr="name"
          valueAttr="dictionaryId"
          ref="interfaceTypeId"
        />
      </el-form-item>

      <el-form-item label="支付类型">
        <FormSelectAsync
          @on-change="$set(formData, 'payTypeId', $event)"
          httpAPIName="fetchTransactionPaymentType"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="id"
          ref="payTypeId"
        />
      </el-form-item>

      <el-form-item label="启用状态">
        <FormSelectArray
          @on-change="$set(formData, 'status', $event)"
          :options="[ '启用', '禁用' ]"
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
  name: 'PaymentPortSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelectAsync,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
