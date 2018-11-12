<template lang="html">
  <div class="line-create">
    <el-dialog :visible.sync="dialogVisible" :title="`【${tab.name}】 创建新支付接口`" width="80%" style="min-width: 760px">
      <div>
        <!-- 表格数据 -->
        <el-table
          :data="tableData"
          @selection-change="handleSelectionChange"
          size="small"
          highlight-current-row
          border
        >
          <el-table-column type="selection" width="55" />

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

          <el-table-column prop="remark" label="备注" :min-width="120" />
        </el-table>

        <!-- 分页 -->
        <BasePagination
          @on-change="handlePaginationChange"
          :page="page"
          :requestParams="requestParams"
          :httpURL="tableHttpAPI"
        />
      </div>

      <span slot="footer">
        <el-button @click="comfirmCreate" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { tableWithPaginationPostMixin } from '@/mixins'

import BaseIndicator from '@/components/base/BaseIndicator'

export default {
  name: 'PaymentLineDialogCreate',
  components: {
    BaseIndicator
  },
  mixins: [ tableWithPaginationPostMixin ],
  props: {
    tab: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      tableData: [],
      multipleSelection: [],
      tableHttpAPI: 'fetchTransactionPaymentPort',
      requestParams: { pageNo: 1, pageSize: 10, status: 0, payTypeId: this.tab.id },
      page: { current: 1, size: 10, total: 10 }
    }
  },
  watch: {
    tab () {
      this.requestParams.payTypeId = this.tab.id
      this.fetchTableData()
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    handleSelectionChange (data) {
      this.multipleSelection = this.$_.map(data, 'id')
    },
    comfirmCreate () {
      this.dialogVisible = false

      this.$httpAPI.createTransactionPortLine({
        payTypeId: this.tab.id, payInterfaceIds: this.multipleSelection
      }).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-created')
          this.$message.success('创建新支付路线成功！')
        } else {
          this.$message.error('创建新支付路线失败！')
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
