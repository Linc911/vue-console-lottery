<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <el-form-item label="接口名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="接口名称"
          :styles="{ width: '140px' }"
          ref="name"
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

      <FormSelect
        @on-change="$set(formData, 'payTypeId', $event)"
        httpAPIName="fetchTransactionPaymentType"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="id"
        prop="payTypeId"
        label="支付类型"
        ref="payTypeId"
      />

      <el-form-item label="启用状态">
        <FormSelectStatic
          @on-change="$set(formData, 'status', $event)"
          :options="[ '启用', '禁用' ]"
          :styles="{ width: '100px' }"
          ref="status"
        />
      </el-form-item>

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
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'PaymentPortSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>
