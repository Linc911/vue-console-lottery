<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormDateRange
      @on-change="Object.assign(formData, { startTime: $event.startTime, endTime: $event.endTime })"
      ref="dateRange"
    />

    <el-form-item label="启用状态">
      <FormSelectArray
        @on-change="$set(formData, 'status', $event)"
        :options="[ '启用', '禁用', '发布' ]"
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

import FormDateRange from '@/components/form/FormDateRange'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'NoticeListSearch',
  components: {
    FormDateRange,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
