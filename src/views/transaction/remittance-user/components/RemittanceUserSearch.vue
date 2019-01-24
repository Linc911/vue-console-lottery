<template lang="html">
  <el-form @submit.native.prevent :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="收款户名">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placeholder="收款户名"
          :styles="{ width: '140px' }"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import SearchFormLayout from '@/components/layout/SearchFormLayout'
import FormInput from '@/components/form/FormInput'

export default {
  name: 'PaymentLineSearch',
  components: {
    SearchFormLayout,
    FormInput
  },
  mixins: [ searchInnerMixin ]
}
</script>
