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

        <el-table-column prop="unknown" label="代理账号" />

        <el-table-column prop="nickname" label="代理姓名" />

        <el-table-column prop="unknown" label="代理级别" />

        <el-table-column prop="unknown" label="下级会员数" />
        <el-table-column prop="unknown" label="下级代理数" />
        <el-table-column prop="unknown" label="会员投注笔数" />
        <el-table-column prop="unknown" label="会员投注" />
        <el-table-column prop="unknown" label="会员游戏投注" />
        <el-table-column prop="unknown" label="会员总余额" />
        <el-table-column prop="unknown" label="会员总优惠" />
        <el-table-column prop="unknown" label="会员总存款" />
        <el-table-column prop="unknown" label="会员总取款" />
        <el-table-column prop="unknown" label="会员总返水" />
        <el-table-column prop="unknown" label="会员总分润" />
        <el-table-column prop="unknown" label="代理分润" />
        <el-table-column prop="unknown" label="会员总输赢" />

        <!-- <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showTip"  size="mini">相关操作</el-button>
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
      tableData: [],
      pageTotal: 0
    }
  },
  created () {
    this.fetchUsersList()
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
