<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="会员日志列表" width="80%" style="min-width: 760px">
    <!-- 条件筛选 -->
    <el-form :model="searchData" size="small" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        label="账户名称"
        width="174px"
        ref="username"
      />

      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'drawno', $event)"
        label="彩票期号"
        width="174px"
        ref="drawno"
      />

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

      <FormSelectStatic
        @on-change="$set(formData, 'status', $event)"
        :options="[
          { value: 0, label: '未结算' },
          { value: 1, label: '中奖' },
          { value: 2, label: '未中奖' }
        ]"
        label="处理状态"
        width="100px"
        ref="status"
      />

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <el-table :data="tableData" size="small" highlight-current-row border>

        <el-table-column type="index" :width="36" />

        <el-table-column prop="id" label="注单ID" :min-width="150" />

        <el-table-column prop="currentDrawno" label="投注期号" :min-width="90" />

        <el-table-column prop="gameName" label="彩票类型" :min-width="120" />

        <el-table-column prop="username" label="账户名称" :width="100" />

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

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 详情弹框 -->
    <DialogBetsDetail :id="activeItem.id" ref="dialogDetail" />
  </el-dialog>
</template>

<script>
import BaseIcon from '@/components/base/BaseIcon'
import DialogBetsDetail from '@/components/dialog/DialogBetsDetail'

import FormInput from '@/components/form/FormInput'
import FormSelectGame from '@/components/form/FormSelectGame'
import FormSelectStatic from '@/components/form/FormSelectStatic'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'
import BasePagination from '@/components/base/BasePagination'
import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'

export default {
  name: 'UsersListDialogLogs',
  components: {
    FormInput,
    FormSelectGame,
    FormSelectStatic,
    SearchIcon,
    SearchReset,
    BasePopoverTextarea,
    BasePagination,
    BaseIcon,
    DialogBetsDetail
  },
  props: {
    userId: {
      type: [ String, Number ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      searchData: {},
      activeItem: { id: '' },
      tableData: [],
      tableAPI: 'fetchLotterBetsList',
      requestParams: { userId: this.userId, pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  watch: {
    userId () {
      this.page.current = 1
      this.$set(this.requestParams, 'userId', this.userId)

      this.fetchUserBets(this.userId)
    }
  },
  methods: {
    // 分页变化时，请求新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchUserBets (userId) {
      this.$httpAPI[this.tableAPI]({
        params: { userId, pageNo: 1, pageSize: 10 }
      }).then(response => {
        this.page.total = response.data.amount

        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
          this.$message.info('暂无数据返回')
        }
      }).catch(error => console.log(error))
    },
    // 通知父组件触发搜索事件；将请求参数传给父组件
    search () {
      this.$emit('on-search', this.formData)
    },
    // 将全部的 form 组件重置为初始值；初始化组件内容的数据
    reset () {
      for (let key in this.$refs) {
        this.$refs[key].reset()
      }

      this.$utils.initializeObjectProperties(this.formData)
    },
    // 显示弹框；将当前点击的数据记录下来
    showDialog (item, ref) {
      this.activeItem = item

      this.$refs[ref].toggleDialogVisible(true)
    },
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
