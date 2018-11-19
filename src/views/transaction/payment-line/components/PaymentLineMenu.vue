<template>
  <!-- 菜单切换栏 -->
  <el-tabs v-model="activeTab" @tab-click="handleTabClick" tab-position="left">
    <el-tab-pane v-for="item in menu" :key="item.id" :label="item.name" :name="item.id" />
  </el-tabs>
</template>

<script>
import { menuMixin } from '@/mixins'

export default {
  name: 'PaymentLineMenu',
  mixins: [ menuMixin ],
  data () {
    return {
      menu: [],
      activeTab: '2436534410149889021',
      menuHttpAPI: 'fetchTransactionPaymentType',
      requestParams: {}
    }
  }
}
</script>
