<template lang="html">
  <el-dialog
    :visible.sync="dialogVisible"
    title="投注记录列表"
    width="80%"
    style="min-width: 768px"
  >
    <!-- 条件筛选 -->
    <el-form :model="formData" size="small" inline>
      <el-form-item label="彩票期号">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'drawno', $event)"
          placeholder="可模糊搜索"
          :styles="{ width: '120px' }"
          ref="drawno"
        />
      </el-form-item>

      <FormSelectGame
        @on-change="$set(formData, 'gameType', $event)"
        httpAPIName="fetchGamesMenu"
        :httpAPIParams="{ params: { type: 1 } }"
        labelAttr="name"
        valueAttr="id"
        prop="gameType"
        label="游戏类型"
        filterable
        ref="gameType"
      />

      <el-form-item label="注单状态">
        <FormSelectArray
          @on-change="$set(formData, 'status', $event)"
          :options="[ '未结算', '中奖', '未中奖' ]"
          :styles="{ width: '100px' }"
          ref="status"
        />
      </el-form-item>

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <el-table :data="tableData" size="small" highlight-current-row border :row-class-name="tableRowClassName"
      max-height="600">

        <el-table-column type="index" :width="36" />

        <el-table-column prop="username" label="账户名称" :width="100" />

        <el-table-column prop="currentDrawno" label="投注期号" :min-width="90" />

        <el-table-column prop="gameName" label="彩票类型" :min-width="120" />

        <el-table-column prop="totalBets" label="投注数" :width="95" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.totalBets }}</span>
            <BaseIcon @on-click="showDialog(scope.row, 'dialogDetail')" class="pull-right" />
          </template>
        </el-table-column>

        <el-table-column prop="totalAmount" label="投注金额" :min-width="95" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.totalAmount | RMB }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="totalAwardAmount" label="中奖金额" :min-width="95" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.totalAwardAmount | RMB }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="status" label="注单状态" :min-width="70">
          <template slot-scope="scope">
            <span>{{ scope.row.status | lotteryOrderStatus }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="id" label="注单ID" :min-width="150" />

        <el-table-column prop="createDate" label="投注时间" :min-width="140">
          <template slot-scope="scope">
            <span>{{ scope.row.createDate | time }}</span>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 详情弹框 -->
    <DialogBetsDetail :id="activeItem.id" ref="dialogDetail" />
  </el-dialog>
</template>

<script>
import { onePageMixin } from '@/mixins'

import BaseIcon from '@/components/base/BaseIcon'
import FormInput from '@/components/form/FormInput'
import FormSelectGame from '@/components/form/FormSelectGame'
import FormSelectArray from '@/components/form/FormSelectArray'
import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'

import DialogBetsDetail from '@/components/dialog/DialogBetsDetail'

export default {
  name: 'UsersListDialogLogs',
  components: {
    FormInput,
    FormSelectGame,
    FormSelectArray,
    BasePopoverTextarea,
    BaseIcon,
    DialogBetsDetail
  },
  mixins: [ onePageMixin ],
  data () {
    return {
      activeItem: { id: '' },
      tableHttpAPI: 'fetchLotterBetsList',
      requestParams: { userId: this.id, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  watch: {
    id () {
      // 点击同一列数据时，因为id没有变化,不发送请求；
      // 每次id变动的时候，都把同一列弹框需要的数据请求回来
      if (this.dialogVisible || !this.tableData.length) {
        this.page.current = 1 // 将分页重置为第一页
        this.reset() // 清除搜索结果
        this.$set(this.requestParams, 'userId', this.id) // 重新赋值 userId

        this.fetchTableData({ userId: this.id })
      }
    }
  },
  methods: {
    // 判断表格中的 注单为赢时；高亮显示这行
    tableRowClassName ({ row }) {
      if (row.totalAwardAmount > 0) {
        return 'warning-row'
      }
      return ''
    }
  }
}
</script>
