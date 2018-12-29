<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="每注详情"
    width="70%"
    style="min-width: 768px"
    append-to-body
  >
    <el-table :data="bets" size="small" max-height="441" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="ballValue" label="投注内容" :min-width="300">
        <template slot-scope="scope">
          <div>
            <!-- 骰子类型 -->
            <template v-if="gameType >= 9 && gameType <= 17">
              <span v-for="(ball, index) in scope.row.ballValue" :key="index">
              <!-- 数值 用球表示 -->
              <template v-if="/^[0-9]+/.test(ball)">
                <BaseDice :number="ball" />
              </template>

              <!-- 数值 用球表示 -->
                <template v-else>
                  <span>{{ ball }}</span>
                </template>
              </span>
            </template>

            <!-- 其他类型 -->
            <template v-else>
              <span v-for="(ball, index) in scope.row.ballValue" :key="index">
                <!-- 数值 用球表示 -->
                <template v-if="/^[0-9]+/.test(ball)">
                  <LotteryBall :number="ball" />
                </template>

                <!-- 数值 用球表示 -->
                <template v-else>
                  <span>{{ ball }}</span>
                </template>
              </span>
            </template>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="actor" label="玩法类型" :min-width="120" />

      <el-table-column prop="rate1" label="赔率" :min-width="45" />

      <el-table-column prop="betAmount" label="投注金额" :min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.betAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="awardAmount" label="中奖金额" :min-width="80" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.awardAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="betResult" label="投注输赢" :min-width="80" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.betResult | betResult }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
import LotteryBall from '@/components/base/LotteryBall'
import BaseDice from '@/components/base/BaseDice'

export default {
  name: 'DialogBetsDetail',
  components: {
    LotteryBall,
    BaseDice
  },
  props: {
    id: {
      type: [ String, Number ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      bets: [],
      gameType: 0
    }
  },
  watch: {
    id () {
      this.fetchBetDetail(this.id)
    }
  },
  methods: {
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // 用传入的ID 获取注单详情
    fetchBetDetail (id) {
      this.$httpAPI.fetchLotterBetDetail({
        params: { id }
      }).then(response => {
        if (response.data.data) {
          this.bets = response.data.data
          this.gameType = response.data.gameType
        } else {
          this.bets = []
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
