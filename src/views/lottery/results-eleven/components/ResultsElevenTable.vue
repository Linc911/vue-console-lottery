<template lang="html">
  <div class="deposit-form-table">
    <el-table
      :data="data"
      :max-height="745"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column prop="gameName" label="彩票类型" />

      <el-table-column prop="drawno" label="期号" :width="80" />

      <el-table-column prop="dateTime" label="开奖时间" :width="140" />

      <el-table-column label="彩球号码" :width="200">
        <template slot-scope="scope">
          <LotteryBall :number="Number(scope.row.ball1[0])" />
          <LotteryBall :number="Number(scope.row.ball2[0])" />
          <LotteryBall :number="Number(scope.row.ball3[0])" />
          <LotteryBall :number="Number(scope.row.ball4[0])" />
          <LotteryBall :number="Number(scope.row.ball5[0])" />
        </template>
      </el-table-column>

      <el-table-column prop="ballSum" label="总和" :min-width="110">
        <template slot-scope="scope">
          <span>{{scope.row.ballSum.join(' ')}}</span>
        </template>
      </el-table-column>

      <el-table-column label="龙虎" :width="45">
        <template slot-scope="scope">
          <span>{{scope.row.dragonTiger.toString()}}</span>
        </template>
      </el-table-column>

      <el-table-column label="结算状态">
        <template slot-scope="scope">
          <span>{{scope.row.status | lotteryStatus}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="140">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.status !== 2"
            @click="showDialogHandwork(scope.row)"
            type="primary"
            size="mini"
          >手动结算</el-button>
          <!-- <el-button @click="showTip" type="primary" size="mini">开奖详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">注单详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">修改配置</el-button>
          <el-button @click="showTip" type="primary" size="mini">删除开盘</el-button> -->
          <el-button
            v-if="scope.row.status !== 2"
            @click="showDialogCancel(scope.row.drawno)"
            type="primary"
            size="mini"
          >撤单</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 手工结算弹框 -->
    <ResultsElevenDialogHandwork @on-success="$emit('on-handwork-completed')" :data="activeResult" ref="dialogHandwork" />

    <!-- 撤单弹框 -->
    <ResultsElevenDialogCancel :data="activeResult" ref="dialogCancel" />
  </div>
</template>

<script>
import LotteryBall from '@/components/base/LotteryBall'
import ResultsElevenDialogHandwork from './ResultsElevenDialogHandwork'
import ResultsElevenDialogCancel from './ResultsElevenDialogCancel'

export default {
  name: 'ResultsElevenTable',
  components: {
    LotteryBall,
    ResultsElevenDialogHandwork,
    ResultsElevenDialogCancel
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeResult: {}
    }
  },
  methods: {
    showDialogHandwork (resultObj) {
      const { drawno, gameName, ball1, ball2, ball3, ball4, ball5 } = resultObj
      this.activeResult = {
        drawno,
        gameName,
        type: 3,
        ball1: Number(ball1[0]),
        ball2: Number(ball2[0]),
        ball3: Number(ball3[0]),
        ball4: Number(ball4[0]),
        ball5: Number(ball5[0])
      }

      this.$refs.dialogHandwork.toggleDialogVisible(true)
    },
    showDialogCancel (drawno) {
      this.activeResult = {
        drawno,
        type: 3
      }

      this.$refs.dialogCancel.toggleDialogVisible(true)
    }
  }
}
</script>
