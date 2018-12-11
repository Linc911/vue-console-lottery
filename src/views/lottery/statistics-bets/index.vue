<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <LotteryStatisticsSearch @on-search="handleSearch" />

    <!-- 表格 -->
    <div class="chart-container">
      <BarChart :chart-data="chartBarData" :width="920" />
    </div>
  </div>
</template>

<script>
import { searchOuterMixin } from '@/mixins'

import BarChart from '@/components/vue-chartjs/BarChart'

import LotteryStatisticsSearch from './components/LotteryStatisticsSearch'

export default {
  name: 'LottoryStatisticsBetsUsers',
  components: {
    BarChart,
    LotteryStatisticsSearch
  },
  mixins: [ searchOuterMixin ],
  data () {
    return {
      chartBarData: null,
      tableData: [],
      tableHttpAPI: 'fetchLotterStatisticsBets',
      requestParams: { dateTime: Date.parse(new Date()) }
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    fetchTableData () {
      // 时间不能为空；默认给当天时间
      if (!this.requestParams.dateTime) {
        this.requestParams.dateTime = Date.parse(new Date())
      }

      this.$httpAPI.fetchLotterStatisticsBets({ params: this.requestParams }).then(response => {
        const result = response.data.data

        const rawLabels = this.$_.filter(result, (item) => !(Number(item.businessTime) % 2))
        const labels = this.$_.map(rawLabels, 'businessTime')

        // 初始化统计图像的数据
        this.chartBarData = {
          labels,
          datasets: [
            {
              label: '输赢总额',
              backgroundColor: '#60A5B5',
              data: this.$_.map(result, 'totalAwardAmount')
            },
            {
              label: '注单总额',
              backgroundColor: '#5AC79D',
              data: this.$_.map(result, 'totalAmount')
            },
            {
              label: '注单总数',
              backgroundColor: '#F1C77A',
              data: this.$_.map(result, 'totalBets')
            }
          ]
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
