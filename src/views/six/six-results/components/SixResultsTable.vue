<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="gameName" label="彩票类型" :min-width="100"  />

      <el-table-column prop="drawno" label="彩票期号" :min-width="80" />

      <el-table-column label="开盘时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="封盘时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.closeTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="开奖时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.drawTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="实际开奖时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.realDrawTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="彩球号码" :min-width="290">
        <template slot-scope="scope">
          <div>
            <BaseBall
              v-for="(ball, index) in scope.row.balls"
              :key="index"
              :number="ball.ball"
              :bgcolor="ball.colour | markSixRGB"
              :class="{ 'last-ball': index === scope.row.balls.length - 1 }"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column label="结算状态" :min-width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.status | lotteryStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="210">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'dialogBets')"
            type="primary"
            size="mini"
          >注单</el-button>

          <el-button
            v-if="scope.row.status === 0"
            type="primary"
            size="mini"
          >开奖</el-button>

          <el-button
            v-if="scope.row.status === 1"
            type="primary"
            size="mini"
          >结算</el-button>

          <template v-if="scope.row.status !== 2 && gameType == 32">
            <el-button
              @click="showDialog(scope.row, 'dialogUpdate')"
              type="primary"
              size="mini"
            >修改</el-button>

            <el-button
              @click="showDialog(scope.row, 'dialogDelete')"
              type="warning"
              size="mini"
            >删除</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <!-- 注单弹框 -->
    <UsersListDialogBets
      :id="activeItem.drawno"
      @on-group-changed="$emit('on-changed')"
      ref="dialogBets"
    />

    <!-- 手动开奖弹框 -->
    <!-- <LotteryResultsDialogManual
      @on-changed="$emit('on-changed')"
      :data="rules"
      ref="dialogManual"
    /> -->

    <!-- 修改弹框 -->
    <SixResultsDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="彩票期号"
      :name="activeItem.drawno"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseBall from '@/components/base/BaseBall'
import UsersListDialogBets from './UsersListDialogBets'
import LotteryResultsDialogManual from './LotteryResultsDialogManual'
import SixResultsDialogUpdate from './SixResultsDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'SixResultsTable',
  components: {
    BaseBall,
    UsersListDialogBets,
    LotteryResultsDialogManual,
    SixResultsDialogUpdate,
    DialogDeleteConfirm
  },
  props: {
    gameType: [ String, Number ],
    required: true
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { drawno: '' },
      deleteHttpAPI: 'deleteSixOfficalItem',
      deleteAttrName: 'drawno',
      deleteId: 'drawno'
    }
  },
  methods: {
    showDialogManual ({ gameType, drawno }, ref) {
      this.$refs[ref].toggleDialogVisible(true)

      // this.rules.gameType = gameType
      // this.rules.drawno = drawno
    }
  }
}
</script>

<style scoped>
.last-ball {
  margin-left: 20px;
}
</style>
