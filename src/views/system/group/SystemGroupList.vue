<template lang="html">
  <section class="system-group">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <el-button
        @click="$router.push({ name: 'SystemGroupCreate' })"
        icon="el-icon-circle-plus-outline"
        type="primary"
        size="small"
        class="pull-right"
      >添加</el-button>
    </div>
    <div class="content-container">
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" />

        <el-table-column prop="groupId" label="分组ID" :min-width="150" />

        <el-table-column prop="name" label="分组名称" />

        <el-table-column prop="remark" label="备注" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button
              @click="$router.push({ name: 'SystemGroupUpdate', params: { groupId: scope.row.groupId } })"
              icon="el-icon-edit"
              type="primary"
              size="mini"
            />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        httpURL="fetchSystemGroup"
      />
    </div>
  </section>
</template>

<script>
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'SystemGroupList',
  components: {
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0
    }
  },
  created () {
    this.getGroupList()
  },
  methods: {
    // 分页变化时，更新数据
    handlePaginationChange (payload) {
      this.tableData = payload
    },
    getGroupList () {
      this.$httpAPI.fetchSystemGroup({
        params: { pageNo: 1, pageSize: 10 }
      }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  margin: 20px 0;
}
</style>
