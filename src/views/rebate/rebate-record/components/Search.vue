<template lang="html">
  <el-form @submit.native.prevent :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="用户账号">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'userName', $event)"
          placeholder="用户账号"
          :styles="{ width: '140px' }"
          ref="userName"
        />
      </el-form-item>

      <el-form-item label="返水时间">
        <SearchDatePicker
          @on-change="handleTimeRangeChange($event, 'beginDate', 'endDate')"
          ref="timeRange"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import SearchDatePicker from '@/components/search/SearchDatePicker'

export default {
  name: 'RemittanceShortcutSearch',
  components: {
    FormInput,
    SearchDatePicker
  },
  mixins: [ searchInnerMixin ]
}
</script>
