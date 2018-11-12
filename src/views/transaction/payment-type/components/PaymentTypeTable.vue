<template lang="html">
  <div class="table-container">
    <el-table
    :data="data"
    size="small"
    highlight-current-row
    border
    >
    <el-table-column type="index" :min-width="30" />

    <el-table-column prop="name" label="支付类型" />

    <el-table-column prop="status" label="是否推荐">
      <template slot-scope="scope">
        <BaseIndicator :status="scope.row.status" opposite />
      </template>
    </el-table-column>

    <el-table-column prop="sort" label="排序" sortable />

    <el-table-column prop="remark" label="备注" />

    <el-table-column prop="operations" label="操作">
      <template slot-scope="scope">
        <el-button @click="showDialogUpdate(scope.row)" type="primary" icon="el-icon-edit" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改支付类型弹框 -->
    <PaymentTypeDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import BaseIndicator from '@/components/base/BaseIndicator'
import PaymentTypeDialogUpdate from './PaymentTypeDialogUpdate'

export default {
  name: 'PaymentTypeTable',
  components: {
    BaseIndicator,
    PaymentTypeDialogUpdate
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
