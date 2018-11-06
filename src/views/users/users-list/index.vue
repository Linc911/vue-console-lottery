<template lang="html">
  <section class="users-list">
    <!-- 条件筛选 -->

    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <UsersListTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        httpURL="fetchUsersList"
      />
    </div>
  </section>
</template>

<script>
import UsersListTable from './components/UsersListTable'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'UsersList',
  components: {
    UsersListTable,
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
  destroy () {
    this.$store.dispatch('deleteUsersGroup')
  },
  methods: {
    // 改变分组选择项时，同步数据到列表
    syncGroupData (payload) {
      this.$_.forEach(this.tableData, item => {
        if (String(item.id) === payload.userId) {
          item.groupIds = payload.value
          item.groupNames = payload.label
        }
      })
    },
    // 改变监控设置
    toggleControlStatus (id, status) {
      if (status) status = 0
      else status = 1
      this.$_.forEach(this.tableData, item => {
        if (item.id === id) item.control = status
      })
      // this.$httpAPI.updateUserControlStatus({ userId: id, control: status })
    },
    // 分页变化时，更新数据
    handlePaginationChange (payload) {
      this.tableData = payload
    },
    fetchUsersList () {
      this.$httpAPI.fetchUsersList({ params: { pageNo: 1, pageSize: 10 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables';

.dialog-user-info {
  padding-bottom: 30px;
  line-height: 2;
}
.el-icon-error {
  font-size: 16px;
  cursor: pointer;
}
.el-icon-success {
  font-size: 16px;
  color: $--color-primary;
  cursor: pointer;
}
</style>
