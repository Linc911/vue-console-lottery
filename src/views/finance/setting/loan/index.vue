<template lang="html">
  <section class="loan-list">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <LoadCreate @on-success="handleCreatedLoadItem" />
    </div>

    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column prop="name" label="借贷类型" />

      <el-table-column prop="sort" label="排序" />

      <el-table-column prop="remark" label="备注" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="updateLoadItem(scope.row)" icon="el-icon-edit" type="primary" size="mini" />
          <el-button @click="removeLoadItem(scope.row, scope.$index)" icon="el-icon-delete" type="primary" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <el-dialog title="修改借贷数据" :visible.sync="dialogVisible" width="500px">
      <LoadForm @on-success="handleUpdatedLoadItem" :data="updatingLoad" />
    </el-dialog>

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDialogDeleteConfirm"
      :name="deletingLoad.name"
      title="借贷类型名称"
      ref="dialogDelete"
    />
  </section>
</template>

<script>
import LoadForm from './components/LoadForm'
import LoadCreate from './components/LoadCreate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'FinanceSettingLoan',
  components: {
    LoadForm,
    LoadCreate,
    DialogDeleteConfirm
  },
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      updatingLoad: {},
      deletingLoad: { name: '' },
      deletingLoadIndex: 0
    }
  },
  created () {
    this.fetchFinanceLoanList()
  },
  methods: {
    // 创建新的借贷数据，将数据添加到数组中
    handleCreatedLoadItem (load) {
      this.tableData.unshift(load)
    },
    // 修改数据： 显示弹框，记录当前要更新的借贷数据
    updateLoadItem (load) {
      this.updatingLoad = load
      this.dialogVisible = true
    },
    // 处理修改数据成功事件：隐藏弹框，重新请求数据（改动顺序时，不能直接在本地修改）
    handleUpdatedLoadItem () {
      this.dialogVisible = false
      this.fetchFinanceLoanList()
      this.$message.success('修改借贷数据成功！')
    },
    // 删除数据： 显示删除弹框，记录当前要更新的借贷数据和数组下标
    removeLoadItem (load, index) {
      this.deletingLoad = load
      this.deletingLoadIndex = index
      this.$refs.dialogDelete.toggleDialogStatus(true)
    },
    // 处理删除弹框确认事件： 发送删除数据请求，在本地直接删除数据，隐藏弹框
    handleDialogDeleteConfirm () {
      this.$httpAPI.deleteFinanceLoan({ params: { dictionaryId: this.deletingLoad.dictionaryId } }).then(() => {
        this.tableData.splice(this.deletingLoadIndex, 1)
        this.$refs.dialogDelete.toggleDialogStatus(false)
        this.$message.success('删除借贷数据成功！')
      }).catch(() => this.$message.error('删除借贷数据失败！'))
    },
    fetchFinanceLoanList () {
      this.$httpAPI.fetchFinanceLoanList({ params: { type: 0 } }).then(response => {
        this.tableData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>
