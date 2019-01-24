<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
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
          placeholder="不支持模糊搜索"
          :styles="{ width: '160px' }"
          ref="orderId"
        />
      </el-form-item>

      <el-form-item label="提款金额">
        <SearchNumberRange
          @on-change="handleNumberRangeChange($event, 'minMoney', 'maxMoney')"
          @on-enter="$emit('on-search', formData)"
          ref="numberRange"
        />
      </el-form-item>

      <el-form-item label="申请时间">
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
import SearchNumberRange from '@/components/search/SearchNumberRange'
import SearchDatePicker from '@/components/search/SearchDatePicker'

export default {
  name: 'WithdrawApplySearch',
  components: {
    SearchFormLayout,
    FormInput,
    SearchNumberRange,
    SearchDatePicker
  },
  mixins: [ searchInnerMixin ]
}
</script>
