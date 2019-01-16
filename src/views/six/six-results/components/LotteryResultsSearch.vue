<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="彩票期号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'drawno', $event)"
        placeholder="可模糊搜索"
        :styles="{ width: '150px' }"
        ref="drawno"
      />
    </el-form-item>

    <FormDateRange @on-change="handleDateRangeChange" label="开奖时间" ref="dateRange" />

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
  name: 'RemittanceShortcutSearch',
  components: {
    FormInput,
    FormDateRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.startDate = startTime
      this.formData.endDate = endTime
    }
  }
}
</script>
