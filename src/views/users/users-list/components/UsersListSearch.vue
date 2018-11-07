<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="handleUsernameChange" ref="username" />

      <SearchNumberRange
        @on-change="handleNumberRangeChange"
        label="会员余额"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="numberRange"
      />

      <SearchNumberRange
        @on-change="handleWinRangeChange"
        label="输赢金额"
        startPlaceholder="最小金额"
        endPlaceholder="最大金额"
        ref="winRange"
      />

      <SearchDateRange @on-change="handleDateRangeChange" label="注册时间" ref="dateRange" />

      <SearchUserGroup @on-change="handleUserGroupChange" ref="userGroup"/>

      <SearchUserControl @on-change="handleUserControlChange" ref="userControl"/>

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchNumberRange from '@/components/search/SearchNumberRange'
import SearchDateRange from '@/components/search/SearchDateRange'
import SearchUserGroup from '@/components/search/SearchUserGroup'
import SearchUserControl from '@/components/search/SearchUserControl'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  components: {
    SearchUsername,
    SearchNumberRange,
    SearchDateRange,
    SearchUserGroup,
    SearchUserControl,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        minBanlance: '',
        maxBanlance: '',
        startTime: '',
        endTime: '',
        groupId: '',
        control: '',
        minWin: '',
        maxWin: ''
      }
    }
  },
  methods: {
    handleUsernameChange (value) {
      this.formData.username = value
    },
    handleNumberRangeChange ({ start, end }) {
      this.formData.minBanlance = start
      this.formData.maxBanlance = end
    },
    handleWinRangeChange ({ start, end }) {
      this.formData.minWin = start
      this.formData.maxWin = end
    },
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
    },
    handleUserGroupChange (value) {
      this.formData.groupId = value
    },
    handleUserControlChange (value) {
      this.formData.control = value
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
