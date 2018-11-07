<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="handleUsernameChange" ref="username" />

      <SearchPaymentType @on-change="handlePaymentTypeChange" ref="paymentType" />

      <SearchDateRange @on-change="handleDateRangeChange" ref="dateRange" />

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchPaymentType from '@/components/search/SearchPaymentType'
import SearchDateRange from '@/components/search/SearchDateRange'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'DepositWithdrawSearch',
  components: {
    SearchUsername,
    SearchPaymentType,
    SearchDateRange,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        paymentType: '',
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    handleUsernameChange (value) {
      this.formData.username = value
    },
    handlePaymentTypeChange (value) {
      this.formData.payType = value
    },
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
    },
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      for (let key in this.$refs) {
        this.$refs[key].reset()
      }

      for (let key in this.formData) {
        this.formData[key] = ''
      }
    }
  }
}
</script>
