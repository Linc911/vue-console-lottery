<template lang="html">
  <div class="table-container">
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :min-width="30" />

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
          />
        </template>
      </el-table-column>

      <!-- <el-table-column prop="limitStatus" label="是否限额" :width="45">
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
      </el-table-column> -->

      <el-table-column prop="sort" label="排列顺序" :width="45" />

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作" :width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="$message.warning('接口调试中...')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <PaymentPortDialogDetail :data="activeItem" ref="dialogDetail" />
    <!-- 修改弹框 -->
    <PaymentPortDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import { tableComponentMixin, statusSwitchMixin } from '@/mixins'

import BaseIndicator from '@/components/base/BaseIndicator'
import PaymentPortDialogDetail from './PaymentPortDialogDetail'
import PaymentPortDialogUpdate from './PaymentPortDialogUpdate'

export default {
  name: 'PaymentPortTable',
  components: {
    BaseIndicator,
    PaymentPortDialogDetail,
    PaymentPortDialogUpdate
  },
  mixins: [ tableComponentMixin, statusSwitchMixin ],
  data () {
    return {
      statusSwitchAPI: 'updateTransactionPaymentPort'
    }
  }
}
</script>
