<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormSelect
      @on-change="$set(formData, 'userId', $event)"
      httpAPIName="fetchPublicUsers"
      :httpAPIParams="{ params: { pageNo: 1, pageSize: 1000 } }"
      labelAttr="username"
      valueAttr="id"
      prop="userId"
      label="会员账户"
      width="140px"
      filterable
      ref="userId"
    />

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

    <FormDateRange
    @on-change="handleDateRangeChange"
    label="下注时间"
    ref="dateRange" />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'
import FormSelectGame from '@/components/form/FormSelectGame'
import FormDateRange from '@/components/form/FormDateRange'

export default {
  name: 'StatisticsUsersSearch',
  components: {
    FormSelect,
    FormSelectGame,
    FormDateRange
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
