<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="right">
        <BaseAdd @on-click="$refs.dialogCreate.toggleDialogVisible(true)" />
      </div>
    </SearchLayout>

    <!-- 表格 -->
    <MenuSettingTable
      @on-submenu-toggle="handleSubmenuToggleVisible"
      @on-changed="fetchTableData($event)"
      :data="tableData"
    />

    <!-- 创建弹框 -->
    <MenuSettingDialogCreate @on-created="fetchTableData()" ref="dialogCreate" />
  </div>
</template>

<script>
import { searchLayoutWithoutSearchMixin } from '@/mixins'

import MenuSettingTable from './components/MenuSettingTable'
import MenuSettingDialogCreate from './components/MenuSettingDialogCreate'

export default {
  name: 'SystemMenuSetting',
  components: {
    MenuSettingTable,
    MenuSettingDialogCreate
  },
  mixins: [ searchLayoutWithoutSearchMixin ],
  data () {
    return {
      tableOriginData: [],
      tableData: [],
      tableHttpAPI: 'fetchSidebarMenuList',
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
        this.$_.forEach(this.tableOriginData, (item) => (item.child = false))

        this.tableData = this.$_.filter(this.tableOriginData, (item) => !item.parentId)
      } else {
        // 每次先把指示标签重置
        this.$_.forEach(this.tableOriginData, (item) => (item.child = false))
        menu.child = true

        // 数据处理：列举第一级的全部菜单和选中的第二级菜单
        this.tableData = this.$_.filter(this.tableOriginData, (item) => !item.parentId || item.parentId === menu.id)
      }
    },
    // 获取初始表格数据
    fetchTableData (parentId) {
      this.$httpAPI[this.tableHttpAPI](this.requestParams).then(response => {
        if (response.data.status === 200) {
          // 作为参考数据
          this.tableOriginData = response.data.data

          // （重载）数据处理：只列举第一级的全部菜单
          if (arguments[0] === undefined) {
            this.tableData = this.$_.filter(this.tableOriginData, (item) => !item.parentId)
          } else {
            // 第一级的全部菜单为展开状态
            this.$_.forEach(this.tableOriginData, (item) => {
              item.id === parentId && (item.child = true)
            })

            // 数据处理：列举第一级的全部菜单和选中的第二级菜单
            this.tableData = this.$_.filter(this.tableOriginData, (item) => !item.parentId || item.parentId === parentId)
          }
        } else {
          this.tableData = []
        }
      }).catch(error => console.log(error))
    }
  }
}
</script>
