<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row stripe border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="地区名称" />

      <el-table-column prop="parentId" label="上级地区名称" />

      <el-table-column prop="amount" label="下级地区数量" />

      <el-table-column prop="sort" label="排序" />

      <el-table-column prop="status" label="启用状态">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!scope.row.status"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" />

      <el-table-column prop="operations" label="操作" :min-width="130">
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
    <AreaSettingDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="地区名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import AreaSettingDialogUpdate from './AreaSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'UsersSettingTable',
  components: {
    AreaSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteSystemAreaItem',
      deleteAttrName: 'areaId',
      deleteId: 'areaId',
      activeItem: { name: '' }
    }
  }
}
</script>
