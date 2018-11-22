<template>
  <el-dialog :visible.sync="dialogVisible" title="投注每注详情" width="768px" center>
    <h4 style="margin-top: 0">投注类型：{{ bets.betType | betType }}</h4>

    <el-table :data="betss" size="small" max-height="441" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="childType" label="投注内容" :width="360">
        <template slot-scope="scope">
          <span>{{ scope.row.childType | betSubtype }}</span>
          <span v-if="scope.row.ballIndex > 0"> 第{{ scope.row.ballIndex | capitalizeNumber }}球</span>
          <span v-if="bets.betType >= 3" style="margin-left: 15px">
            <span v-for="(ball, i) in scope.row.ballNums" :key="i">
              <LotteryBall :number="ball" />
            </span>
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="rate" label="注单赔率" :width="70" />

      <el-table-column prop="betAmount" label="投注金额">
        <template slot-scope="scope">
          <span>{{ scope.row.betAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="betAmount" label="中奖金额">
        <template slot-scope="scope">
          <span>{{ scope.row.awardAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="betResulte" label="投注结果" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.betResulte | betResult }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
import LotteryBall from '@/components/base/LotteryBall'

export default {
  name: 'DialogBetsDetail',
  components: {
    LotteryBall
  },
  props: {
    bets: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    betss () {
      switch (this.bets.betType) {
        case 1:
          return [
            ...this.bets.totalSum,
            ...this.bets.firstBall,
            ...this.bets.secondBall,
            ...this.bets.thirdBall,
            ...this.bets.fourthBall,
            ...this.bets.fifthBall
          ]
        case 2:
          return [
            ...this.bets.firstBall,
            ...this.bets.secondBall,
            ...this.bets.thirdBall,
            ...this.bets.fourthBall,
            ...this.bets.fifthBall
          ]
        case 3:
          return this.bets.bettings
        case 4:
          return this.bets.bettings
        case 5:
          return this.bets.bettings
        default:
          return []
      }
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
