<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>

      <!-- <SearchDateRange @on-change="handleDateRangeDepositChange" label="存款时间" ref="dateRangeDeposit" />

      <SearchDateRange @on-change="handleDateRangeWithdrawChange" label="取款时间" ref="dateRangeWithdraw" /> -->

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
// import SearchDateRange from '@/components/search/SearchDateRange'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'BalanceSheetSearch',
  components: {
    // SearchDateRange,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        startInTime: '',
        endInTime: '',
        startOutTime: '',
        endOutTime: ''
      }
    }
  },
  methods: {
    handleDateRangeDepositChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, {
        startInTime: startTime,
        endInTime: endTime
      })
    },
    handleDateRangeWithdrawChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, {
        startOutTime: startTime,
        endOutTime: endTime
      })
    },
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      this.$refs.dateRangeDeposit.reset()
      this.$refs.dateRangeWithdraw.reset()

      this.formData = {
        startInTime: '',
        endInTime: '',
        startOutTime: '',
        endOutTime: ''
      }
    }
  }
}
</script>
