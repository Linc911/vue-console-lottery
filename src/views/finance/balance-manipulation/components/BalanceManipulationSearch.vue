<template lang="html">
  <el-form :model="formData" size="small" label-width="80px" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="用户账号"
      width="174px"
      ref="username"
    />

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

    <FormSelectStatic
      @on-change="$set(formData, 'type', $event)"
      :options="[
        { value: 0, label: '增加' },
        { value: 1, label: '减少' }
      ]"
      label="调整方向"
      width="100px"
      ref="type"
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
import FormSelect from '@/components/form/FormSelect'
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'BalanceManipulationSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>
