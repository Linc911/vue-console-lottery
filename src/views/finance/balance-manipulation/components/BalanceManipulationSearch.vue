<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="formData.username = $event" ref="username" />

      <SearchAccountType @on-change="formData.gameType = $event" ref="gameType" />

      <SearchLoanType @on-change="formData.loanType = $event" ref="loanType" />

      <SearchLoanDirection @on-change="formData.type = $event" ref="type" />

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchAccountType from '@/components/search/SearchAccountType'
import SearchLoanType from '@/components/search/SearchLoanType'
import SearchLoanDirection from '@/components/search/SearchLoanDirection'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'DepositFormSearch',
  components: {
    SearchUsername,
    SearchAccountType,
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
