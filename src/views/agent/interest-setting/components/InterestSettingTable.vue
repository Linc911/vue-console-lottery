<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>

      <el-table-column type="index" :width="40" />

      <el-table-column prop="name" label="分润设置名称" :min-width="120" />

      <el-table-column prop="upperLimit" label="有效投注上限" :width="80" />

      <el-table-column prop="lowerLimit" label="有效投注下限" :width="80" />

      <el-table-column prop="ratio" label="返佣比例" :width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="startTime" label="计划开始时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="endTime" label="计划结束时间" :width="140">
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
          />
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <InterestSettingDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
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
import { tableComponentMixin } from '@/mixins'

import BaseIndicator from '@/components/base/BaseIndicator'
import BaseSwitch from '@/components/base/BaseSwitch'
import InterestSettingDialogUpdate from './InterestSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'InterestSettingTable',
  components: {
    BaseIndicator,
    BaseSwitch,
    InterestSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteAgentInterestSettingItem',
      deleteAttrName: 'rebateId'
    }
  },
  methods: {
    handleSwitchChange (payload) {
      this.$httpAPI.updateRebateSettingStatus({
        params: { rebateId: payload.id, status: Number(!payload.value) }
      }).then(response => {
        if (response.data.status === 200) {
          this.$message.success('修改启用状态成功！')
        } else {
          this.$message.error('修改启用状态失败！')
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
