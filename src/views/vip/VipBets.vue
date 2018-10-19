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
      <!-- 会员基本信息 -->
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
        <li class="pull-right">
          <el-button @click="$router.push(`/user/${tableData[0].userId}/betsStatistics`)" type="primary" size="mini">近15天注单统计</el-button>
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
        <el-table-column prop="orderId" label="注单ID" :min-width="140"></el-table-column>

        <el-table-column prop="createDate" label="投注时间" :min-width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createDate | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="currentDrawno" label="当前投注的期号"></el-table-column>

        <el-table-column prop="betsType" label="投注主类型">
          <template slot-scope="scope">
            <span>{{scope.row.betsType | betType}}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="bets" label="投注内容"></el-table-column> -->
        <el-table-column prop="totalBets" label="总投注数" :width="70">
          <template slot-scope="scope">
            <span>{{scope.row.totalBets}}</span>
            <MoreDetail @on-click="showDialogBetsDetails(scope.row.bet.bettings)" class="pull-right" />
          </template>
        </el-table-column>

        <el-table-column prop="totalAmount" label="总投注金额" :min-width="60">
          <template slot-scope="scope">
            <span>{{scope.row.totalAmount | RMB}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="orderType" label="订单类型"></el-table-column> -->

        <el-table-column prop="status" label="注单状态">
          <template slot-scope="scope">
            <span>{{scope.row.status | betStatus}}</span>
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
    <!-- 注单详情弹框 -->
    <el-dialog
      title="每注详情"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="80%"
      center
    >
      <div>
        <el-row :gutter="20">
          <el-col :sm="12" :md="8" :lg="6" :xl="4" v-for="(item, i) in currentBets" :key="i">
            <el-card>
              <ul>
                <li class="balls-row clearfix">
                  <span>球号</span>
                  <div class="balls-container">
                    <template v-for="(ball, j) in item.ballNums">
                      <BaseBall :number="ball" :key="j" />
                    </template>
                  </div>
                </li>
                <li class="balls-row clearfix">
                  <span>第五个球选号</span>
                  <span class="balls-container">
                    <BaseBall />
                  </span>
                </li>
                <li>
                  <span>投注子类型</span>
                  <span class="pull-right">{{item.childType | betSubtype }}</span>
                </li>
                <li>
                  <span>每注的金额</span>
                  <span class="pull-right">{{item.betAmount | RMB}}</span>
                </li>
                <li>
                  <span>赔率</span>
                  <span class="pull-right">{{item.rate}}</span>
                </li>
                <li>
                  <span>投注结果</span>
                  <span class="pull-right">{{item.betResulte | betResult}}</span>
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import BaseBall from '@/components/base/BaseBall'
import MoreDetail from '@/components/base/MoreDetail'

export default {
  components: {
    BaseBall,
    MoreDetail
  },
  data () {
    return {
      input4: '',
      valueDate: '',
      valueData: '',
      dialogVisible: false,
      tableDataReady: false,
      tableData: [],
      page: {
        total: 10,
        current: 1,
        size: 10
      },
      currentBets: []
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
    // 显示每注详情弹框
    showDialogBetsDetails(bets) {
      this.dialogVisible = true
      this.currentBets = bets
    },
    // 关闭弹框
    handleClose () {
      this.dialogVisible = false
    },
    fetchUserList (page) {
      this.$axios.post('/api-g/getUserBetsInfo', {}, {
        params: { id: this.$route.params.id, pageNo: this.page.current, pageSize: this.page.size }
      }).then(response => {
        this.tableData = response.data.results// 表格对象赋值
        this.page.total = response.data.amount // 分页对象赋值
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
// 会员基本信息
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
// 每注详情弹框
.el-card {
  line-height: 30px;
  margin-bottom: 20px;
}
.balls-row  {
  margin-bottom: 8px;
  line-height: 30px;
}
.balls-container {
  float: right;
}
</style>
