<template lang="html">
  <div>
    <el-table :data="data" size="small" :max-height="590" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="gameName" label="游戏类型" />

      <el-table-column prop="type" label="应用场景">
        <template slot-scope="scope">
          <span>{{ scope.row.type | scenario }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="explain" label="游戏说明" :min-width="200">
        <template slot-scope="scope">
          <BasePopoverTextarea :data="scope.row.explain" :maxlength="28" triggerType="click" />
        </template>
      </el-table-column>

      <el-table-column prop="updateTime" label="更新时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="90">
        <template slot-scope="scope">
          <div>
            <el-button
              @click="showDialog(scope.row, 'dialogUpdate')"
              type="primary"
              icon="el-icon-edit"
              size="mini"
            />

            <el-button
              @click="showDialog(scope.row, 'dialogDelete')"
              type="warning"
              icon="el-icon-delete"
              size="mini"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <LotteryRulesDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      :name="activeItem.gameName"
      title="游戏类型"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import config from '@/config/data'

import LotteryRulesDialogUpdate from './LotteryRulesDialogUpdate'
import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'LotteryRulesTable',
  components: {
    LotteryRulesDialogUpdate,
    BasePopoverTextarea,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  filters: {
    scenario (value) {
      switch (value) {
        case 0:
          return '电脑页面'
        case 1:
          return '手机页面'
        case 2:
          return '手机APP'
        default:
          return '其他'
      }
    }
  },
  data () {
    return {
      activeItem: { gameName: '' }
    }
  },
  methods: {
    // 响应删除操作
    handleDeleteConfirm () {
      this.$refs.dialogDelete.toggleDialogVisible(false) // 隐藏弹框

      this.$httpAPI.deleteLotteryRulesItem({
        params: {
          gameType: this.activeItem.gameType,
          type: this.activeItem.type
        }
      }).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-changed')
          this.$message.success(config.DELETE_SUCCEEDED)
        } else {
          this.$message.error(`${config.DELETE_FAILED}: ${response.data.msg}`)
        }
      }).catch((error) => {
        console.log(error)
        this.$message.warning(config.DELETE_FAILED)
      })
    }
  }
}
</script>

<style scoped>
.el-popover {
  width: 60% !important;
  max-height: 80%;
}
</style>
