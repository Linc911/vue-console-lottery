<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>

      <el-table-column type="index" :width="40" />

      <el-table-column prop="username" label="账户名称" />

      <el-table-column prop="createDate" label="投注时间" :width="140">
        <template slot-scope="scope">
          <span>{{scope.row.createDate | time}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="orderId" label="注单ID" :width="150" />

      <el-table-column prop="currentDrawno" label="当前投注期号" :width="95" />

      <el-table-column prop="gameName" label="彩票类型" :min-width="140" />

      <el-table-column prop="betsType" label="投注主类型">
        <template slot-scope="scope">
          <span>{{scope.row.betsType | betType}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="totalBets" label="总投注数" :width="80">
        <template slot-scope="scope">
          <span>{{scope.row.totalBets}}</span>
          <BaseMore @on-click="showDialog(scope.row.bet, 'dialogDetail')" class="pull-right" />
        </template>
      </el-table-column>

      <el-table-column prop="totalAmount" label="总投注金额" :min-width="60">
        <template slot-scope="scope">
          <span>{{scope.row.totalAmount | RMB}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="注单状态">
        <template slot-scope="scope">
          <span>{{scope.row.status | betStatus}}</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <BetsDetail :bets="activeItem" ref="dialogDetail" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseMore from '@/components/base/BaseMore'
import BetsDetail from './BetsDetail'

export default {
  name: 'UserBetsTable',
  components: {
    BaseMore,
    BetsDetail
  },
  mixins: [ tableComponentMixin ]
}
</script>
