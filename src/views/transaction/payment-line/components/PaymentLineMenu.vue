<template>
  <!-- 菜单切换栏 -->
  <el-tabs v-model="activeTab" @tab-click="handleTabClick" tab-position="left">
    <el-tab-pane v-for="item in listData" :key="item.id" :label="item.name" :name="item.id" />
  </el-tabs>
</template>

<script>
import { listMixin } from '@/mixins'

export default {
  name: 'PaymentLineMenu',
  mixins: [ listMixin ],
  data () {
    return {
      activeTab: '2436534410149889021',
      listHttpAPI: 'fetchTransactionPaymentType',
      requestParams: {}
    }
  },
  methods: {
    handleTabClick (tab) {
      this.$emit('on-change', { id: tab.name, name: tab.label })
    }
  }
}
</script>
