<template lang="html">
  <div class="table-container">
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :min-width="30" />

      <el-table-column prop="name" label="接口名称" :min-width="100" />

      <el-table-column prop="payTypeName" label="支付类型" />

      <el-table-column prop="merchantId" label="商户号" />

      <el-table-column prop="discountRatio" label="优惠比例" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.discountRatio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="payAddress" label="支付地址" />

      <el-table-column prop="sysGroupNames" label="会员分组" />

      <el-table-column prop="status" label="是否启用" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.status" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="limitStatus" label="是否限额" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.limitStatus" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="fineTuningStatus" label="是否微调" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.fineTuningStatus" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="pcStatus" label="是否 电脑端" :width="60">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.pcStatus" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="phoneStatus" label="是否 手机端" :width="60">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.pcStatus" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" :width="45" />

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialogUpdate(scope.row)" type="primary" icon="el-icon-edit" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改支付类型弹框 -->
    <PaymentPortDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import BaseIndicator from '@/components/base/BaseIndicator'
import PaymentPortDialogUpdate from './PaymentPortDialogUpdate'

export default {
  name: 'PaymentPortTable',
  components: {
    BaseIndicator,
    PaymentPortDialogUpdate
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeItem: {}
    }
  },
  methods: {
    showDialogUpdate (item) {
      this.activeItem = item
      this.$refs.dialogUpdate.toggleDialogVisible(true)
    }
  }
}
</script>
