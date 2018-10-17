<template lang="html">
  <section class="vip-info-manage">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <div class="search-left">
        <el-input v-model="input4" size="small" placeholder="请输入角色" style="width: 240px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="search-right">
        <el-button icon="el-icon-circle-plus-outline" size="small" type="primary">添加</el-button>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="">
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column prop="code" label="Code"></el-table-column>
        <el-table-column prop="name" label="角色名"></el-table-column>
        <el-table-column prop="changedTime" label="修改时间" >
          <template slot-scope="scope">
            <span v-localtime="scope.row.changedTime"></span>
          </template>
        </el-table-column>
        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" size="mini" type="primary"></el-button>
            <el-button icon="el-icon-delete" size="mini" type="primary"></el-button>
            <span class="table-operations-item">安全预测</span>
            <span class="table-operations-item">赔率预览</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      input4: '',
      time: '',
      valueDate: '',
      valueData: '',
      tableData: [
        {
          code: 123,
          changedTime: new Date(),
          name: 'Jhon',
          name: '新会员'
        },
      ]
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
// .form-label {
//   font-size: 14px;
//   color: #606266;
// }
// .table-operations-item {
//   display: inline-block;
//   width: 60px;
//   text-align: center;
// }
</style>
