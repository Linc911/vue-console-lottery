<template>
  <div class="home-index">
    <section class="data-summary">
      <el-card>
        <div slot="header">
          <i class="fa fa-gears"></i>
          <span> 关键数据实时指标</span>
        </div>
        <ul class="clearfix">
          <li v-for="item in summary" :key="item.identifier" :class="item.color" class="data-summary-item" >
            <p class="data-summary-number">
              <AnimatedNumber :value="statisticData[item.identifier]" :formatValue="formatValue" :duration="600" />
            </p>
            <p class="data-summary-title">{{item.title}}</p>
          </li>
        </ul>
      </el-card>
    </section>
    <div class="data-summary">
      <!-- 会员在线人员统计 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 会员在线人员统计</span>
          </div>
          <div class="chart-container">
            <BarChart :chart-data="chartBarData" :width="920" />
          </div>
        </el-card>
      </section>
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
      <!-- 优博公告 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 优博公告</span>
          </div>
          <div>
            <ul>
              <li v-for="n in 4" :key="n" class="note-item clearfix">
                <span class="note-info"><i v-if="n === 1" class="note-new">New</i>【系统更新】 11月17日优博平台升级，详情请点击查看详情内容！</span>
                <span class="note-time">2018-11-17 15:07:20</span>
              </li>
            </ul>
          </div>
        </el-card>
      </section>
      <!-- 站内公告 -->
      <section class="data-summary">
        <el-card>
          <div slot="header">
            <i class="fa fa-gears"></i>
            <span> 站内公告</span>
          </div>
          <div style="min-height: 120px;">
            <p>暂无内容</p>
          </div>
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
  data () {
    return {
      chartBarData: null,
      chartDoughnutData: null,
      statisticData: {},
      summary: [
        { title: '在线会员数量', identifier: 'onlineuseramount', color: 'red' },
        { title: '今日新增会员数量', identifier: 'todayuseramount', color: 'blue' },
        { title: '总会员数量', identifier: 'useramount', color: 'orange' },
        { title: '今日注单笔数', identifier: 'todayorderamount', color: 'purple' },
        { title: '今日注单总额', identifier: 'todayordermoney', color: 'green' }
      ]
    }
  },
  created () {
    this.fetchIndexStatistic()
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
