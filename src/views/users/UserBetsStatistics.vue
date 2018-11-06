<template lang="html">
  <section class="bets-statistics">
    <BarChart :chart-data="chartBarData" :width="920" />
  </section>
</template>

<script>
import BarChart from '@/components/vue-chartjs/BarChart'

export default {
  name: 'betsStatistics',
  components: {
    BarChart
  },
  data () {
    return {
      chartBarData: null,
      chartLineOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  created () {
    this.fetchBetsInfoWithinHalfMonth()
  },
  methods: {
    fetchBetsInfoWithinHalfMonth () {
      this.$axios.get('/api-g/backend/statisticsBetOrder', {
        params: { userId: this.$route.params.id }
      }).then(response => {
        this.chartBarData = {
          labels: this.$_.map(response.data.data, 'businessTime'),
          datasets: [
            {
              label: '近15天会员投注统计',
              backgroundColor: '#699478',
              data: this.$_.map(response.data.data, 'totalBets')
            }
          ]
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
