<template lang="html">
  <div class="table-container">
    <el-table :data="data" :max-height="735" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column label="注册时间" :width="140">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | time}}</span>
        </template>
      </el-table-column>

      <el-table-column label="会员账号" :min-width="120">
        <template slot-scope="scope">
          <span>{{scope.row.username}}</span>
          <BaseMore @click.native="showUserDetails(scope.row.id)" class="pull-right" />
        </template>
      </el-table-column>

      <el-table-column label="分组" :width="110">
        <template slot-scope="scope">
          <span>{{scope.row.groupNames}}</span>
          <BaseSetting @click.native="showGroupSetting(scope.row.id, scope.row.groupIds)" class="pull-right" />
        </template>
      </el-table-column>

      <el-table-column prop="" label="邀请码" />

      <el-table-column label="监控状态" :width="50">
        <template slot-scope="scope">
          <i
          @click="toggleControlStatus(scope.row.id, scope.row.control)"
          :class="scope.row.control ? 'el-icon-success' : 'el-icon-error'"
          ></i>
        </template>
      </el-table-column>

      <el-table-column label="会员余额" :min-width="110">
        <template slot-scope="scope">
          <span>{{scope.row.banlance | RMB}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="输赢" />

      <el-table-column label="操作" :min-width="470">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/users/${scope.row.id}/bets`)" type="primary" size="mini">注单详情</el-button>
          <el-button @click="$router.push(`/users/${scope.row.id}/rechargeLogs`)" type="primary" size="mini">存款详情</el-button>
          <el-button @click="$router.push(`/users/${scope.row.id}/depositStatistics`)" type="primary" size="mini">提款详情</el-button>
          <el-button @click="$router.push(`/users/${scope.row.id}/httpLogs`)" type="primary" size="mini">日志详情</el-button>
          <UserRebateSetting :userId="String(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 用户信息弹框 -->
    <DialogUserDetails :user="activeUser" ref="userDetails" />

    <!-- 修改用户分组弹框 -->
    <DialogGroupSetting :user="activeUser" @on-success="handleGroupChangeSuccess" ref="groupSetting" />
  </div>
</template>

<script>
import BaseMore from '@/components/base/BaseMore'
import DialogUserDetails from './DialogUserDetails'
import BaseSetting from '@/components/base/BaseSetting'
import DialogGroupSetting from './DialogGroupSetting'
import UserRebateSetting from './UserRebateSetting'

export default {
  name: 'UsersListTable',
  components: {
    BaseMore,
    DialogUserDetails,
    BaseSetting,
    DialogGroupSetting,
    UserRebateSetting
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeUser: {}
    }
  },
  methods: {
    // 请求用户信息，显示详情弹框
    showUserDetails (id) {
      this.fetchUserInfo(id)
    },
    // 显示用户分组弹框
    showGroupSetting (userId, groupId) {
      this.activeUser = { userId, groupId }
      this.$refs.groupSetting.toggleDialogVisible(true)
    },
    handleGroupChangeSuccess (payload) {
      this.$_.find(this.data, item => {
        if (item.id === payload.userId) {
          item.groupIds = payload.gourpId
          item.groupNames = payload.groupName
        }
      })
    },
    toggleControlStatus () {
      console.log('toggleControlStatus')
    },
    fetchUserInfo (userId) {
      this.$httpAPI.getUserInfo({ params: { userId } }).then(response => {
        if (response.data.data) {
          this.activeUser = response.data.data
          this.$refs.userDetails.toggleDialogVisible(true)
        } else {
          this.$message.error('数据有误，无法正常加载！')
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
