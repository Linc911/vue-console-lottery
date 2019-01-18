<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormDateRange
      @on-change="handleDateRangeChange"
      type="datetimerange"
      label="时间区域"
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
  name: 'StatisticsUsersSearch',
  components: {
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
