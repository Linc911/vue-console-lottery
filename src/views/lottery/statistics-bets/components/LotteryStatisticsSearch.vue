<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormDatePicker @on-change="$set(formData, 'dateTime', $event)" />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormDatePicker from '@/components/form/FormDatePicker'

export default {
  name: 'LotteryStatisticsSearch',
  components: {
    FormDatePicker
  },
  mixins: [ searchInnerMixin ]
}
</script>
