<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'name', $event)"
      label="类型名称"
      width="174px"
      ref="name"
    />

    <FormSelect
      @on-change="$set(formData, 'dictionaryId', $event)"
      httpAPIName="fetchWithdrawAccountTypeList"
      :httpAPIParams="{ params: { type: 5 } }"
      labelAttr="name"
      valueAttr="dictionaryId"
      prop="dictionaryId"
      label="接口类型名称"
      ref="dictionaryId"
    />

    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'merchantId', $event)"
      label="商户ID"
      width="174px"
      ref="merchantId"
    />

    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'operator', $event)"
      label="操作人"
      width="174px"
      ref="operator"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '启用' },
        { value: 1, label: '禁用' }
      ]"
      label="启用状态"
      width="100px"
      ref="status"
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
  name: 'WithdrawAccountSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>
