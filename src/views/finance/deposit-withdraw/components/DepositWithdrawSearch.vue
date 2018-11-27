<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="会员账户"
      width="174px"
      ref="username"
    />

    <FormSelect
      @on-change="$set(formData, 'payType', $event)"
      httpAPIName="fetchTransactionPaymentType"
      :httpAPIParams="{ pageNo: 1, pageSize: 100 }"
      labelAttr="name"
      valueAttr="id"
      label="支付类型"
      filterable
      ref="payType"
    />

    <FormDateRange @on-change="handleDateRangeChange" label="支付时间" ref="dateRange" />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'PaymentPortSearch',
  components: {
    FormInput,
    FormSelect,
    FormDateRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.startTime = startTime
      this.formData.endTime = endTime
    }
  }
}
</script>
