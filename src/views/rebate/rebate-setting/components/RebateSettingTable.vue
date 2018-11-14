<template lang="html">
  <div class="table-container">
    <el-table :data="data" size="small" highlight-current-row border>

      <el-table-column type="index" :width="40" />

      <el-table-column prop="name" label="返水名称" />

      <el-table-column prop="upperLimit" label="投注上限" />

      <el-table-column prop="lowerLimit" label="投注下限" />

      <el-table-column prop="ratio" label="返佣比例">
        <template slot-scope="scope">
          <span>{{ scope.row.ratio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sysGroupNames" label="会员分组" :min-width="120" >
        <template slot-scope="scope">
          <span>{{ scope.row.sysGroupNames | separator(' ') }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="startTime" label="计划开始时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="endTime" label="计划结束时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="是否启用">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.status" opposite />
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <!-- <el-button @click="showDialogUpdate(scope.row)"  type="primary" icon="el-icon-edit" size="mini" /> -->
          <!-- <el-button @click="showDialogDelete(scope.row)" type="primary" icon="el-icon-delete" size="mini" /> -->
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改支付类型弹框 -->
    <RemittanceShortcutDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import BaseIndicator from '@/components/base/BaseIndicator'
import RemittanceShortcutDialogUpdate from './RemittanceShortcutDialogUpdate'

export default {
  name: 'RebateSettingTable',
  components: {
    BaseIndicator,
    RemittanceShortcutDialogUpdate
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
