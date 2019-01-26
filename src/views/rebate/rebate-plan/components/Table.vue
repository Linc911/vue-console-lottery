<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="返水计划名称" :min-width="100" />

      <el-table-column prop="lowerLimit" label="投注注数下限" />

      <el-table-column prop="upperLimit" label="投注注数上限" />

      <el-table-column prop="ratio" label="返佣比例">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sysGroupNames" label="会员分组" :min-width="160" >
        <template slot-scope="scope">
          <span>{{ scope.row.sysGroupNames | separator(' ') }}</span>
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

      <el-table-column prop="status" label="启用状态">
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
          <div>
            <ButtonOperationPreview @click.native="showDialog(scope.row, 'dialogDetail')" />
            <ButtonOperationEdit @click.native="showDialog(scope.row, 'dialogUpdate')" />
            <ButtonOperationDelete @click.native="showDialog(scope.row, 'dialogDelete')" />
          </div>
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 详情弹框 -->
    <DialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <DialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="返水计划名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import DialogDetail from './DialogDetail'
import DialogUpdate from './DialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'RebateSettingTable',
  components: {
    DialogDetail,
    DialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteRebateSettingItem',
      deleteAttrName: 'rebateId',
      switchObj: {
        API: 'updateRebateSettingList',
        attrId: 'id',
        attrValue: 'status'
      }
    }
  }
}
</script>
