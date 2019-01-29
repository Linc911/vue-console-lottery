<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="类型名称" />

      <el-table-column prop="dictionaryName" label="接口类型名称" />

      <el-table-column prop="merchantId" label="商户ID" />

      <el-table-column prop="operator" label="操作人" />

      <el-table-column prop="operator" label="接口类型名称" />

      <el-table-column prop="address" label="地址" />

      <el-table-column prop="publicKey" label="公钥" />

      <el-table-column prop="privateKey" label="私钥" />

      <el-table-column prop="whiteList" label="白名单" />

      <el-table-column prop="status" label="启用状态" :min-width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!Boolean(scope.row.status)"
            :payload="{ id: scope.row.paymentMerchantId }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" />

      <el-table-column prop="remarks" label="备注" />

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
    </LayoutTablePlain>

    <!-- 详情弹框 -->
    <WithdrawAccountDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <WithdrawAccountDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="类型名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import WithdrawAccountDialogDetail from './WithdrawAccountDialogDetail'
import WithdrawAccountDialogUpdate from './WithdrawAccountDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'WithdrawAccountTable',
  components: {
    WithdrawAccountDialogDetail,
    WithdrawAccountDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteWithdrawAccountItem',
      deleteAttrName: 'paymentMerchantId',
      deleteId: 'paymentMerchantId',
      switchObj: {
        API: 'updateWithdrawAccountItem',
        attrId: 'paymentMerchantId',
        attrValue: 'status'
      },
      activeItem: { name: '' }
    }
  }
}
</script>
