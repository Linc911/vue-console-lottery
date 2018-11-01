<template lang="html">
  <section class="deposit-form">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="会员填单存款未审核列表" name="unchecked">
        <component :is="DepositFormUnchecked" />
      </el-tab-pane>
      <el-tab-pane label="会员填单存款列表" name="checked">
        <component :is="DepositFormChecked" />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import DepositFormUnchecked from './DepositFormUnchecked'
import DepositFormChecked from './DepositFormChecked'

export default {
  name: 'FinanceDepositForm',
  components: {
    DepositFormUnchecked,
    DepositFormChecked
  },
  data () {
    return {
      activeTab: 'unchecked'
    }
  }
}
</script>
