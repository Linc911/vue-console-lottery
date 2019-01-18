<template lang="html">
  <div>
    <el-table
      :data="data"
      :row-class-name="tableRowClassName"
      max-height="600"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :width="36" />

      <el-table-column prop="gameName" label="彩票类型" :min-width="100"  />

      <el-table-column prop="drawno" label="彩票期号" :min-width="80" />

      <el-table-column label="开奖时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="彩球号码" :min-width="260">
        <template slot-scope="scope">
          <div>
            <!-- 骰子类型 -->
            <template v-if="scope.row.gameType >= 7 && scope.row.gameType <= 17 && scope.row.gameType != 10">
              <span v-for="(ball, index) in scope.row.balls" :key="index">
                <BaseDice :number="ball" />
              </span>
            </template>

            <!-- 其他类型 -->
            <template v-else>
              <span v-for="(ball, index) in scope.row.balls" :key="index">
                <LotteryBall :number="ball" />
              </span>
            </template>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="ballSum" label="总和" :min-width="45" />

      <el-table-column prop="amount" label="订单数量" />

      <el-table-column prop="totalBets" label="注单数量" />

      <el-table-column prop="totalAmount" label="下注金额">
        <template slot-scope="scope">
          <span>{{ scope.row.totalAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="totalAwardAmount" label="奖金金额">
        <template slot-scope="scope">
          <span>{{ scope.row.totalAwardAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column label="结算状态" :min-width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.status | lotteryStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="140">
        <template slot-scope="scope">
          <div v-if="scope.row.status !== 2">
            <el-button
              @click="showDialogManual(scope.row, 'dialogManual')"
              type="primary"
              size="mini"
            >手动开奖</el-button>

            <!-- <el-button
              @click="showDialog(scope.row, 'dialogCancel')"
              type="primary"
              size="mini"
            >撤单</el-button> -->
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 手动开奖弹框 -->
    <LotteryResultsDialogManual
      @on-changed="$emit('on-changed')"
      :data="rules"
      ref="dialogManual"
    />

    <!-- 撤单弹框 -->
    <LotteryResultsDialogCancel
      @on-canceled="$emit('on-changed')"
      :data="activeItem"
      ref="dialogCancel"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseDice from '@/components/base/BaseDice'
import LotteryBall from '@/components/base/LotteryBall'
import LotteryResultsDialogManual from './LotteryResultsDialogManual'
import LotteryResultsDialogCancel from './LotteryResultsDialogCancel'

export default {
  name: 'ResultsElevenTable',
  components: {
    BaseDice,
    LotteryBall,
    LotteryResultsDialogManual,
    LotteryResultsDialogCancel
  },
  props: {
    rules: {
      type: Object,
      required: true
    }
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: this.rules
    }
  },
  methods: {
    // 判断表格中的 投注金额 < 奖金金额；高亮显示这行
    tableRowClassName ({ row }) {
      if (row.totalAmount < row.totalAwardAmount) {
        return 'warning-row'
      }
      return ''
    },
    showDialogManual ({ gameType, drawno }, ref) {
      this.$refs[ref].toggleDialogVisible(true)

      this.rules.gameType = gameType
      this.rules.drawno = drawno
    }
  }
}
</script>
