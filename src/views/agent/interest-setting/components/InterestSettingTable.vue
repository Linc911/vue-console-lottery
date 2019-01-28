<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">

      <el-table-column type="index" :width="40" />

      <el-table-column prop="name" label="分润设置名称" :min-width="120" />

      <el-table-column prop="gameConfigName" label="游戏类型" :min-width="100" />

      <el-table-column prop="upperLimit" label="有效投注上限" :min-width="80" />

      <el-table-column prop="lowerLimit" label="有效投注下限" :min-width="80" />

      <el-table-column prop="ratio" label="返佣比例" :min-width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="startTime" label="计划开始时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="endTime" label="计划结束时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="启用状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!scope.row.status"
            :payload="{ id: scope.row.id }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :width="130">
        <template slot-scope="scope">
          <!-- <ButtonOperationPreview @click.native="showDialog(scope.row, 'dialogDetail')" /> -->
          <ButtonOperationEdit @click.native="showDialog(scope.row, 'dialogUpdate')" />
          <ButtonOperationDelete @click.native="showDialog(scope.row, 'dialogDelete')" />
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 修改弹框 -->
    <InterestSettingDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="分润设置名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import InterestSettingDialogUpdate from './InterestSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'InterestSettingTable',
  components: {
    InterestSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteAgentInterestSettingItem',
      deleteAttrName: 'commisionConfigId',
      deletedId: 'commisionConfigId',
      switchObj: {
        API: 'updateAgentInterestSettingItem',
        attrId: 'id',
        attrValue: 'status'
      }
    }
  }
}
</script>
