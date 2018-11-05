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
      <el-table-column :min-width="30" />
      <el-table-column prop="name" label="返水等级">
        <template slot-scope="scope">
          <span>{{scope.row.name | returnLevel}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="upperLimit" label="有效投注上限">
        <template slot-scope="scope">
          <span>{{scope.row.upperLimit | zero}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="lowerLimit" label="有效投注下限">
        <template slot-scope="scope">
          <span>{{scope.row.lowerLimit | zero}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="ratio" label="返佣比例">
        <template slot-scope="scope">
          <span>{{scope.row.ratio | percentage}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="是否启用">
        <template slot-scope="scope">
          <span>{{scope.row.status | isEnabled}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="sysGroupNames" label="会员分组">
      </el-table-column>
      <el-table-column prop="updateTime" label="修改时间" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.updateTime | time}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      level: '',
      tableData: []
    }
  },
  created () {
    this.fetchRebateList()
  },
  methods: {
    fetchRebateList () {
      this.$httpAPI.rebateList({
        gameConfigId: 1,
        pageNo: 1,
        pageSize: 10
      }).then(response => {
        this.tableData = response.data.data
        // console.log(this.tableData)
      }).catch(error => console.log(error))
    }
  }
}
</script>
