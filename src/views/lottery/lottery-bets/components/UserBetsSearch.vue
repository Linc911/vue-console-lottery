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

    <FormSelectGame
      @on-change="$set(formData, 'type', $event)"
      httpAPIName="fetchGamesMenu"
      :httpAPIParams="{ params: { type: 1 } }"
      labelAttr="name"
      valueAttr="id"
      prop="type"
      label="游戏类型"
      filterable
      ref="type"
    />

    <FormDateRange @on-change="handleDateRangeChange" ref="dateRange" />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '未处理' },
        { value: 1, label: '已处理' },
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
import FormSelectGame from '@/components/form/FormSelectGame'
import FormDateRange from '@/components/form/FormDateRange'
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'PaymentPortSearch',
  components: {
    FormInput,
    FormSelectGame,
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
