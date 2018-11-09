<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="handleUsernameChange" ref="username" />

      <SearchAccountType @on-change="handleGamesChange" ref="games" />

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchAccountType from '@/components/search/SearchAccountType'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'DepositOnlineSearch',
  components: {
    SearchUsername,
    SearchAccountType,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        target: ''
      }
    }
  },
  methods: {
    handleUsernameChange (value) {
      this.formData.username = value
    },
    handleGamesChange (value) {
      this.formData.target = value
    },
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      this.$refs.username.reset()
      this.$refs.games.reset()

      this.formData = {
        username: '',
        target: ''
      }
    }
  }
}
</script>
