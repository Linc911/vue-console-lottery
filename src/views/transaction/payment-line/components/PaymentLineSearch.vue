<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <el-form-item label="路线名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="路线名称"
          :styles="{ width: '140px' }"
        />
      </el-form-item>

      <FormSelect
        @on-change="$set(formData, 'interfaceTypeId', $event)"
        httpAPIName="fetchTransactionPaymentPortType"
        :httpAPIParams="{ params: { type: 1 } }"
        labelAttr="name"
        valueAttr="dictionaryId"
        prop="interfaceTypeId"
        label="接口类型"
        ref="interfaceTypeId"
      />

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
import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'PaymentLineSearch',
  components: {
    FormInput,
    FormSelect
  },
  mixins: [ searchInnerMixin ]
}
</script>
