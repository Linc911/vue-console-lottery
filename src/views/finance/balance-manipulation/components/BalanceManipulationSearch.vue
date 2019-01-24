<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="用户账号">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placeholder="用户账号"
          :styles="{ width: '140px' }"
          ref="username"
        />
      </el-form-item>

      <el-form-item label="账户类型">
        <FormSelectAsync
          @on-change="handleSelectChange($event, 'gameType')"
          httpAPIName="fetchGamesList"
          labelAttr="name"
          valueAttr="id"
          ref="gameType"
        />
      </el-form-item>

      <el-form-item label="账户类型">
        <FormSelectAsync
          @on-change="handleSelectChange($event, 'loanType')"
          httpAPIName="fetchFinanceLoanType"
          labelAttr="name"
          valueAttr="dictionaryId"
          ref="loanType"
        />
      </el-form-item>

      <el-form-item label="调整方向">
        <FormSelectArray
          @on-change="handleSelectChange($event, 'type')"
          :options="[ '增加', '减少' ]"
          :styles="{ width: '100px' }"
          ref="type"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import SearchFormLayout from '@/components/layout/SearchFormLayout'
import FormInput from '@/components/form/FormInput'
import FormSelectAsync from '@/components/form/FormSelectAsync'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'BalanceManipulationSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelectAsync,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
