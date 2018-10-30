<template lang="html">
  <div class="chart-container">
    <DoughnutChart :chart-data="chartDoughnutData" :width="920" />
  </div>
</template>

<script>
import DoughnutChart from '@/components/vue-chartjs/DoughnutChart'

export default {
  name: 'LotteryUsersInfo',
  components: {
    DoughnutChart
  },
  data () {
    return {
      chartDoughnutData: null
    }
  },
  created () {
    this.fetchUsersDeposit()
  },
  mounted () {
    this.$notify({
      title: '提示',
      message: '页面使用模拟数据，接口正在调试中...',
      type: 'warning',
      duration: 8000
    })
  },
  methods: {
    showTip () {
      this.$message.warning('该功能正在开发中...')
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
