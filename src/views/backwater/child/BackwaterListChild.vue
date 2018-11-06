<template>
  <div>
    <el-date-picker
      v-model="date"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="—"
      start-placeholder="请选择开始日期"
      end-placeholder="请选择结束日期"
      :picker-options="pickerOptions">
    </el-date-picker>
    <el-input v-model="level" placeholder="会员账号" style="width: 130px;margin:0 0 15px 10px"></el-input>
    <el-button type="primary" icon="el-icon-search" style="margin-left: 10px" @click="search"></el-button>
    <el-button type="primary" icon="el-icon-refresh" style="float: right" @click="refresh"></el-button>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="userName" label="会员账号">
      </el-table-column>
      <el-table-column prop="rebateDate" label="返水日期">
        <template slot-scope="scope">
          <span>{{scope.row.rebateDate | time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gameTypeDesc" label="游戏类型">
      </el-table-column>
      <el-table-column prop="totalBetting" label="总投注">
      </el-table-column>
      <el-table-column prop="validBetting" label="有效投注">
      </el-table-column>
      <el-table-column prop="rebateBegin" label="返水开始时间">
        <template slot-scope="scope">
          <span>{{scope.row.rebateBegin | time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="rebateEnd" label="返水结束时间" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.rebateEnd | time}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="bettingAmount" label="投注笔数">
      </el-table-column>
      <el-table-column prop="gainStatus" label="会员输赢">
        <template slot-scope="scope">
          <span>{{scope.row.gainStatus | winOrLost}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="rebateMoney" label="返水金额">
      </el-table-column>
      <el-table-column prop="rebateTypeDesc" label="返水类型">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    gameConfigId: {
      Number
    }
  },
  data () {
    return {
      activeName: 'second',
      date: '',
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
  created () {
    this.fetchRbateLogList()
  },
  methods: {
    search () {
      console.log(this.date)
    },
    refresh () {
      this.fetchRbateLogList()
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    fetchRbateLogList () {
      this.$httpAPI.rebateLogList({
        params: {
          pageNo: 1,
          pageSize: 10,
          gameConfigId: this.gameConfigId
        }
      }).then(response => {
        this.tableData = response.data.data
        console.log(this.tableData)
      }).catch(error => console.log(error))
    }
  }
}
</script>
