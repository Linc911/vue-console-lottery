<template lang="html">
  <div>
    <!-- 彩票分类菜单 -->
    <aside class="aside-menu">
      <MarkSixMenu @on-change="handleMenuChange" :gameType="'30'" />
    </aside>

    <!-- 主要内容 -->
    <div class="content-container">
      <!-- 一级菜单切换栏 -->
      <el-tabs v-if="layers > 0" v-model="layer1Tab" @tab-click="handleTabClick($event, 0)">
        <el-tab-pane
          v-for="item in tableData"
          :key="item.type"
          :label="item.name"
          :name="item.type"
        />
      </el-tabs>

      <el-tabs v-if="layers > 1" v-model="layer2Tab" @tab-click="handleTabClick($event, 1)">
        <el-tab-pane
          v-for="item in tableData[layer1Index].children"
          :key="item.type"
          :label="item.name"
          :name="item.type"
        />
      </el-tabs>

      <el-tabs v-if="layers > 2" v-model="layer3Tab" @tab-click="handleTabClick($event, 2)">
        <el-tab-pane
          v-for="item in tableData[layer1Index].children[layer2Index].children"
          :key="item.type"
          :label="item.name"
          :name="item.type"
        />
      </el-tabs>

      <el-tabs v-if="layers > 3" v-model="layer4Tab" @tab-click="handleTabClick">
        <el-tab-pane
          v-for="item in tableData[layer1Index].children[layer2Index].children[layer3Index].children"
          :key="item.type"
          :label="item.name"
          :name="item.type"
        />
      </el-tabs>

      <el-tabs v-if="layers > 4" v-model="layer4Tab" @tab-click="handleTabClick">
        <el-tab-pane v-for="item in tableData[0].children[0].children[0].children[0].children" :key="item.type" :label="item.name" :name="item.type" />
      </el-tabs>

      <!-- 表格 -->
      <LotteryOddsTable @on-updated="fetchTableData()" :data="finalData" />
    </div>
  </div>
</template>

<script>
import MarkSixMenu from './components/MarkSixMenu'
import LotteryOddsTable from './components/LotteryOddsTable'

export default {
  name: 'LotteryResults',
  components: {
    MarkSixMenu,
    LotteryOddsTable
  },
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchSixOddsList',
      requestParams: { gameType: 30 },
      tabIndex: 0,
      subtabIndex: 0,
      layers: 0,
      layer1Tab: '',
      layer1Index: 0,
      layer2Tab: '',
      layer2Index: 0,
      layer3Tab: '',
      layer3Index: 0,
      layer4Tab: ''
    }
  },
  created () {
    this.fetchTableData()
  },
  computed: {
    finalData () {
      switch (this.layers) {
        case 0:
          this.tableData.length && (this.layer1Tab = this.tableData[this.layer1Index].type)
          return this.tableData
        case 1:
          return this.tableData[this.layer1Index].children
        case 2:
          return this.tableData[this.layer1Index].children[this.layer2Index].children
        case 3:
          return this.tableData[this.layer1Index].children[this.layer2Index].children[this.layer3Index].children
        case 4:
          return this.tableData[0].children[0].children[0].children[0].children
        default:
          return []
      }
    }
  },
  methods: {
    // 一级菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab, layer) {
      switch (layer) {
        case 0:
          this.layers = this._calcLayers(this.tableData[tab.index].children) + 1
          this.layer1Index = tab.index
          this.layer2Index = 0
          this.layer3Index = 0
          break
        case 1:
          this.layers = this._calcLayers(this.tableData[this.layer1Index].children[tab.index].children) + 2
          this.layer2Index = tab.index
          this.layer3Index = 0
          break
        case 2:
          this.layer3Index = tab.index
          break
        case 3:
          this.layer4Index = tab.index
          break
      }
    },
    // 侧边栏游戏切换： 初始化一、二级菜单；请求新数据
    handleMenuChange ({ groupId, itemId }) {
      this.layer1Tab = ''
      this.layer2Tab = ''
      this.layer3Tab = ''
      this.layer4Tab = ''
      // 请求新数据时，将全部下班重置 否则报错
      this.layer1Index = 0
      this.layer2Index = 0
      this.layer3Index = 0

      this.requestParams = { gameType: itemId, pageNo: 1, pageSize: 10 }
      this.fetchTableData()
    },
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI](
        { params: this.requestParams }
      ).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data

          this.layers = this._calcLayers(this.tableData)
          // console.log(this._calcLayers(this.tableData))
        } else {
          this.tableData = []
        }
      }).catch(error => console.log(error))
    },
    _calcLayers (arr) {
      // 判断传入参数是 Array
      if (!Array.isArray(arr)) {
        throw new Error('Parameter must be Array')
      }

      if (arr[0].children) {
        if (arr[0].children[0].children) {
          if (arr[0].children[0].children[0].children) {
            if (arr[0].children[0].children[0].children[0].children) {
              if (arr[0].children[0].children[0].children[0].children[0].children) {
                if (arr[0].children[0].children[0].children[0].children[0].children[0].children) {
                  return 6
                } else {
                  return 5
                }
              } else {
                return 4
              }
            } else {
              return 3
            }
          } else {
            return 2
          }
        } else {
          return 1
        }
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-menu {
  float: left;
  width: 200px;
  height: 100%;
  background-color: #fff;
}
.content-container {
  padding-left: 220px;
}
</style>
