<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <!-- <SearchUsername @keyup.native.enter="search" @on-change="handleUsernameChange" ref="username" />

      <SearchNumberRange
        @on-change="handleNumberRangeChange"
        label="金额范围"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="numberRange"
      /> -->

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
// import SearchUsername from '@/components/search/SearchUsername'
// import SearchNumberRange from '@/components/search/SearchNumberRange'
// import SearchAudit from '@/components/search/SearchAudit'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  components: {
    // SearchUsername,
    // SearchNumberRange,
    // SearchAudit,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        minMoney: '',
        maxMoney: '',
        status: ''
      }
    }
  },
  methods: {
    handleUsernameChange (value) {
      this.formData.username = value
    },
    handleNumberRangeChange ({ start, end }) {
      this.formData.minMoney = start
      this.formData.maxMoney = end
    },
    handleAuditChange (value) {
      this.formData.status = value
    },
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
    },
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      this.$refs.username.reset()
      this.$refs.numberRange.reset()
      this.$refs.audit.reset()

      this.formData = {
        username: '',
        minMoney: '',
        maxMoney: '',
        status: ''
      }
    }
  }
}
</script>
