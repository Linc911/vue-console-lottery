<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="汇款账号">
        <FormInput
          @on-change="$set(formData, 'username', $event)"
          @keyup.native.enter="$emit('on-search', formData)"
          placeholder="汇款账号"
          :styles="{ width: '140px' }"
          ref="username"
        />
      </el-form-item>

      <el-form-item label="汇款时间">
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
import SearchDatePicker from '@/components/search/SearchDatePicker'

export default {
  name: 'DepositeFormSearch',
  components: {
    SearchFormLayout,
    FormInput,
    SearchDatePicker
  },
  mixins: [ searchInnerMixin ]
}
</script>
