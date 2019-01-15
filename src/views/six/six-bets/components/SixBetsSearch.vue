<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="账户名称"
      width="174px"
      ref="username"
    />

    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'drawno', $event)"
      label="彩票期号"
      width="174px"
      ref="drawno"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 30, label: '快速六合彩' },
        { value: 31, label: '5分六合彩' },
        { value: 32, label: '香港六合彩' }
      ]"
      label="游戏类型"
      width="120px"
      ref="status"
    />

    <FormDateRange @on-change="handleDateRangeChange" ref="dateRange" />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '未结算' },
        { value: 1, label: '中奖' },
        { value: 2, label: '未中奖' }
      ]"
      label="处理状态"
      width="100px"
      ref="status"
    />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormDateRange from '@/components/form/FormDateRange'
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'SixBetsSearch',
  components: {
    FormInput,
    FormDateRange,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ],
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.startTime = startTime
      this.formData.endTime = endTime
    }
  }
}
</script>
