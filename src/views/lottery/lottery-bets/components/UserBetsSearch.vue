<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="账户名称">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="账户名称"
        :styles="{ width: '140px' }"
        ref="username"
      />
    </el-form-item>

    <el-form-item label="彩票期号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'drawno', $event)"
        :styles="{ width: '150px' }"
        ref="drawno"
      />
    </el-form-item>

    <FormSelectGame
      @on-change="$set(formData, 'gameType', $event)"
      httpAPIName="fetchGamesMenu"
      :httpAPIParams="{ params: { type: 1 } }"
      labelAttr="name"
      valueAttr="id"
      prop="gameType"
      label="游戏类型"
      filterable
      ref="gameType"
    />

    <FormDateRange @on-change="handleDateRangeChange" ref="dateRange" />

    <el-form-item label="注单状态">
      <FormSelectArray
        @on-change="$set(formData, 'status', $event)"
        :options="[ '未结算', '中奖', '未中奖' ]"
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

import FormInput from '@/components/form/FormInput'
import FormSelectGame from '@/components/form/FormSelectGame'
import FormDateRange from '@/components/form/FormDateRange'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'PaymentPortSearch',
  components: {
    FormInput,
    FormSelectGame,
    FormDateRange,
    FormSelectArray
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
