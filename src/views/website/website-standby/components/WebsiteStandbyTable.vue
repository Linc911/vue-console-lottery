<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="showDomain" label="显示域名" :min-width="240"/>

      <el-table-column prop="forwardDomain" label="跳转域名" :min-width="240"/>

      <el-table-column prop="createTime" label="创建时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="creatorUsername" label="创建人账号" :min-width="120" />

      <el-table-column prop="status" label="启用状态">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!Boolean(scope.row.status)"
            :payload="{ id: scope.row.websiteId }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <div>
            <el-button
              @click="showDialog(scope.row, 'dialogDetail')"
              type="primary"
              icon="el-icon-view"
              size="mini"
            />

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

    <!-- 详情弹框 -->
    <WebsiteStandbyDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <WebsiteStandbyDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="显示域名"
      :name="activeItem.showDomain"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import WebsiteStandbyDialogDetail from './WebsiteStandbyDialogDetail'
import WebsiteStandbyDialogUpdate from './WebsiteStandbyDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'WebsiteStandbyTable',
  components: {
    WebsiteStandbyDialogDetail,
    WebsiteStandbyDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { showDomain: '' },
      deleteHttpAPI: 'deleteWebsiteStandbyItem',
      deleteAttrName: 'websiteId',
      deleteId: 'websiteId',
      switchObj: {
        API: 'updateWebsiteStandbyItem',
        attrId: 'websiteId',
        attrValue: 'status'
      }
    }
  }
}
</script>
