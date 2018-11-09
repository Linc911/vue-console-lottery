<template lang="html">
  <div class="finance-statistics">
    <el-card>
      <div slot="header">
        <!-- <i class="fa fa-gears"></i> -->
        <span>平台收支汇总</span>
      </div>
      <div class="chart-container" style="max-width: 760px; margin: 0 auto">
        <DoughnutChart :chart-data="chartDoughnutData" :width="760" />
      </div>
    </el-card>
  </div>
</template>

<script>
import DoughnutChart from '@/components/vue-chartjs/DoughnutChart'

export default {
  name: 'FinanceStatistics',
  components: {
    DoughnutChart
  },
  data () {
    return {
      chartDoughnutData: null
    }
  },
  created () {
    this.fetchFinanceStatistics()
  },
  methods: {
    // 存款统计
    fetchFinanceStatistics () {
      this.$httpAPI.fetchFinanceStatistics('/api-b/index/statistic/deposit').then(response => {
        this.initChartData(response.data.data)
      }).catch(error => console.log(error))
    },
    initChartData (obj) {
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
            backgroundColor: [ '#FC7A6A', '#60A5B5', '#F1C77A', '#8994A8', '#5AC79D', '#409eff' ],
            data: values
          }
        ]
      }
    },
    // 将支付方式转为中文
    _transferPayType (type) {
      switch (type) {
        case 'withdrawMoney':
          return '会员申请取款'
        case 'wechatMoney':
          return '微信支付'
        case 'aliMoney':
          return '支付宝支付'
        case 'bankMoney':
          return '银联支付'
        case 'artificialMoney':
          return '客服填单存款'
        case 'rebateMoney':
          return '会员返水'
        default:
          return '其他'
      }
    }
  }
}
</script>
