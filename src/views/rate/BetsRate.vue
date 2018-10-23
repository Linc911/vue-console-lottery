<template lang="html">
  <section class="bets-rate clearfix">
    <aside class="aside-menu">
      <el-menu
        mode="vertical"
        default-active="3"
      >
        <template v-for="group in menu">
          <el-submenu :index="String(group.id)" :key="group.id">
            <template slot="title">
              <span>{{group.name}}</span>
            </template>

            <template v-for="item in group.children">
              <el-menu-item @click="switchOtherMenuItem(item.type)" :index="String(item.id)" :key="item.id">
                <span>{{item.name}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </aside>

    <!-- 表格数据 -->
    <section class="table-container">
      <el-table
        :data="tableData"
        height="665"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index"></el-table-column>

        <el-table-column
          prop="parentType"
          label="第一类类型"
          :filters="[
            { text: '主盘势', value: 1 },
            { text: '单码', value: 2 },
            { text: '选号-任选', value: 3 },
            { text: '选号-组选', value: 4 },
            { text: '选号-直选', value: 5 }
          ]"
          :filter-method="filterHandler"
        >
          <template slot-scope="scope">
            <span>{{scope.row.parentType | betType}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="childType" label="第二类类型" sortable>
          <template slot-scope="scope">
            <span>{{scope.row.childType | rateSecondType}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="betting" label="第三类类型" sortable>
          <template slot-scope="scope">
            <span>{{scope.row.betting | rateThirdType}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="odds" label="赔率" :width="100">
          <template slot-scope="scope">
            <span>{{scope.row.odds}}</span>
            <span class="pull-right">
              <BaseSetting @on-click="handleSettingRate(scope.row)"/>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
      </el-table>
    </section>

    <!-- 设置赔率弹框 -->
    <DialogInput
      @on-confirm="handleRateUpdate"
      :value="rateForm.odds"
      title="设置赔率"
      ref="dialogRateSetting"
    />
  </section>
</template>

<script>
import BaseSetting from '@/components/base/BaseSetting'
import DialogInput from '@/components/dialog/DialogInput'

export default {
  components: {
    BaseSetting,
    DialogInput
  },
  data () {
    return {
      menu: [],
      tableData: [],
      rateForm: { odds: '' }
    }
  },
  created () {
    this.fetchGameMenu()
    this.fetchBetsRate(3)
  },
  methods: {
    switchOtherMenuItem (type) {
      this.fetchBetsRate(type)
    },
    // 打开赔率设置对话框
    handleSettingRate (obj) {
      Object.assign(this.rateForm, obj)
      this.$refs.dialogRateSetting.toggleDialogStatus(true)
    },
    // 修改赔率
    handleRateUpdate (value) {
      this.rateForm.odds = value

      this.$axios.post('/api-g/oddsset/1/save', [ this.rateForm ]).then(() => {
        this.$_.forEach(this.tableData, item => {
          if (item.oddsid === this.rateForm.oddsid) {
            item.odds = this.rateForm.odds
          }
        })
        this.$refs.dialogRateSetting.toggleDialogStatus(false)
        this.$message.success('修改赔率成功！')
      }).catch(error => console.log(error))
    },
    // 表格过滤方法
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    // 获取游戏菜单
    fetchGameMenu () {
      this.$axios.get('/api-g/GameTypeConfig/tree').then(response => {
        this.menu = response.data.data
      }).catch(error => console.log(error))
    },
    // 获取赔率
    fetchBetsRate (type) {
      this.$axios.get('/api-g/oddsset/1', {
        params: { type }
      }).then(response => {
        this.tableData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-menu {
  position: fixed;
  left: 240px;
  top: 80px;
  z-index: 3;
  width: 200px;
  height: 100%;
  background-color: #fff;
}
.table-container {
  padding-left: 200px;
}
</style>
