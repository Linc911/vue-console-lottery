<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form @submit.native.prevent :model="formData" size="small" label-width="80px" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @submit.prevent.stop
        @on-change="$set(formData, 'userName', $event)"
        label="用户账号"
        width="174px"
        ref="userName"
      />

      <!-- <FormSelect
        @on-change="$set(formData, 'gameConfigId', $event)"
        httpAPIName="fetchGameClasses"
        labelAttr="name"
        valueAttr="dictionaryId"
        prop="gameConfigId"
        label="返水账户"
        ref="gameConfigId"
      /> -->

      <FormDateRange @on-change="handleDateRangeChange" label="返水时间" ref="dateRange" />

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
import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'RemittanceShortcutSearch',
  components: {
    FormInput,
    FormSelect,
    FormDateRange
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.beginDate = startTime
      this.formData.endDate = endTime
    }
  }
}
</script>
