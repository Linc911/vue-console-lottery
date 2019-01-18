<template lang="html">
  <el-form :model="formData" size="small" inline>
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
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'WithdrawTypeSearch',
  components: {
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>
