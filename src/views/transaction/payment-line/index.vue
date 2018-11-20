<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <PaymentLineSearch @on-search="handleSearch" style="margin-left: 150px" />
      </div>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div class="clearfix" style="">
      <!-- 侧边支付类型菜单 -->
      <PaymentLineMenu @on-change="handleTabSwitch" style="float:left; width: 150px" />

      <!-- 表格 -->
      <PaymentLineTable
        :data="tableData"
        @on-deleted="fetchTableData()"
        style="float: right; width: calc(100% - 150px)"
      />
    </div>

    <!-- 创建新支付路线弹框 -->
    <PaymentLineDialogCreate :tab="tab" @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchOuterMixin, tableWithoutPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import PaymentLineMenu from './components/PaymentLineMenu'
import PaymentLineSearch from './components/PaymentLineSearch'
import BaseAdd from '@/components/base/BaseAdd'
import PaymentLineTable from './components/PaymentLineTable'
import PaymentLineDialogCreate from './components/PaymentLineDialogCreate'

export default {
  name: 'TransactionPaymentLine',
  components: {
    SearchLayout,
    PaymentLineMenu,
    PaymentLineSearch,
    BaseAdd,
    PaymentLineTable,
    PaymentLineDialogCreate
  },
  mixins: [ searchOuterMixin, tableWithoutPaginationMixin ],
  data () {
    return {
      tableData: [],
      tab: { id: '2436534410149889021', name: '微信转账' },
      tableHttpAPI: 'fetchTransactionPortLine',
      requestParams: { payTypeId: '2436534410149889021', status: 0 }
    }
  },
  methods: {
    // 侧边栏标签切换
    handleTabSwitch (tab) {
      this.requestParams.payTypeId = tab.id
      this.tab = tab

      this.fetchTableData()
    }
  }
}
</script>
