<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="40" />

      <el-table-column prop="gameName" label="彩票类型" />

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

      <el-table-column label="结算状态">
        <template slot-scope="scope">
          <span>{{scope.row.status | lotteryStatus}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="240">
        <template slot-scope="scope">
          <!-- <el-button @click="CheckoutManual(scope.row)" type="primary" size="mini">手动结算</el-button> -->
          <!-- <el-button @click="showTip" type="primary" size="mini">开奖详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">注单详情</el-button>
          <el-button @click="showTip" type="primary" size="mini">修改配置</el-button>
          <el-button @click="showTip" type="primary" size="mini">删除开盘</el-button> -->
          <!-- <el-button v-if="scope.row.status !== 2" @click="cancelOrder" type="primary" size="mini">撤单</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseDice from '@/components/base/BaseDice'

export default {
  name: 'ResultsFast3Table',
  components: {
    BaseDice
  },
  mixins: [ tableComponentMixin ]
}
</script>
