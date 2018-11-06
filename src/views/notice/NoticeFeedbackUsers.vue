<template lang="html">
  <div class="NoticeFeedbackUsers">
      <el-input v-model="level" placeholder="消息发送者/消息标题" style="width: 210px;margin:0 0 15px 10px"></el-input>
      <el-button type="primary" icon="el-icon-search"></el-button>
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" :min-width="30" />
        <el-table-column prop="" label="消息发送者">
        </el-table-column>
        <el-table-column prop="" label="消息类型">
        </el-table-column>
        <el-table-column prop="" label="消息标题">
        </el-table-column>
        <el-table-column prop="" label="发布时间">
        </el-table-column>
        <el-table-column prop="" label="系统用户名">
        </el-table-column>
        <el-table-column prop="" label="消息对象">
        </el-table-column>
        <el-table-column prop="" label="未回复数" sortable>
        </el-table-column>
        <el-table-column prop="" label="咨询数">
        </el-table-column>
      </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
    </div>
</template>
<script>
export default {
  data () {
    return {
      level: '',
      currentPage: 1,
      tableData: []
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
