<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @submit.prevent.stop
        @on-change="$set(formData, 'username', $event)"
        label="代理账户"
        width="174px"
        ref="username"
      />

      <FormDateRange @on-change="handleDateRangeChange" ref="dateRange" />

      <FormNumberRange
        @on-change="handleWinRangeChange"
        label="会员余额"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="numberRange"
      />

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormDateRange from '@/components/form/FormDateRange'
import FormNumberRange from '@/components/form/FormNumberRange'

export default {
  name: 'RebateSettingSearch',
  components: {
    FormInput,
    FormDateRange,
    FormNumberRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.startTime = startTime
      this.formData.endTime = endTime
    },
    handleWinRangeChange ({ start, end }) {
      this.formData.minWin = start
      this.formData.maxWin = end
    }
  }
}
</script>
