<template lang="html">
  <!-- 条件筛选 -->
  <el-form :model="formData" size="small" inline>
    <el-form-item label="会员账户">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placehoder="会员账户"
        :style="{ width: '150px' }"
        ref="username"
      />
    </el-form-item>

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

    <el-form-item label="监控状态">
      <FormSelectStatic
        @on-change="$set(formData, 'control', $event)"
        :options="[
          { value: 0, label: '禁用' },
          { value: 1, label: '启用' },
        ]"
        :styles="{ width: '90px' }"
        ref="control"
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
