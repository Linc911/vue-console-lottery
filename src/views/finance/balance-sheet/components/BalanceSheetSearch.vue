<template lang="html">
  <el-form :model="formData" size="small" label-width="80px" inline>
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

import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'DepositeOnlineSearch',
  components: {
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
