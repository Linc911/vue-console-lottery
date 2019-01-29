<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="支付类型" />

      <el-table-column prop="status" label="推荐状态">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!scope.row.status"
            :payload="{ id: scope.row.id }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" />

      <el-table-column prop="createTime" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" :min-width="140" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 详情弹框 -->
    <PaymentTypeDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <PaymentTypeDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="支付类型"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import PaymentTypeDialogDetail from './PaymentTypeDialogDetail'
import PaymentTypeDialogUpdate from './PaymentTypeDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'PaymentTypeTable',
  components: {
    PaymentTypeDialogDetail,
    PaymentTypeDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteTransactionPaymentType',
      deleteAttrName: 'id',
      deleteId: 'id',
      switchObj: {
        API: 'updateTransactionPaymentType',
        attrId: 'id',
        attrValue: 'status'
      }
    }
  }
}
</script>
