<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="启用状态">
        <FormSelectArray
          @on-change="handleSelectChange($event, 'status')"
          :options="[ '启用', '禁用' ]"
          :styles="{ width: '100px' }"
          ref="status"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import SearchFormLayout from '@/components/layout/SearchFormLayout'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'WithdrawTypeSearch',
  components: {
    SearchFormLayout,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
