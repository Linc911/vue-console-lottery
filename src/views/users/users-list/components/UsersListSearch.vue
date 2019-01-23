<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="会员账户">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placehoder="会员账户"
          :style="{ width: '150px' }"
          ref="username"
        />
      </el-form-item>

      <el-form-item label="注册时间">
        <SearchDatePicker
          @on-change="handleRangeChange($event, 'startTime', 'endTime')"
          ref="registerRange"
        />
      </el-form-item>

      <el-form-item label="登陆时间">
        <SearchDatePicker
          @on-change="handleRangeChange($event, 'loginStartTime', 'loginEndTime')"
          ref="loginRange"
        />
      </el-form-item>

      <el-form-item label="余额">
        <SearchNumberRange
          @on-enter="$emit('on-search', formData)"
          @on-change="handleNumberRangeChange"
          ref="numberRange"
        />
      </el-form-item>

      <el-form-item label="输赢">
        <SearchNumberRange
          @on-enter="$emit('on-search', formData)"
          @on-change="handleWinRangeChange"
          ref="winRange"
        />
      </el-form-item>

      <el-form-item label="分组">
        <FormSelectAsync
          @on-change="handleSelectChange($event, 'groupId')"
          httpAPIName="fetchUserGroups"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="groupId"
          ref="groupId"
        />
      </el-form-item>

      <el-form-item label="监控状态">
        <FormSelectArray
          @on-change="handleSelectChange($event, 'control')"
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
import FormSelectAsync from '@/components/form/FormSelectAsync'
import FormDateRange from '@/components/form/FormDateRange'
import FormNumberRange from '@/components/form/FormNumberRange'
import SearchDatePicker from '@/components/search/SearchDatePicker'
import SearchNumberRange from '@/components/search/SearchNumberRange'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'UsersListSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelectAsync,
    FormDateRange,
    FormNumberRange,
    SearchDatePicker,
    SearchNumberRange,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ],
  methods: {
    // 时间变化时，更新搜索条件，通知父组件请求数据
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
      this.$emit('on-search', this.formData)
    },
    // 时间变化时，更新搜索条件，通知父组件请求数据
    handleLoginRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { loginStartTime: startTime, loginEndTime: endTime })
      this.$emit('on-search', this.formData)
    },
    handleNumberRangeChange ({ start, end }) {
      this.formData.minBanlance = start
      this.formData.maxBanlance = end
    },
    handleWinRangeChange ({ start, end }) {
      this.formData.minWin = start
      this.formData.maxWin = end
    },
    // 时间变化时，更新搜索条件，通知父组件请求数据
    handleSelectGroup (value) {
      this.$set(this.formData, 'groupId', value)
      this.$emit('on-search', this.formData)
    }
  }
}
</script>
