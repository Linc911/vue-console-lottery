<template>
  <div class="home-index">
    <section class="data-summary">
      <el-card>
        <div slot="header">
          <i class="fa fa-gears"></i>
          <span> 关键数据实时指标</span>
        </div>
        <div>
          <el-row :gutter="20">
            <el-col  v-for="item in summary" :key="item.title" :span="6">
              <div class="data-summary-item" :class="item.color">
                <p class="data-summary-number">{{item.number}}</p>
                <p class="data-summary-title">{{item.title}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
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
          <div>
            <LineChart :data="chartLineData" :options="chartLineOptions" :width="920" />
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
          <div>
            <DoughnutChart :data="chartDoughnutData" :width="920" />
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
import  LineChart from '@/components/vue-chartjs/LineChart'
import  DoughnutChart from '@/components/vue-chartjs/DoughnutChart'

export default {
  components: {
    LineChart,
    DoughnutChart
  },
  data () {
    return {
      chartLineData: {
        labels: [
          '00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00',
          '14:00', '16:00', '18:00', '20:00', '22:00', '23:59'
        ],
        datasets: [
          {
            label: '今日 会员在线人数',
            backgroundColor: '#699478',
            data: this.generateRandomInteger(10, 200, 13)
          }
        ]
      },
      chartLineOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      },
      chartDoughnutData: {
        labels: [ '微信', '支付宝', 'QQ', '银联卡', '汇款' ],
        datasets: [
          {
            backgroundColor: [ '#FC7A6A', '#60A5B5', '#F1C77A', '#8994A8', '#5AC79D' ],
            data: this.generateRandomInteger(10000, 1000000, 5)
          }
        ]
      },
      summary: [
        { title: '在线会员数量', number: Math.ceil(Math.random() * 1000), color: 'red' },
        { title: '今日新增会员数量', number: Math.ceil(Math.random() * 1000), color: 'blue' },
        { title: '总会员数量', number: Math.ceil(Math.random() * 1000), color: 'orange' },
        // { title: '今日注单笔数', number: Math.ceil(Math.random() * 1000), color: 'red' },
        { title: '今日注单总额', number: Math.ceil(Math.random() * 1000), color: 'green' },
      ]
    }
  },
  methods: {
    generateRandomInteger(min, max, n) {
      if (n <= 0) {
        n = 1
      }

      let arr = []
      for(;;) {
        arr.push(Math.ceil(Math.random() * max + min))
        if (arr.length >= n) {
          break;
        }
      }
      return arr
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
  width: 100%;
  height: 80px;
  padding: 15px;
  &.red {
    background-color: #FC7A6A;
  }
  &.blue {
    background-color: #60A5B5;
  }
  &.orange {
    background-color: #F1C77A;
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
