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

        <el-table-column prop="unknown" label="ID" />

        <el-table-column prop="unknown" label="代理账号" />

        <el-table-column prop="nickname" label="代理姓名" />

        <el-table-column prop="groupNames" label="代理级别" />
        <el-table-column prop="banlance" label="上级代理" />
        <el-table-column prop="unknown" label="下级代理" />
        <el-table-column prop="unknown" label="邀请链接" />
        <el-table-column prop="createTime" label="注册时间" />

        <el-table-column prop="operations" label="操作" :min-width="600">
          <template slot-scope="scope">
            <el-button type="primary" @click="showTip" size="mini">直属下级</el-button>
            <el-button type="primary" @click="showTip" size="mini">设置链接</el-button>
            <el-button type="primary" @click="showTip" size="mini">业绩报表</el-button>
            <el-button type="primary" @click="showTip" size="mini">查看分润</el-button>
            <el-button type="primary" @click="showTip" size="mini">修改分润</el-button>
            <el-button type="primary" @click="showTip" size="mini">变更上级</el-button>
          </template>
        </el-table-column>
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
