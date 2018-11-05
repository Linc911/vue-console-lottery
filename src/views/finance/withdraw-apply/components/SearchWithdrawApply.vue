<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <SearchUsername @keyup.native.enter="search" @on-change="handleUsernameChange" />

      <SearchAudit @keyup.native.enter="search" @on-change="handleAuditChange" />

      <SearchIcon @click.native="search" />
    </el-form>
  </div>
</template>

<script type="text/javascript">
import SearchUsername from '@/components/search/SearchUsername'
import SearchAudit from '@/components/search/SearchAudit'
import SearchIcon from '@/components/search/SearchIcon'

export default {
  components: {
    SearchUsername,
    SearchAudit,
    SearchIcon
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
    search () {
      this.$emit('on-search', this.formData)
    }
  }
}
</script>
