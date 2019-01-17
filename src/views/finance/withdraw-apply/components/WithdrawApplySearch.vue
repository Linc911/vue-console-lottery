<template lang="html">
  <el-form :model="formData" size="small" label-width="80px" inline>
    <el-form-item label="用户账号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="用户账号"
        :styles="{ width: '120px' }"
        ref="username"
      />
    </el-form-item>

    <el-form-item label="申请单号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'orderId', $event)"
        placeholder="申请单号"
        :styles="{ width: '160px' }"
        ref="orderId"
      />
    </el-form-item>

    <FormNumberRange
      @on-change="handleNumberRangeChange"
      label="提款金额"
      startPlaceholder="最小金额"
      endPlaceholder="最大金额"
      ref="numberRange"
    />

    <FormDateRange @on-change="handleDateRangeChange" ref="dateRange" />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormNumberRange from '@/components/form/FormNumberRange'
import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'WithdrawApplySearch',
  components: {
    FormInput,
    FormNumberRange,
    FormDateRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleNumberRangeChange ({ start, end }) {
      this.formData.minMoney = start
      this.formData.maxMoney = end
    },
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.startTime = startTime
      this.formData.endTime = endTime
    }
  }
}
</script>
