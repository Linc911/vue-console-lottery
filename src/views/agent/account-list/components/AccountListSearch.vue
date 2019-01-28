<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="代理账户">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placeholder="代理账户"
          :styles="{ width: '140px' }"
          ref="username"
        />
      </el-form-item>

      <el-form-item label="时间查询">
        <SearchDatePicker
          @on-change="handleTimeRangeChange($event, 'startTime', 'endTime')"
          ref="loginRange"
        />
      </el-form-item>

      <el-form-item label="会员余额">
        <SearchNumberRange
          @on-change="handleNumberRangeChange($event, 'minWin', 'maxWin')"
          @on-enter="$emit('on-search', formData)"
          ref="numberRange"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import SearchDatePicker from '@/components/search/SearchDatePicker'
import SearchNumberRange from '@/components/search/SearchNumberRange'

export default {
  name: 'AccountListSearch',
  components: {
    FormInput,
    SearchDatePicker,
    SearchNumberRange
  },
  mixins: [ searchInnerMixin ]
}
</script>
