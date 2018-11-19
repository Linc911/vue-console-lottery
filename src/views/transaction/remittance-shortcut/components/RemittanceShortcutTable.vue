<template lang="html">
  <div class="table-container">
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :min-width="30" />

      <el-table-column prop="payName" label="支付户名" />

      <el-table-column prop="payUrl" label="支付链接地址" />

      <el-table-column prop="codeUrl" label="二维码链接地址" />

      <el-table-column prop="sysGroupNames" label="会员分组">
        <template slot-scope="scope">
          <span>{{ scope.row.sysGroupNames.join(' / ') }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="是否启用" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.status" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="phoneStatus" label="是否 手机端" :width="60">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.phoneStatus" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="pcStatus" label="是否 电脑端" :width="60">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.pcStatus" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" :width="45" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogUpdate')"  type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="$message.warning('接口调试中...')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改支付类型弹框 -->
    <RemittanceShortcutDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseIndicator from '@/components/base/BaseIndicator'
import RemittanceShortcutDialogUpdate from './RemittanceShortcutDialogUpdate'

export default {
  name: 'RemittanceShortcutTable',
  components: {
    BaseIndicator,
    RemittanceShortcutDialogUpdate
  },
  mixins: [ tableComponentMixin ]
}
</script>
