<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="会员账户">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placeholder="会员账户"
          :styles="{ width: '140px' }"
          ref="username"
        />
      </el-form-item>

      <el-form-item label="支付类型">
        <FormSelectAsync
          @on-change="handleSelectChange($event, 'payType')"
          httpAPIName="fetchTransactionPaymentType"
          :httpAPIParams="{ pageNo: 1, pageSize: 100 }"
          labelAttr="name"
          valueAttr="id"
          ref="payType"
        />
      </el-form-item>

      <el-form-item label="支付时间">
        <SearchDatePicker
          @on-change="handleTimeRangeChange($event, 'startTime', 'endTime')"
          ref="timeRange"
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
import SearchDatePicker from '@/components/search/SearchDatePicker'

export default {
  name: 'PaymentPortSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelectAsync,
    SearchDatePicker
  },
  mixins: [ searchInnerMixin ]
}
</script>
