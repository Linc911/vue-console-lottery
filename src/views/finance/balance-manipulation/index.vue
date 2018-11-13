<template lang="html">
  <div class="balance-manipulation">
    <!-- 面包屑导航 -->
    <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane label="创建加减款请求" name="creating" />
      <el-tab-pane label="加减款待审核列表" name="unchecked" />
      <el-tab-pane label="加减款已审核列表" name="checked" />
    </el-tabs>

    <!-- 主要内容 -->
    <component v-bind:is="currentTabComponent" @on-created="handleCreated"></component>
    <!-- <keep-alive>
    </keep-alive> -->
  </div>
</template>

<script>
import { breadcrumbMixin } from '@/mixins'

import BalanceManipulationForm from './components/BalanceManipulationForm'
import BalanceManipulationListUnchecked from './components/BalanceManipulationListUnchecked'
import BalanceManipulationListChecked from './components/BalanceManipulationListChecked'

export default {
  name: 'FinanceBalanceManipulation',
  components: {
    BalanceManipulationForm,
    BalanceManipulationListUnchecked,
    BalanceManipulationListChecked
  },
  mixins: [ breadcrumbMixin ],
  data () {
    return {
      activeTab: 'creating', // 当前活动菜单
      currentTabComponent: 'BalanceManipulationForm'
    }
  },
  methods: {
    handleCreated () {
      this.activeTab = 'unchecked'
      this.currentTabComponent = 'BalanceManipulationListUnchecked'
    },
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      switch (tab.name) {
        case 'creating':
          this.currentTabComponent = 'BalanceManipulationForm'
          break
        case 'unchecked':
          this.currentTabComponent = 'BalanceManipulationListUnchecked'
          break
        case 'checked':
        this.currentTabComponent = 'BalanceManipulationListChecked'
          break
        default:
          this.currentTabComponent = 'BalanceManipulationForm'
      }
    }
  }
}
</script>
