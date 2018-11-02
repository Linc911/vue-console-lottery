<template>
  <div>
    <el-input v-model="level" placeholder="返水等级" style="width: 160px;margin-bottom: 15px"></el-input>
    <el-button type="primary" icon="el-icon-search"></el-button>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="" label="返水等级">
      </el-table-column>
      <el-table-column prop="" label="有效投注上限">
      </el-table-column>
      <el-table-column prop="" label="有效投注下限">
      </el-table-column>
      <el-table-column prop="" label="返佣比例">
      </el-table-column>
      <el-table-column prop="" label="是否启用">
      </el-table-column>
      <el-table-column prop="" label="会员分组">
      </el-table-column>
      <el-table-column prop="" label="修改时间" sortable>
      </el-table-column>
      <el-table-column prop="" label="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script  type="text/javascript">
export default {
  data () {
    return {
      level: '',
      tableData: []
    }
  },
  methods: {

  }
}
</script>
