<template>
  <div>
    <el-date-picker
      v-model="Date"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="—"
      start-placeholder="请选择开始日期"
      end-placeholder="请选择结束日期"
      :picker-options="pickerOptions">
    </el-date-picker>
    <el-input v-model="level" placeholder="返水等级" style="width: 130px;margin:0 0 15px 10px"></el-input>
    <el-button type="primary" icon="el-icon-search"></el-button>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="" label="会员账号">
      </el-table-column>
      <el-table-column prop="" label="返水日期">
      </el-table-column>
      <el-table-column prop="" label="游戏类型">
      </el-table-column>
      <el-table-column prop="" label="总投注">
      </el-table-column>
      <el-table-column prop="" label="有效投注">
      </el-table-column>
      <el-table-column prop="" label="返水开始时间">
      </el-table-column>
      <el-table-column prop="" label="返水结束时间" sortable>
      </el-table-column>
      <el-table-column prop="" label="投注笔数">
      </el-table-column>
      <el-table-column prop="" label="会员输赢">
      </el-table-column>
      <el-table-column prop="" label="返水金额">
      </el-table-column>
      <el-table-column prop="" label="返水类型">
      </el-table-column>
    </el-table>
  </div>
</template>

<script  type="text/javascript">
export default {
  data () {
    return {
      activeName: 'second',
      Date: '',
      level: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      tableData: []
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
