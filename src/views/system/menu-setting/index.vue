<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="right">
        <BaseAdd @click.native="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 表格 -->
    <MenuSettingTable
      @on-submenu-toggle="handleSubmenuToggleVisible"
      @on-updated="fetchTableData()"
      @on-deleted="fetchTableData()"
      :data="tableData"
    />

    <!-- 创建弹框 -->
    <MenuSettingDialogCreate @on-created="fetchTableData()" :menuOptions="tableOriginData" ref="dialogCreate" />
  </div>
</template>

<script>
import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import MenuSettingTable from './components/MenuSettingTable'
import MenuSettingDialogCreate from './components/MenuSettingDialogCreate'

export default {
  name: 'SystemMenuSetting',
  components: {
    SearchLayout,
    BaseAdd,
    MenuSettingTable,
    MenuSettingDialogCreate
  },
  data () {
    return {
      tableOriginData: [],
      tableData: [],
      tableHttpAPI: 'fetchSystemMenuList',
      requestParams: {}
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    // 点击一级菜单时，先筛选出需要的数据再渲染到页面上
    handleSubmenuToggleVisible (menu) {
      if (menu.child) {
        // 每次先把指示标签重置
        this.$_.forEach(this.tableOriginData, (item) => {
          item.child = false
        })

        this.tableData = this.$_.filter(this.tableOriginData, (item) => !item.parentId)
      } else {
        // 每次先把指示标签重置
        this.$_.forEach(this.tableOriginData, (item) => {
          item.child = false
        })
        menu.child = true

        this.tableData = this.$_.filter(this.tableOriginData, (item) => {
          return !item.parentId || item.parentId === menu.id
        })
      }
    },
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI](this.requestParams).then(response => {
        if (response.data) {
          this.tableOriginData = response.data
          this.tableData = this.$_.filter(this.tableOriginData, (item) => !item.parentId)
        } else {
          this.tableData = []
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
