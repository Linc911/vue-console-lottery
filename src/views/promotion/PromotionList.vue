<template lang="html">
  <div class="menu-list">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <el-button
        @click="$router.push({ name: 'PromotionCreate' })"
        icon="el-icon-circle-plus-outline"
        size="small"
        type="primary"
        class="pull-right"
      >添加</el-button>
    </div>
    <!-- 表格数据 -->
    <el-table :data="tableData" size="small" highlight-current-row border>
      <el-table-column type="index" />
      <el-table-column label="活动图片标题" />
      <el-table-column label="活动图片内容" />
      <el-table-column label="是否启用">
        <template slot-scope="scope">
          <el-switch v-model="value" />
        </template>
      </el-table-column>
      <el-table-column label="站点编码" />
      <el-table-column prop="sort" label="排序" />

      <!-- <el-table-column prop="operations" label="操作" :min-width="120">
        <template slot-scope="scope">
        </template>
      </el-table-column> -->
    </el-table>
    <!-- 分页 -->
    <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="nuknown" />
  </div>
</template>

<script>
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'menuList',
  components: {
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      value: true
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

<style lang="scss" scoped>
@import '../../styles/variables';

.search-container {
  margin-bottom: 20px;
}
.el-icon-caret-right {
  color: $--color-primary;
}
.el-icon-share {
  padding-left: 2em;
  color: $--color-primary;
}
</style>
