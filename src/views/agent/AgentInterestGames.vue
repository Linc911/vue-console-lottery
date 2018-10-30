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

        <el-table-column prop="name" label="游戏名称" />

        <el-table-column prop="unknown" label="游戏编码" />

        <el-table-column prop="unknown" label="最后更新时间" />

        <el-table-column label="分润基数%">
          <template slot-scope="scope">
            <el-input v-model="password" :placeholder="scope.row.placeholder" />
          </template>
        </el-table-column>

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
      tableData: [
        { name: '六合彩', placeholder: '5.00' },
        { name: '皇冠体育', placeholder: '5.50' },
        { name: '真人视讯', placeholder: '0.80' },
        { name: '彩票游戏', placeholder: '3.00' },
        { name: '电子游艺', placeholder: '5.00' }
      ],
      pageTotal: 0,
      password: ''
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
