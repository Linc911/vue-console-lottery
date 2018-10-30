<template lang="html">
  <section class="lottery-users">
    <!-- 条件筛选 -->
    <FilterArea />
    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" />

        <el-table-column prop="gameName" label="游戏名称" />
        <el-table-column prop="betsNumber" label="下注笔数" />
        <el-table-column prop="betsMoney" label="下注金额" />
        <el-table-column prop="betsEffect" label="有效投注" />
        <el-table-column prop="win" label="净输赢" />

        <!-- <el-table-column prop="operations" label="操作" :min-width="200">
          <template slot-scope="scope">
            <el-button @click="showTip" type="primary" size="mini">修改设置</el-button>
            <el-button @click="showTip" type="primary" size="mini">删除设置</el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <!-- 分页 -->
      <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="nuknown" />
    </div>
  </section>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'LotteryUsersInfo',
  components: {
    FilterArea,
    BasePagination
  },
  data () {
    return {
      tableData: [
        { gameName: '江苏快3', betsNumber: 12345, betsMoney: 34567890, betsEffect: 1245, win: 234567 },
        { gameName: '广东11选5', betsNumber: 12345, betsMoney: 34567890, betsEffect: 1245, win: 234567 }
      ],
      pageTotal: 0
    }
  },
  created () {
    // this.fetchUsersList()
  },
  mounted () {
    this.$notify({
      title: '提示',
      message: '页面使用模拟数据，接口正在调试中...',
      type: 'warning',
      duration: 8000
    })
  },
  methods: {
    showTip () {
      this.$message.warning('该功能正在开发中...')
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchUsersList (page) {
      this.$httpAPI.fetchUsersList({ params: { pageNo: 1, pageSize: 3 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = 3
      }).catch(error => console.log(error))
    }
  }
}
</script>
