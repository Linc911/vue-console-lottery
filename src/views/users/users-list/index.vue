<template lang="html">
  <section class="users-list">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="breadcrumb" />

    <!-- 条件筛选 -->
    <UsersListSearch @on-search="handleSearch" />

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <UsersListTable :data="tableData" />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        httpURL="fetchUsersList"
      />
    </div>
  </section>
</template>

<script>
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import UsersListSearch from './components/UsersListSearch'
import UsersListTable from './components/UsersListTable'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'UsersList',
  components: {
    BaseBreadcrumb,
    UsersListSearch,
    UsersListTable,
    BasePagination
  },
  data () {
    return {
      breadcrumb: [
        { name: '会员管理' },
        { name: '会员信息管理' }
      ],
      tableData: [],
      page: { current: 1, size: 10, total: 10 },
      requestParams: {}
    }
  },
  created () {
    this.fetchUsersList()
  },
  destroy () {
    this.$store.dispatch('deleteUsersGroup')
  },
  methods: {
    // 接收搜索信息，触发搜索
    handleSearch (obj) {
      this.requestParams = Object.assign(this.requestParams, obj, { pageNo: 1 })
      this.fetchUsersList()
    },
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
      this.$httpAPI.fetchUsersList({
        params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams)
      }).then(response => {
        if (response.data.data.data) {
          this.tableData = response.data.data.data
        } else {
          this.tableData = []
        }
        this.page.total = response.data.data.amount
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
