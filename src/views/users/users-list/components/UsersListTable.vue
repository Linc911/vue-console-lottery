<template lang="html">
  <div class="table-container">
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="createTime" label="注册时间" :width="140">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | time}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="username" label="会员账号" :min-width="100" />

      <el-table-column label="分组" :width="120">
        <template slot-scope="scope">
          <span>{{scope.row.groupNames}}</span>
          <BaseSetting @click.native="showGroupSetting(scope.row.id, scope.row.groupIds)" class="pull-right" />
        </template>
      </el-table-column>

      <el-table-column prop="" label="邀请码" />

      <el-table-column prop="agent" label="代理状态" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.agent"/>
        </template>
      </el-table-column>

      <el-table-column prop="recharge" label="充值状态" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.recharge"/>
        </template>
      </el-table-column>

      <el-table-column prop="enable" label="账号状态" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.enabled ? '正常': '异常' }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="control" label="监控状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="Boolean(scope.row.control)"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column label="会员余额" :min-width="100">
        <template slot-scope="scope">
          <span>{{scope.row.banlance | RMB}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="输赢" :min-width="100">
        <template slot-scope="scope">
          <span>{{scope.row.win | RMB}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :width="250">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/users/${scope.row.id}/bets?user=${scope.row.username}`)" type="primary" size="mini">注单详情</el-button>
          <!-- <el-button @click="$router.push(`/users/${scope.row.id}/rechargeLogs`)" type="primary" size="mini">存款详情</el-button>
          <el-button @click="$router.push(`/users/${scope.row.id}/depositStatistics`)" type="primary" size="mini">提款详情</el-button> -->
          <el-button @click="$router.push(`/users/${scope.row.id}/httpLogs`)" type="primary" size="mini">日志详情</el-button>
          <UserRebateSetting :userId="String(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改用户分组弹框 -->
    <DialogGroupSetting :user="activeItem" @on-success="handleGroupChangeSuccess" ref="groupSetting" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseSetting from '@/components/base/BaseSetting'
import BaseIndicator from '@/components/base/BaseIndicator'
import BaseSwitch from '@/components/base/BaseSwitch'
import DialogGroupSetting from './DialogGroupSetting'
import UserRebateSetting from './UserRebateSetting'

export default {
  name: 'UsersListTable',
  components: {
    BaseSetting,
    BaseIndicator,
    BaseSwitch,
    DialogGroupSetting,
    UserRebateSetting
  },
  mixins: [ tableComponentMixin ],
  methods: {
    handleSwitchChange (payload) {
      this.$httpAPI.updateUserControlStatus({
        params: { userId: payload.id, control: Number(payload.value) }
      }
      ).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-status-change')
          this.$message.success('修改状态成功！')
        } else {
          this.$message.error('修改状态失败！')
        }
      }).catch(error => console.log(error))
    },
    // 显示用户分组弹框
    showGroupSetting (userId, groupId) {
      this.activeItem = { userId, groupId }
      this.$refs.groupSetting.toggleDialogVisible(true)
    },
    handleGroupChangeSuccess (payload) {
      this.$_.find(this.data, item => {
        if (item.id === payload.userId) {
          item.groupIds = payload.gourpId
          item.groupNames = payload.groupName
        }
      })
    }
  }
}
</script>
