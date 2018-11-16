<template lang="html">
  <div class="table-container">
    <el-table
      :data="data"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :width="40" />

      <el-table-column prop="username" label="收款户名" />

      <el-table-column prop="userAccount" label="收款账号" :width="130" />

      <el-table-column prop="bank" label="收款银行" />

      <el-table-column prop="bankAddress" label="银行地址" />

      <el-table-column prop="codeUrl" label="二维码地址" />

      <el-table-column prop="sysGroupNames" label="会员分组" :min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.sysGroupNames | separator(' ') }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="discountRatio" label="优惠比例%" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.discountRatio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" :width="45" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialogCreate(scope.row)"  type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialogDelete(scope.row)" type="primary" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改会员汇款弹框 -->
    <UserRemittanceDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogCreate" />

    <!-- 删除会员汇款弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="支付户名"
      :name="activeItem.username"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import UserRemittanceDialogUpdate from './UserRemittanceDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'UserRemittanceTable',
  components: {
    UserRemittanceDialogUpdate,
    DialogDeleteConfirm
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeItem: { username: '' }
    }
  },
  methods: {
    showDialogCreate (item) {
      this.activeItem = item
      this.$refs.dialogCreate.toggleDialogVisible(true)
    },
    showDialogDelete (item) {
      this.activeItem = item
      this.$refs.dialogDelete.toggleDialogStatus(true)
    },
    handleDeleteConfirm () {
      this.$refs.dialogDelete.toggleDialogStatus(false)

      this.$httpAPI.deleteTransactionRemittance({
        params: { remitId: this.activeItem.id }
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
