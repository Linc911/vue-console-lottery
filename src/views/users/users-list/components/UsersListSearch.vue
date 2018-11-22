<template lang="html">
  <!-- 条件筛选 -->
  <div>
    <el-form :model="formData" size="small" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        label="会员账户"
        width="174px"
        ref="username"
      />

      <FormDateRange @on-change="handleDateRangeChange" label="注册时间" ref="dateRange" />

      <FormSelect
        @on-change="$set(formData, 'groupId', $event)"
        httpAPIName="fetchUserGroups"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="groupId"
        label="会员分组"
        filterable
        ref="groupId"
      />

      <FormNumberRange
        @on-change="handleNumberRangeChange"
        label="会员余额"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="numberRange"
      />

      <FormNumberRange
        @on-change="handleWinRangeChange"
        label="输赢金额"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="winRange"
      />

      <FormSelectStatic
        @on-change="$set(formData, 'control', $event)"
        :options="[
          { value: 0, label: '禁用' },
          { value: 1, label: '启用' },
        ]"
        label="监控状态"
        width="100px"
        ref="control"
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
import FormDateRange from '@/components/form/FormDateRange'
import FormNumberRange from '@/components/form/FormNumberRange'
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'UsersListSearch',
  components: {
    FormInput,
    FormSelect,
    FormDateRange,
    FormNumberRange,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
    },
    handleNumberRangeChange ({ start, end }) {
      this.formData.minBanlance = start
      this.formData.maxBanlance = end
    },
    handleWinRangeChange ({ start, end }) {
      this.formData.minWin = start
      this.formData.maxWin = end
    }
  }
}
</script>
