<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form  @keyup.native.enter="search" :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @on-change="handleUsernameChange" ref="username" />

      <SearchGames @on-change="handleGameChange" ref="games" />

      <SearchLoanType @on-change="handleLoanTypeChange" ref="loanType" />

      <SearchLoanDirection @on-change="handleLoanDirectionChange" ref="loanDirection" />

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchGames from '@/components/search/SearchGames'
import SearchLoanType from '@/components/search/SearchLoanType'
import SearchLoanDirection from '@/components/search/SearchLoanDirection'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'DepositFormSearch',
  components: {
    SearchUsername,
    SearchGames,
    SearchLoanType,
    SearchLoanDirection,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        gameType: '',
        loanType: '',
        type: ''
      }
    }
  },
  methods: {
    handleUsernameChange (value) {
      this.formData.username = value
    },
    handleGameChange (value) {
      this.formData.gameType = value
    },
    handleLoanTypeChange (value) {
      this.formData.loanType = value
    },
    handleLoanDirectionChange (value) {
      this.formData.type = value
    },
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      this.$refs.username.reset()
      this.$refs.games.reset()
      this.$refs.loanType.reset()
      this.$refs.loanDirection.reset()

      this.formData = {
        username: '',
        gameType: '',
        loanType: '',
        type: ''
      }
    }
  }
}
</script>
