<template lang="html">
  <section class="vip-bets">
    <!-- 条件筛选 -->
    <FilterArea />
    <!-- 表格数据 -->
    <div class="table-list">
      <ul v-if="tableDataReady" class="user-info-list clearfix">
        <li class="user-info-item">
          <span>用户ID：</span>
          <span class="user-info-detail">{{tableData[0].id}}</span>
        </li>
        <li class="user-info-item">
          <span>会员ID：</span>
          <span class="user-info-detail">{{tableData[0].userId}}</span>
        </li>
        <li class="user-info-item">
          <span>会员账号：</span>
          <span class="user-info-detail">{{tableData[0].username}}</span>
        </li>
      </ul>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="orderID" label="订单流水号" :min-width="140"></el-table-column>
        <el-table-column prop="otherOrderId" label="第三方订单流水号" :min-width="140"></el-table-column>

        <el-table-column prop="payTime" label="充值时间" :min-width="140"></el-table-column>

        <el-table-column prop="payType" label="支付类型">
          <template slot-scope="scope">
            <span>{{scope.row.payType | changedType}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="payNum" label="支付金额">
          <template slot-scope="scope">
            <span>{{scope.row.payNum | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="selfStatus" label="订单状态">
          <template slot-scope="scope">
            <span>{{scope.row.selfStatus | changedStatus}}</span>
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
import FilterArea from '@/components/others/FilterArea'

export default {
  components: {
    FilterArea
  },
  data () {
    return {
      input4: '',
      valueDate: '',
      valueData: '',
      tableDataReady: false,
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
    fetchUserList (page) {
      this.$axios.get('/api-p/UserOrder/findPage', {
        params: { userId: this.$route.params.id, pageNo: this.page.current, pageSize: this.page.size }
      }).then(response => {
        // 表格对象赋值
        this.tableData = response.data.data
        // 分页对象赋值
        this.page.total = response.data.amount
        this.tableDataReady = true
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
.user-info-list {
  margin: 30px 0 10px;
}
.user-info-item {
  float: left;
  margin-right: 30px;
  font-size: 14px;
}
.user-info-detail {
  color: #999;
}
</style>
