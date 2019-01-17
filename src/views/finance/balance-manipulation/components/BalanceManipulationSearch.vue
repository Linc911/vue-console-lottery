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

    <FormSelect
      @on-change="$set(formData, 'gameType', $event)"
      httpAPIName="fetchGamesList"
      labelAttr="name"
      valueAttr="id"
      prop="gameType"
      label="账户类型"
      filterable
      ref="gameType"
    />

    <FormSelect
      @on-change="$set(formData, 'loanType', $event)"
      httpAPIName="fetchFinanceLoanType"
      labelAttr="name"
      valueAttr="dictionaryId"
      prop="loanType"
      label="账户类型"
      filterable
      ref="loanType"
    />

    <el-form-item label="调整方向">
      <FormSelectArray
        @on-change="$set(formData, 'type', $event)"
        :options="[ '增加', '减少' ]"
        :styles="{ width: '100px' }"
        ref="type"
      />
    </el-form-item>

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'BalanceManipulationSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
