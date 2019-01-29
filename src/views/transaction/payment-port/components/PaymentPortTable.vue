<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="接口名称" :min-width="100" />

      <el-table-column prop="interfaceTypeDesc" label="接口类型" />

      <el-table-column prop="payTypeName" label="支付类型" />

      <el-table-column prop="payAddress" label="支付地址" />

      <el-table-column prop="merchantId" label="商户号" />

      <el-table-column prop="discountRatio" label="优惠比例" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.discountRatio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="推荐状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!scope.row.status"
            :payload="{ id: scope.row.id }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" :width="45" />

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作" :width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 详情弹框 -->
    <PaymentPortDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <PaymentPortDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="接口名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import PaymentPortDialogDetail from './PaymentPortDialogDetail'
import PaymentPortDialogUpdate from './PaymentPortDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'PaymentPortTable',
  components: {
    PaymentPortDialogDetail,
    PaymentPortDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteTransactionPaymentPort',
      deleteAttrName: 'id',
      deleteId: '',
      switchObj: {
        API: 'updateTransactionPaymentPort',
        attrId: 'id',
        attrValue: 'status'
      }
    }
  }
}
</script>
