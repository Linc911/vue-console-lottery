<template lang="html">
  <div>
    <el-table
      @sort-change="handleTableSort"
      :data="data"
      size="small"
      max-height="600"
      highlight-current-row
      stripe
      border
    >
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="会员账号" :min-width="100" />

      <!-- <el-table-column class-name="hidden-xl-and-down" prop="createTime" label="注册时间" :min-width="140" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column> -->

      <el-table-column prop="loginTime" label="最近登陆时间" :min-width="140" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.loginTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="分组" :width="120">
        <template slot-scope="scope">
          <div>
            <span>{{ scope.row.groupNames }}</span>
            <BaseIcon
              @on-click="showDialog(scope.row, 'dialogGroup')"
              icon="el-icon-zoom-in"
              class="pull-right"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="banlance" label="余额" :min-width="150" sortable="custom" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.banlance | RMB }}</span>
          <!-- 各种账号的金额查询 -->
          <el-popover trigger="click" placement="right" width="350">
            <el-table :data="scope.row.banlanceDetail">
              <el-table-column width="200" property="name" label="账号"></el-table-column>
              <el-table-column width="150" property="balance" label="金额"><template slot-scope="scope">
                <span style="color: red">{{ scope.row.balance | RMB }}</span>
              </template>
            </el-table-column>
            </el-table>
            <BaseIcon
              icon="el-icon-zoom-in"
              class="pull-right"
              slot="reference"
            />
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="输赢" :min-width="120" sortable="custom" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.win | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="agent" label="代理状态" :width="60">
        <template slot-scope="scope">
          <span>{{ scope.row.agent ? '代理' : '未代理' }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="recharge" label="充值状态" :width="60">
        <template slot-scope="scope">
          <span>{{ scope.row.recharge ? '充值' : '未充值' }}</span>
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

      <el-table-column prop="enable" label="账号状态" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.enabled ? '正常': '异常' }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="200">
        <template slot-scope="scope">
          <div>
            <el-button
              @click="showDialog(scope.row, 'dialogDetail')"
              type="primary"
              icon="el-icon-view"
              size="mini"
            />

            <el-button
              @click="showDialog(scope.row, 'dialogBets')"
              type="primary"
              size="mini"
            >注单详情</el-button>

            <el-button
              @click="showDialog(scope.row, 'dialogLogs')"
              type="primary"
              size="mini"
            >日志详情</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改分组弹框 -->
    <DialogGroupSetting
      @on-group-changed="$emit('on-changed')"
      :user="activeItem"
      ref="dialogGroup"
    />

    <!-- 详情弹框 -->
    <UsersListDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 注单弹框 -->
    <DialogBetsList
      @on-group-changed="$emit('on-changed')"
      :id="activeItem.id"
      ref="dialogBets"
    />

    <!-- 日志弹框 -->
    <UsersListDialogLogs
      @on-group-changed="$emit('on-changed')"
      :id="activeItem.id"
      ref="dialogLogs"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BaseIcon from '@/components/base/BaseIcon'

import DialogGroupSetting from './DialogGroupSetting'
import UserRebateSetting from './UserRebateSetting'
import UsersListDialogDetail from './UsersListDialogDetail'
import DialogBetsList from '@/components/dialog/DialogBetsList'
import UsersListDialogLogs from './UsersListDialogLogs'

export default {
  name: 'UsersListTable',
  components: {
    BaseIcon,
    DialogGroupSetting,
    UserRebateSetting,
    UsersListDialogDetail,
    DialogBetsList,
    UsersListDialogLogs
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { id: '' },
      switchObj: {
        API: 'updateUserListStatus',
        attrId: 'userId',
        attrValue: 'control'
      }
    }
  },
  methods: {
    handleTableSort ({ prop, order }) {
      let orderType = ''

      // 没有输入排序要求，按原来默认列表排序
      if (prop === null) {
        // 将排序要求通知父组件
        this.$emit('on-sort', orderType)
        // 程序不再往下执行
        return
      }

      // 按注册时间排序时
      if (prop === 'createTime') {
        order === 'ascending' ? (orderType = 10) : (orderType = 11)
        this.$emit('on-sort', orderType)
        return
      }

      // 按登陆时间排序时
      if (prop === 'loginTime') {
        order === 'ascending' ? (orderType = 40) : (orderType = 41)
        this.$emit('on-sort', orderType)
        return
      }

      // 按余额排序时
      if (prop === 'banlance') {
        order === 'ascending' ? (orderType = 20) : (orderType = 21)
        this.$emit('on-sort', orderType)
        return
      }

      // 按注册时间排序时
      if (prop === 'win') {
        order === 'ascending' ? (orderType = 30) : (orderType = 31)
        this.$emit('on-sort', orderType)
      }
    }
  }
}
</script>
