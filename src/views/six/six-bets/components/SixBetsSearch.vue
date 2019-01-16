<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="账户名称">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="可模糊搜索"
        :styles="{ width: '150px' }"
        ref="username"
      />
    </el-form-item>

    <el-form-item label="彩票期号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'drawno', $event)"
        placeholder="可模糊搜索"
        :styles="{ width: '150px' }"
        ref="drawno"
      />
    </el-form-item>

    <el-form-item label="游戏类型">
      <FormSelectStatic
        @on-change="$set(formData, 'status', $event)"
        :options="[
          { value: 30, label: '快速六合彩' },
          { value: 31, label: '5分六合彩' },
          { value: 32, label: '香港六合彩' }
        ]"
        :styles="{ width: '120px' }"
        ref="status"
      />
    </el-form-item>

    <FormDateRange @on-change="handleDateRangeChange" ref="dateRange" />

    <el-form-item label="处理状态">
      <FormSelectStatic
        @on-change="$set(formData, 'status', $event)"
        :options="[
          { value: 0, label: '未结算' },
          { value: 1, label: '中奖' },
          { value: 2, label: '未中奖' }
        ]"
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
