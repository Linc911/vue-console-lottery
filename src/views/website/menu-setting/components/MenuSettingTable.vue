<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="菜单名称" :min-width="120"/>

      <el-table-column prop="content" label="菜单内容" :min-width="240" />

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="operations" label="操作" :min-width="100">
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
    <MenuSettingDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="菜单名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import MenuSettingDialogUpdate from './MenuSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'MenuSettingTable',
  components: {
    MenuSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteWebsiteMenuItem',
      deleteAttrName: 'webMenuId',
      deleteId: 'webMenuId'
    }
  }
}
</script>
