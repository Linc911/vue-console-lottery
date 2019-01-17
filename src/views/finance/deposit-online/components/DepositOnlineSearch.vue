<template lang="html">
  <el-form :model="formData" size="small" label-width="80px" inline>
    <el-form-item label="用户账号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="用户账号"
        :styles="{ width: '140px' }"
        ref="username"
      />
    </el-form-item>

    <FormDateRange
      @on-change="handleDateRangeChange"
      label="支付时间"
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
  name: 'DepositeOnlineSearch',
  components: {
    FormInput,
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
