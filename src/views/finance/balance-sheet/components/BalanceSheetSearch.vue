<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="会员账号">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placehoder="会员账号"
          :style="{ width: '150px' }"
          ref="username"
        />
      </el-form-item>

      <el-form-item label="存款时间">
        <SearchDatePicker
          @on-change="handleTimeRangeChange($event, 'startInTime', 'endInTime')"
          ref="depositRange"
        />
      </el-form-item>

      <el-form-item label="取款时间">
        <SearchDatePicker
          @on-change="handleTimeRangeChange($event, 'startOutTime', 'endOutTime')"
          ref="withdrawRange"
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
  name: 'BalanceSheetSearch',
  components: {
    SearchFormLayout,
    FormInput,
    SearchDatePicker
  },
  mixins: [ searchInnerMixin ]
}
</script>
