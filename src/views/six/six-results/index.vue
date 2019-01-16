<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="requestParams.gameType" @tab-click="handleTabClick">
      <el-tab-pane label="快速六合彩" name="30" />
      <el-tab-pane label="5分六合彩" name="31" />
      <el-tab-pane label="香港六合彩" name="32" />
    </el-tabs>

    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <LotteryResultsSearch @on-search="handleSearch" ref="resultsSearch" />
      </div>
      <div slot="right">
        <el-button
          v-if="requestParams.gameType === '32'"
          @click="$refs.dialogCreate.toggleDialogVisible(true)"
          type="primary"
          size="small"
        >
          <i class="el-icon-plus"></i>
          <span>开盘录入</span>
        </el-button>
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <SixResultsTable @on-changed="fetchTableData()" :data="tableData" :gameType="requestParams.gameType" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :httpURL="tableHttpAPI"
        :requestParams="requestParams"
      />
    </div>

    <!-- 创建弹框 -->
    <SixResultsDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutMixin, tableWithPaginationMixin } from '@/mixins'

import LotteryResultsSearch from './components/LotteryResultsSearch'
import SixResultsTable from './components/SixResultsTable'
import SixResultsDialogCreate from './components/SixResultsDialogCreate'

export default {
  name: 'MarkSixResults',
  components: {
    LotteryResultsSearch,
    SixResultsTable,
    SixResultsDialogCreate
  },
  data () {
    return {
      tableHttpAPI: 'fetchSixRulesList',
      requestParams: { gameType: '30', pageNo: 1, pageSize: 10 },
      page: { current: 0, size: 10, total: 10 }
    }
  },
  mixins: [ searchLayoutMixin, tableWithPaginationMixin ],
  methods: {
    handleTabClick (tab) {
      // 选择不同彩种时，更新参数，获取数据
      this.$set(this.requestParams, 'gameType', tab.name)

      this.fetchTableData()
    }
  }
}
</script>
