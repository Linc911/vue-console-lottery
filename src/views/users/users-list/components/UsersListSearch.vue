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
          @on-change="handleTimeRangeChange($event, 'startTime', 'endTime')"
          ref="registerRange"
        />
      </el-form-item>

      <el-form-item label="登录时间">
        <SearchDatePicker
          @on-change="handleTimeRangeChange($event, 'loginStartTime', 'loginEndTime')"
          ref="loginRange"
        />
      </el-form-item>

      <el-form-item label="余额">
        <SearchNumberRange
          @on-change="handleNumberRangeChange($event, 'minBanlance', 'maxBanlance')"
          @on-enter="$emit('on-search', formData)"
          ref="numberRange"
        />
      </el-form-item>

      <el-form-item label="输赢">
        <SearchNumberRange
          @on-change="handleNumberRangeChange($event, 'minWin', 'maxWin')"
          @on-enter="$emit('on-search', formData)"
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
import FormSelectArray from '@/components/form/FormSelectArray'
import SearchDatePicker from '@/components/search/SearchDatePicker'
import SearchNumberRange from '@/components/search/SearchNumberRange'

export default {
  name: 'UsersListSearch',
  components: {
    SearchFormLayout,
    FormInput,
    FormSelectAsync,
    FormSelectArray,
    SearchDatePicker,
    SearchNumberRange
  },
  mixins: [ searchInnerMixin ]
}
</script>
