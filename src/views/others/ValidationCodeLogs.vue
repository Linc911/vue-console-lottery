<template lang="html">
  <section class="code-logs">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <SearchPlain placeholder="按电话号码搜索" />
    </div>
    <!-- 表格数据 -->
    <div class="table-container">
      <el-table
        :data="tableActiveData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column prop="code" label="Code"></el-table-column>
        <el-table-column prop="name" label="角色名"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" >
          <template slot-scope="scope">
            <span v-localtime="scope.row.createTime"></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import SearchPlain from '@/components/base/SearchPlain'

export default {
  name: 'validationCodeLogs',
  components: {
    SearchPlain
  },
  data () {
    return {
      tableData: [],
      tableActiveData: []
    }
  },
  created () {
    this.fetchValidationCodeLogs()
  },
  methods: {
    // 根据输入框内容，显示符合匹配条件的角色
    handleSearchInfo (keyword) {
      this.tableActiveData = this._.filter(this.tableData, item => item.name.includes(keyword))
    },
    // 获取全部角色数据
    fetchValidationCodeLogs () {
      this.$axios.get('/api-n/sms', {
        params: { draw: 1, start: 0, length: 10, search: false, _: 1540195649434 }
      }).then(response => {
        console.log(response)
        // this.tableData = this.tableActiveData = response.data.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 20px;
}
.search-left {
  float: left;
}
.search-right {
  float: right;
  text-align: right;
}
strong {
  color: #F56C6C;
}
.tree-container {
  padding-bottom: 20px;
}
</style>
