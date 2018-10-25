<template lang="html">
  <section class="results-fast3">
    <el-table
      :data="tableData"
      :max-height="745"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column prop="drawno" label="期号" />

      <el-table-column label="骰子点数" :min-width="200">
        <template slot-scope="scope">
          <BaseDice :number="Number(scope.row.ball1[0])" />
          <BaseDice :number="Number(scope.row.ball2[0])" />
          <BaseDice :number="Number(scope.row.ball3[0])" />
        </template>
      </el-table-column>

      <el-table-column prop="ballSum" label="总和">
        <template slot-scope="scope">
          <span>{{scope.row.ballSum.join(' ')}}</span>
        </template>
      </el-table-column>

      <el-table-column label="围骰">
        <template slot-scope="scope">
          <span>{{Number(scope.row.all[0]) | diceRepeat}}</span>
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
  </section>
</template>

<script>
import LotteryBall from '@/components/base/LotteryBall'
import BaseDice from '@/components/base/BaseDice'

export default {
  name: 'lotteryResultsFast3',
  components: {
    LotteryBall,
    BaseDice
  },
  data () {
    return {
      tableData: [],
      page: {
        total: 10,
        current: 1,
        size: 10
      }
    }
  },
  created () {
    this.fetchLotteryResults({ current: this.page.current = 1, size: this.page.size = 10 })
  },
  watch: {
    $route () {
      this.fetchLotteryResults({ current: this.page.current = 1, size: this.page.size = 10 })
    }
  },
  methods: {
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.fetchLotteryResults({ current: this.page.current = currentPage, size: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.fetchLotteryResults({ current: this.page.current = 1, size: this.page.size = pageSize })
    },
    // 获取赔率
    fetchLotteryResults (page) {
      this.$axios.get('/api-g/result/2', {
        params: { type: this.$route.params.id, pageNo: this.page.current, pageSize: this.page.size }
      }).then(response => {
        this.tableData = response.data.data
        this.page.total = response.data.amount // 分页对象赋值
      }).catch(error => console.log(error))
    }
  }
}
</script>
