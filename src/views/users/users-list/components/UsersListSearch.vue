<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="reset()">
      <el-form-item label="会员账户">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placehoder="会员账户"
          :style="{ width: '150px' }"
          ref="username"
        />
      </el-form-item>

      <FormDateRange @on-change="handleDateRangeChange" label="注册时间" ref="registerRange" />

      <FormDateRange @on-change="handleLoginRangeChange" label="登录时间" ref="loginRange" />

      <FormNumberRange
        @on-change="handleNumberRangeChange"
        label="余额"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="numberRange"
      />

      <FormNumberRange
        @on-change="handleWinRangeChange"
        label="输赢"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="winRange"
      />

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

      <el-form-item label="监控状态">
        <FormSelectArray
          @on-change="$set(formData, 'control', $event)"
          :options="[ '禁用', '启用' ]"
          :styles="{ width: '90px' }"
          ref="control"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import SearchFormLayout from '@/components/layout/SearchFormLayout'
import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import FormDateRange from '@/components/form/FormDateRange'
import FormNumberRange from '@/components/form/FormNumberRange'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'UsersListSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelect,
    FormDateRange,
    FormNumberRange,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
    },
    handleLoginRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { loginStartTime: startTime, loginEndTime: endTime })
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
