<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="gameName" label="彩票类型" />

      <el-table-column prop="drawno" label="彩票期号" :width="95" />

      <el-table-column label="开奖时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="彩球号码" :min-width="200">
        <template slot-scope="scope">
          <template v-for="(ball, index) in scope.row.balls">
            <BaseBall :number="Number(ball)" :key="index" style="margin-bottom: 5px" />
          </template>
        </template>
      </el-table-column>

      <el-table-column prop="ballSum" label="总和" :width="45" />

      <el-table-column label="总和大小" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.bigSmall | sumBigSmall }}</span>
        </template>
      </el-table-column>

      <el-table-column label="总和单双" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.oddEven | sumOddEven }}</span>
        </template>
      </el-table-column>

      <el-table-column label="冠亚军和值大小" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.sumBigSmall | sumBigSmall }}</span>
        </template>
      </el-table-column>

      <el-table-column label="冠亚军和值单双" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.sumOddEven | sumOddEven }}</span>
        </template>
      </el-table-column>

      <el-table-column label="总和龙虎" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.dragonTiger | sumDragonTiger }}</span>
        </template>
      </el-table-column>

      <el-table-column label="总和龙虎对比" :width="60">
        <template slot-scope="scope">
          <span>{{ scope.row.dragonTigerCompare | sumDragonTigerCompare }}</span>
        </template>
      </el-table-column>

      <el-table-column label="结算状态" :width="70">
        <template slot-scope="scope">
          <span>{{scope.row.status | lotteryStatus}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" >
        <!-- <template slot-scope="scope">
          <el-button
            v-if="scope.row.status !== 2"
            @click="showDialogHandwork(scope.row)"
            type="primary"
            size="mini"
          >手动结算</el-button>

          <el-button
            v-if="scope.row.status !== 2"
            @click="showDialogCancel(scope.row.drawno)"
            type="primary"
            size="mini"
          >撤单</el-button>
        </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseBall from '@/components/base/BaseBall'

export default {
  name: 'ResultsElevenTable',
  components: {
    BaseBall
  },
  mixins: [ tableComponentMixin ],
  methods: {
    showDialogHandwork (resultObj) {
      const { drawno, gameName, ball1, ball2, ball3, ball4, ball5 } = resultObj
      this.activeItem = {
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
      this.activeItem = {
        drawno,
        type: 3
      }

      this.$refs.dialogCancel.toggleDialogVisible(true)
    }
  }
}
</script>
