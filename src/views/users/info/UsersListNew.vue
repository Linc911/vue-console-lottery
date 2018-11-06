<template lang="html">
  <section class="users-list">
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
        <el-table-column type="index" :min-width="30" />

        <el-table-column prop="createTime" label="注册时间" :min-width="140">
          <template slot-scope="scope">
            <span>{{scope.row.createTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="username" label="名称" :min-width="110">
          <template slot-scope="scope">
            <span>{{scope.row.username}}</span>
            <UserInfoDetails :userId="scope.row.id" class="pull-right" />
          </template>
        </el-table-column>

        <el-table-column prop="nickname" label="昵称" :min-width="90" />

        <el-table-column prop="groupNames" label="分组" :width="110">
          <template slot-scope="scope">
            <span>{{scope.row.groupNames}}</span>
            <UserGroupSetting
              @on-change="syncGroupData"
              :userId="String(scope.row.id)"
              :groupId="String(scope.row.groupIds)"
              class="pull-right"
            />
          </template>
        </el-table-column>

        <el-table-column prop="" label="邀请码" />

        <el-table-column prop="control" label="监控状态" :width="50">
          <template slot-scope="scope">
            <i @click="toggleControlStatus(scope.row.id, scope.row.control)" :class="scope.row.control ? 'el-icon-success' : 'el-icon-error'"></i>
          </template>
        </el-table-column>

        <el-table-column prop="banlance" label="账户余额" :min-width="100">
          <template slot-scope="scope">
            <span>{{scope.row.banlance | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="win" label="输赢" />

        <el-table-column prop="operations" label="操作" :min-width="470">
          <template slot-scope="scope">
            <el-button @click="$router.push(`/users/${scope.row.id}/bets`)" type="primary" size="mini">注单详情</el-button>
            <el-button @click="$router.push(`/users/${scope.row.id}/rechargeLogs`)" type="primary" size="mini">充值详情</el-button>
            <el-button @click="$router.push(`/users/${scope.row.id}/depositStatistics`)" type="primary" size="mini">存款详情</el-button>
            <el-button @click="$router.push(`/users/${scope.row.id}/httpLogs`)" type="primary" size="mini">日志详情</el-button>
            <UserRebateSetting :userId="String(scope.row.id)" />
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
import FilterArea from '@/components/others/FilterArea'
import UserInfoDetails from './components/UserInfoDetails'
import UserGroupSetting from './components/UserGroupSetting'
import UserRebateSetting from './components/UserRebateSetting'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'UsersList',
  components: {
    FilterArea,
    UserInfoDetails,
    UserGroupSetting,
    UserRebateSetting,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0
    }
  },
  created () {
    this.getUsersList()
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
    getUsersList (page) {
      this.$httpAPI.fetchUsersList({ params: { pageNo: 1, pageSize: 10 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/variables';

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
