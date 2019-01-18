<template lang="html">
  <el-form :model="formData" size="small" label-width="80px" inline>
    <el-form-item label="会员账号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placehoder="会员账号"
        :style="{ width: '150px' }"
        ref="username"
      />
    </el-form-item>

    <FormDateRange
      @on-change="handleDateRangeChangeDeposit"
      label="存款时间"
      ref="dateRange"
    />

    <FormDateRange
      @on-change="handleDateRangeChangeWithdraw"
      label="取款时间"
      ref="dateRange"
    />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'BalanceSheetSearch',
  components: {
    FormInput,
    FormDateRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChangeDeposit ({ startTime, endTime }) {
      this.formData.startInTime = startTime
      this.formData.endInTime = endTime
    },
    handleDateRangeChangeWithdraw ({ startTime, endTime }) {
      this.formData.startOutTime = startTime
      this.formData.endOutTime = endTime
    }
  }
}
</script>
