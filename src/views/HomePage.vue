<template>
  <div class="home-index">
    <section class="data-summary">
      <el-card>
        <div slot="header">
          <i class="fa fa-gears"></i>
          <span> 关键数据实时指标</span>
        </div>
        <ul v-if="dataReady" class="clearfix">
          <router-link
            v-for="item in summary"
            :key="item.identifier"
            :to="item.path"
            :class="item.color"
            class="data-summary-item"
            tag="li"
          >
            <p class="data-summary-number">
              <AnimatedNumber :value="statisticData[item.identifier]" :formatValue="formatValue" :duration="600" />
            </p>
            <p class="data-summary-title">{{item.title}}</p>
          </router-link>
        </ul>
      </el-card>
    </section>

    <section class="data-summary">
      <el-card>
        <div slot="header">
          <i class="fa fa-gears"></i>
          <span> 关键数据指标</span>
        </div>

        <el-table :data="tableData1" :show-header="false" size="small" border stripe style="width: 100%">
          <el-table-column prop="name">
            <template slot-scope="scope">
              <span>{{ scope.row.name | nameTransfer }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="value">
            <template slot-scope="scope">
              <div>
                <span v-if="scope.$index === 0">{{ scope.row.value | number }}</span>
                <span v-else>{{ scope.row.value | RMB }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData2"
          :show-header="false"
          size="small"
          border
          stripe
          style="width: 100%; margin-top: 30px;"
        >
          <el-table-column prop="name">
            <template slot-scope="scope">
              <span>{{ scope.row.name | nameTransfer }}</span>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span>{{ scope.row.value | number }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </section>

    <div class="data-summary">
      <!-- 会员在线人员统计 -->
      <!-- <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 会员在线人员统计</span>
          </div>
          <div class="chart-container">
            <BarChart :chart-data="chartBarData" :width="920" />
          </div>
        </el-card>
      </section> -->
      <!-- 存款统计 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 存款统计</span>
          </div>
          <div class="chart-container">
            <DoughnutChart :chart-data="chartDoughnutData" :width="920" />
          </div>
        </el-card>
      </section>

      <!-- 系统公告 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 系统公告</span>
          </div>
          <div>
            <ul>
              <li v-for="item in systemNotices" :key="item.id" class="note-item clearfix">
                <span class="note-info">
                  <!-- <i v-if="index < 2" class="note-new">New</i> -->
                  {{ item.title }}
                </span>
                <span class="note-time">{{ item.onlineTime | time }}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </section>

      <!-- 系统消息 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 系统消息</span>
          </div>
          <ul>
            <li v-for="item in systemMessages" :key="item.id" class="note-item clearfix">
              <span class="note-info">
                <!-- <i v-if="index < 2" class="note-new">New</i> -->
                {{ item.title }}
              </span>
              <span class="note-time">{{ item.createTime | time }}</span>
            </li>
          </ul>
        </el-card>
      </section>

      <!-- 登录异常警告 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 登录异常警告</span>
          </div>
          <div style="min-height: 120px;">
            <p>暂无内容</p>
          </div>
        </el-card>
      </section>
    </div>
  </div>
</template>

<script type="text/javascript">
import AnimatedNumber from 'animated-number-vue'

import BarChart from '@/components/vue-chartjs/BarChart'
import DoughnutChart from '@/components/vue-chartjs/DoughnutChart'

export default {
  name: 'homeIndex',
  components: {
    AnimatedNumber,
    BarChart,
    DoughnutChart
  },
  filters: {
    nameTransfer (value) {
      switch (value) {
        case 'onlineuseramount':
          return '当前在线人数'
        case 'useramount':
          return '总注册会员数'
        case 'todayuseramount':
          return '今日新增会员数'
        case 'todayorderamount':
          return '今日注单笔数'
        case 'todayordermoney':
          return '今日注单总额'
        case 'totalAwardAmount':
          return '今日派彩总额'
        case 'controlamount':
          return '监控会员数'
        case 'activeuseramount':
          return '活跃用户数'
        case 'depositmoney':
          return '今日充值金额'
        case 'drawmoney':
          return '今日提款金额'
        default:
          return ''
      }
    }
  },
  data () {
    return {
      show: true,
      chartBarData: null,
      chartDoughnutData: null,
      systemNotices: [],
      systemMessages: [],
      statisticData: {},
      dataReady: false,
      tableData1: [],
      tableData2: [],
      summary: [
        { title: '今日新增会员数量', identifier: 'todayuseramount', color: 'blue', path: { name: 'UsersList' } },
        { title: '总会员数量', identifier: 'useramount', color: 'orange', path: { name: 'UsersList' } },
        { title: '今日注单笔数', identifier: 'todayorderamount', color: 'purple', path: { name: 'LotteryStatistics' } },
        { title: '今日注单总额', identifier: 'todayordermoney', color: 'green', path: { name: 'LotteryStatistics' } },
        { title: '今日派彩总额', identifier: 'totalAwardAmount', color: 'red', path: { name: 'LotteryStatistics' } }
      ]
    }
  },
  created () {
    this.fetchIndexStatistic()
    this.fetchSystemNotices()
    this.fetchSystemMessages()
    this.fetchKeyData()
  },
  mounted () {
    this.fetchUsersOnline()
    this.fetchUsersDeposit()
  },
  methods: {
    formatValue (value) {
      return value.toFixed(0)
    },
    // 关键数据统计
    fetchIndexStatistic () {
      this.$axios.get('/api-b/index/statistic').then(response => {
        this.statisticData = response.data.data
        this.dataReady = true
      }).catch(error => console.log(error))
    },
    // 在线会员统计
    fetchUsersOnline () {
      this.$axios.get('/api-b/index/statistic/online').then(response => {
        this.chartBarData = {
          labels: this.$_.map(response.data.data.today, 'time'),
          datasets: [
            {
              label: '今日 会员在线人数',
              backgroundColor: '#60A5B5',
              data: this.$_.map(response.data.data.today, 'amount')
            },
            {
              label: '昨日 会员在线人数',
              backgroundColor: '#5AC79D',
              data: this.$_.map(response.data.data.yesterday, 'amount')
            }
          ]
        }
      }).catch(error => console.log(error))
    },
    fetchSystemNotices () {
      this.$httpAPI.fetchSystemNoticeList({
        params: { pageNo: 1, pageSize: 10 }
      }).then((response) => {
        this.systemNotices = response.data.data
      }).catch((error) => console.log(error))
    },
    fetchSystemMessages () {
      this.$httpAPI.fetchSystemMessageList({
        params: { pageNo: 1, pageSize: 10 }
      }).then((response) => {
        this.systemMessages = response.data.data
      }).catch((error) => console.log(error))
    },
    fetchKeyData () {
      this.$httpAPI.fetchKeyData().then((response) => {
        const obj = response.data.data
        const table1 = []
        const table2 = []

        for (let key in obj) {
          switch (key) {
            case 'onlineuseramount':
              table2[0] = {
                name: key,
                value: obj[key]
              }
              break
            case 'useramount':
              table2[2] = {
                name: key,
                value: obj[key]
              }
              break
            case 'todayuseramount':
              table2[3] = {
                name: key,
                value: obj[key]
              }
              break
            case 'todayorderamount':
              table1[0] = {
                name: key,
                value: obj[key]
              }
              break
            case 'todayordermoney':
              table1[1] = {
                name: key,
                value: obj[key]
              }
              break
            case 'totalAwardAmount':
              table1[2] = {
                name: key,
                value: obj[key]
              }
              break
            case 'controlamount':
              table2[4] = {
                name: key,
                value: obj[key]
              }
              break
            case 'activeuseramount':
              table2[1] = {
                name: key,
                value: obj[key]
              }
              break
            case 'depositmoney':
              table1[3] = {
                name: key,
                value: obj[key]
              }
              break
            case 'drawmoney':
              table1[4] = {
                name: key,
                value: obj[key]
              }
              break
            default:
              return
          }
        }
        this.tableData1 = table1
        this.tableData2 = table2
      }).catch((error) => console.log(error))
    },
    // 存款统计
    fetchUsersDeposit () {
      this.$axios.get('/api-b/index/statistic/deposit').then(response => {
        const obj = response.data.data
        let keys = []
        let values = []

        // 生成统计表需要的标题数组，和数据数组
        for (let k in obj) {
          keys.push(this._transferPayType(k))
          values.push(obj[k].toFixed(2))
        }

        this.chartDoughnutData = {
          labels: keys,
          datasets: [
            {
              backgroundColor: [ '#FC7A6A', '#60A5B5', '#F1C77A', '#8994A8', '#5AC79D' ],
              data: values
            }
          ]
        }
      }).catch(error => console.log(error))
    },
    // 将支付方式转为中文
    _transferPayType (type) {
      switch (type) {
        case 'ali':
          return '支付宝'
        case 'qq':
          return 'Q币'
        case 'remittance':
          return '汇款'
        case 'unionpay':
          return '银联'
        case 'wechat':
          return '微信'
        default:
          return '支付宝'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.data-summary {
  width: 960px;
  margin-bottom: 20px;
}
.data-summary-item {
  float: left;
  width: 18%;
  height: 80px;
  padding: 15px;
  margin: 0 1%;
  cursor: pointer;
  &.red {
    background-color: #FC7A6A;
  }
  &.blue {
    background-color: #60A5B5;
  }
  &.orange {
    background-color: #F1C77A;
  }
  &.purple {
    background-color: #8994A8;
  }
  &.green {
    background-color: #5AC79D;
  }
}
.data-summary-number {
  font-size: 20px;
  color: #fff;
}
.data-summary-title {
  font-size: 12px;
  color: #fff;
}
// 优博公告
.note-item {
  line-height: 26px;
}
.note-info {
  float: left;
}
.note-new {
  font-size: 14px;
  color: red;
}
.note-time {
  float: right;
  color: #bbb;
}
</style>
