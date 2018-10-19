<template lang="html">
  <section class="vip-bets">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <div class="search-left">
        <template>
          <span class="form-label">注册时间：</span>
          <el-date-picker
            v-model="valueDate"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
            size="small"
            clearable
            style="width: 240px; margin-right: 20px;"
          />
        </template>
        <template>
          <span class="form-label">所属分组：</span>
          <el-select v-model="valueData" size="small" placeholder="全部">
            <el-option label="在线" :value="0"></el-option>
            <el-option label="充值" :value="1"></el-option>
            <el-option label="彩金" :value="2"></el-option>
          </el-select>
        </template>
      </div>
      <div class="search-right">
        <el-input v-model="input4" size="small" placeholder="请输入内容" style="width: 240px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button icon="el-icon-refresh" size="small" style="margin-left: 10px;"></el-button>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="orderId" label="注单ID" :min-width="140"></el-table-column>

        <el-table-column prop="createDate" label="投注时间" :min-width="140">
          <template slot-scope="scope">
            <span v-localtime="scope.row.createDate"></span>
          </template>
        </el-table-column>

        <el-table-column prop="currentDrawno" label="当前投注的期号"></el-table-column>

        <el-table-column prop="betsType" label="投注类型">
          <template slot-scope="scope">
            <span>{{transferBetsType(scope.row.betsType)}}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="bets" label="投注内容"></el-table-column> -->
        <el-table-column prop="totalBets" label="总投注数" min-width="80">
          <template slot-scope="scope">
            <span>{{scope.row.totalBets}} <i class="el-icon-search"></i></span>
          </template>
        </el-table-column>
        <el-table-column prop="totalAmount" label="总投注金额" :width="60"></el-table-column>
        <!-- <el-table-column prop="orderType" label="订单类型"></el-table-column> -->

        <el-table-column prop="status" label="注单状态">
          <template slot-scope="scope">
            <span>{{transferStatus(scope.row.status)}}</span>
          </template>
        </el-table-column>


      </el-table>
      <!-- 分页 -->
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="page.current"
        :total="page.total"
        :page-sizes="[10, 20, 40, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      input4: '',
      valueDate: '',
      valueData: '',
      tableData: [],
      page: {
        total: 10,
        current: 1,
        size: 10
      }
    }
  },
  created () {
    this.fetchUserList({ current: this.page.current = 1, size: this.page.size = 10 })
  },
  methods: {
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.fetchUserList({ current: this.page.current = currentPage, size: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.fetchUserList({ current: this.page.current = 1, size: this.page.size = pageSize })
    },
    transferBetsType (type) {
      switch (type) {
        case 1:
          return '主盘势'
        case 2:
          return '单选'
        case 3:
          return '选号-任选'
        case 4:
          return '选号-组选'
        case 5:
          return '选号-直选'
        default:
          return '主盘势'
      }
    },
    transferStatus (status) {
      switch (status) {
        case 0:
          return '未处理'
        case 1:
          return '已处理'
        default:
          return '未处理'
      }
    },
    fetchUserList (page) {
      this.$axios.get('/api-p/UserOrder/findPage', {
        params: { userId: this.$route.params.id, pageNo: this.page.current, pageSize: this.page.size }
      }).then(response => {
        // 表格对象赋值
        this.tableData = response.data.data
        // 分页对象赋值
        this.page.total = response.data.amount
      }).catch(error => console.log(error))
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
</style>
