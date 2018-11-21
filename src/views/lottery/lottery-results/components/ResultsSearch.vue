<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @submit.prevent.stop
        @on-change="$set(formData, 'drawno', $event)"
        label="彩票期号"
        width="174px"
        ref="drawno"
      />

      <FormSelectStatic
        @on-change="$set(formData, 'status', $event)"
        :options="[
          { value: 0, label: '未开奖' },
          { value: 1, label: '未结算' },
          { value: 2, label: '已结算' }
        ]"
        label="结算状态"
        width="100px"
        ref="status"
      />

      <FormDateRange @on-change="handleDateRangeChange" label="开奖时间" ref="dateRange" />

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
import FormSelectStatic from '@/components/form/FormSelectStatic'
import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'RemittanceShortcutSearch',
  components: {
    FormInput,
    FormSelectStatic,
    FormDateRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.beginDate = startTime
      this.formData.endDate = endTime
    }
  }
}
</script>
