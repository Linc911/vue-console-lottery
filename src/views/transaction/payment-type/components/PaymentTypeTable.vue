<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :min-width="30" />

      <el-table-column prop="name" label="支付类型" />

      <el-table-column prop="status" label="是否推荐">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!scope.row.status"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" sortable />

      <el-table-column prop="remark" label="备注" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="$message.warning('接口调试中...')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <PaymentTypeDialogDetail :formData="activeItem" ref="dialogDetail" />
    <!-- 修改弹框 -->
    <PaymentTypeDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseSwitch from '@/components/base/BaseSwitch'
import PaymentTypeDialogDetail from './PaymentTypeDialogDetail'
import PaymentTypeDialogUpdate from './PaymentTypeDialogUpdate'

export default {
  name: 'PaymentTypeTable',
  components: {
    BaseSwitch,
    PaymentTypeDialogDetail,
    PaymentTypeDialogUpdate
  },
  mixins: [ tableComponentMixin ],
  methods: {
    handleSwitchChange (payload) {
      this.$httpAPI.updateTransactionPaymentType(
        { id: payload.id, status: Number(!payload.value) }
      ).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-status-change')
          this.$message.success('修改状态成功！')
        } else {
          this.$message.error('修改状态失败！')
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
