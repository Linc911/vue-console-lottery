<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="handleUsernameChange" ref="username" />

      <SearchAudit @on-change="handleAuditChange" ref="audit" />

      <SearchIcon @click.native="search" />

      <SearchReset @click.native="reset" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchAudit from '@/components/search/SearchAudit'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  components: {
    SearchUsername,
    SearchAudit,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {
        username: '',
        status: ''
      }
    }
  },
  methods: {
    handleUsernameChange (value) {
      this.formData.username = value
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
      this.$refs.audit.reset()

      this.formData = {
        username: '',
        status: ''
      }
    }
  }
}
</script>
