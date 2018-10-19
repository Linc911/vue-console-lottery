<template lang="html">
  <section class="bets-statistics">
    <LineChart :data="chartLineData" :options="chartLineOptions" :width="920" />
  </section>
</template>

<script>
import  LineChart from '@/components/vue-chartjs/LineChart'

export default {
  name: 'betsStatistics',
  components: {
    LineChart
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
        console.log(response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
