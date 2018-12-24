<template lang="html">
  <div>
    <el-table :data="data" size="small" :max-height="590" highlight-current-row border>

      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="名称" :min-width="120">
        <template slot-scope="scope">
          <!-- 不同级别菜单显示不同菜单 -->
          <div v-if="!scope.row.parentId" @click="$emit('on-submenu-toggle', scope.row)">
            <i :class="[ scope.row.child ? 'el-icon-caret-bottom' : 'el-icon-caret-right' ]"></i>
            <span class="item-name">{{ scope.row.name }}</span>
          </div>
          <div v-else>
            <i class="el-icon-share"></i>
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="url" label="访问路由" :min-width="140" />

      <el-table-column prop="css" label="图标" :min-width="45">
        <template slot-scope="scope">
          <i class="fa" :class="scope.row.css"></i>
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="createTime" label="创建时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="updateTime" label="更新时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="90">
        <template slot-scope="scope">
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
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <MenuSettingDialogUpdate
      @on-updated="$emit('on-changed', activeItem.parentId)"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDialogDeleteConfirm"
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
      deleteHttpAPI: 'deleteRebateSettingItem',
      deleteAttrName: 'rebateId'
    }
  },
  methods: {
    // 删除成功时，同步更新侧边栏数据（vuex）
    handleDialogDeleteConfirm () {
      this.$refs.dialogDelete.toggleDialogVisible(false) // 隐藏弹框

      this.$axios.delete('/api-b/menus/' + this.activeItem.id).then((response) => {
        this.$store.dispatch('sidebar/refreshMenu')

        this.$emit('on-changed', this.activeItem.parentId)

        this.$message.success('删除成功！')
      }).catch(() => this.$message.error('服务器异常，请稍后再试！'))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/variables';

.el-icon-caret-right, .el-icon-caret-bottom {
  font-size: 16px;
  color: $--color-primary;
  cursor: pointer;
}
.el-icon-share {
  padding: 0 0.3em 0 1.5em;
  font-size: 14px;
  color: $--color-primary;
}
.item-name {
  display: inline-block;
  width: 80%;
  height: 100%;
  cursor: pointer;
}
</style>
