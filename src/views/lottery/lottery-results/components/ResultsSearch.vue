<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <SearchIssue @keyup.native.enter="search" @on-change="formData.drawno = $event" ref="drawno" />

      <SearchPlainSelect
        @on-change="formData.status = $event"
        :options="accountStatus.opitons"
        :label="accountStatus.label"
        ref="status"
      />

      <SearchDateRange @on-change="handleDateRangeChange" label="开奖时间" ref="dateRange" />

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>

    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchIssue from '@/components/search/SearchIssue'
import SearchPlainSelect from '@/components/search/SearchPlainSelect'
import SearchDateRange from '@/components/search/SearchDateRange'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'ResultsElevenSearch',
  components: {
    SearchIssue,
    SearchPlainSelect,
    SearchDateRange,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        drawno: '',
        startDate: '',
        endDate: '',
        status: ''
      },
      accountStatus: {
        label: '结算状态',
        opitons: [
          { value: 0, label: '未开奖' },
          { value: 1, label: '未结算' },
          { value: 2, label: '已结算' }
        ]
      }
    }
  },
  methods: {
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData.startDate = startTime
      this.formData.endDate = endTime
    },
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      for (let key in this.$refs) {
        this.$refs[key].reset()
      }

      this.$utils.initializeObjectProperties(this.formData)
    }
  }
}
</script>
