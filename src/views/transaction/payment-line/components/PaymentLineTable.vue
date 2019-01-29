<template lang="html">
  <div>
    <el-table :data="data" size="small" max-height="600" highlight-current-row stripe border>
      <el-table-column type="index" :min-width="36" />

      <el-table-column prop="name" label="接口名称" :min-width="100" />

      <el-table-column prop="interfaceTypeDesc" label="接口类型" />

      <el-table-column prop="payTypeName" label="支付类型" />

      <el-table-column prop="merchantId" label="商户号" />

      <el-table-column prop="discountRatio" label="优惠比例" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.discountRatio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="payAddress" label="支付地址" />

      <el-table-column prop="sysGroupNames" label="会员分组" />

      <el-table-column prop="status" label="启用状态" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.status" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" :width="45" />

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="primary" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改支付类型弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm1"
      title="接口名称(路线配置)"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseIndicator from '@/components/base/BaseIndicator'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'PaymentLineTable',
  components: {
    BaseIndicator,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { name: '' }
    }
  },
  methods: {
    handleDeleteConfirm1 () {
      this.$refs.dialogDelete.toggleDialogVisible(false)

      this.$httpAPI.deleteTransactionPortLine({
        params: {
          payTypeId: this.activeItem.payTypeId,
          payInterfaceIds: this.activeItem.id
        }
      }).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-deleted')
          this.$message.success('删除支付路线成功！')
        } else {
          this.$message.error('删除支付路线失败！')
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
