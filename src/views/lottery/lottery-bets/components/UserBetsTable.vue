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

      <el-table-column prop="username" label="账户名称" :width="100" />

      <el-table-column prop="currentDrawno" label="投注期号" :min-width="90" />

      <el-table-column prop="id" label="注单ID" :min-width="150" />

      <el-table-column prop="gameName" label="彩票类型" :min-width="120" />

      <el-table-column prop="totalBets" label="投注数" :width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.totalBets }}</span>
          <BaseIcon @on-click="showDialog(scope.row, 'dialogDetail')" class="pull-right" />
        </template>
      </el-table-column>

      <el-table-column prop="totalAmount" label="投注金额" :min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.totalAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="totalAwardAmount" label="中奖金额" :min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.totalAwardAmount | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="注单状态" :min-width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.status | lotteryOrderStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="createDate" label="投注时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createDate | time }}</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <DialogBetsDetail :id="activeItem.id" ref="dialogDetail" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseIcon from '@/components/base/BaseIcon'
import DialogBetsDetail from '@/components/dialog/DialogBetsDetail'

export default {
  name: 'UserBetsTable',
  components: {
    BaseIcon,
    DialogBetsDetail
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { id: '' }
    }
  },
  methods: {
    // 判断表格中的 注单为赢时；高亮显示这行
    tableRowClassName ({ row }) {
      if (row.status === 1) {
        return 'warning-row'
      }
      return ''
    }
  }
}
</script>
