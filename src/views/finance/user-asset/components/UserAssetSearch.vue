<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="formData.username = $event" ref="username" />

      <SearchDateRange @on-change="handleDateRangeChange" ref="dateRange" />

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchDateRange from '@/components/search/SearchDateRange'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'UserAssetSearch',
  components: {
    SearchUsername,
    SearchDateRange,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        startTime: '',
        endTime: ''
      }
    }
  },
  methods: {
    search () {
      this.$emit('on-search', this.formData)
    },
    handleDateRangeChange ({ startTime, endTime }) {
      this.formData = Object.assign(this.formData, { startTime, endTime })
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
