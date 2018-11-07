<template>
  <div>
    <el-date-picker
      v-model="timestamp"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="—"
      start-placeholder="请选择开始日期"
      end-placeholder="请选择结束日期"
      value-format="timestamp"
      :picker-options="pickerOptions">
    </el-date-picker>
    <el-input v-model="name" placeholder="会员账号" style="width: 130px;margin:0 0 15px 10px"></el-input>
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[20,40,60,80,100]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
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
      timestamp: '',
      name: '',
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
      tableData: [],
      pageSize: 20,
      currentPage: 1,
      total: 0
    }
  },
  created () {
    this.fetchRbateLogList()
  },
  methods: {
    // 改变显示数量
    handleSizeChange (val) {
      this.pageSize = val
      this.fetchRbateLogList()
    },
    // 改变当前页
    handleCurrentChange (val) {
      console.log(val)
      this.currentPage = val
      this.fetchRbateLogList()
    },
    // 搜索
    search () {
      if (!this.name && !this.timestamp) {
        return
      }
      this.fetchRbateLogList()
    },
    // 刷新
    refresh () {
      this.fetchRbateLogList()
    },
    // 获取返水信息
    fetchRbateLogList () {
      this.$httpAPI.rebateLogList({
        params: {
          pageNo: this.currentPage,
          pageSize: this.pageSize,
          gameConfigId: this.gameConfigId,
          beginDate: this.timestamp[0],
          endDate: this.timestamp[1],
          userName: this.name
        }
      }).then(response => {
        this.tableData = response.data.data
        this.total = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>
