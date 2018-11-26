<template lang="html">
  <div>
    <!-- 菜单切换栏 -->
    <el-tabs v-model="activeTab" @tab-click="handleTabClick">
      <el-tab-pane v-for="item in data" :key="item.type" :label="item.name" :name="item.type" />
    </el-tabs>

    <el-tabs v-if="subtabVisible" type="card" v-model="activeSubtab" @tab-click="handleSubtabClick">
      <el-tab-pane v-for="item in subGame" :key="item.type" :label="item.name" :name="item.type" />
    </el-tabs>

    <!-- 表格 -->
    <OddsElevenTable @on-updated="$emit('on-updated')" :data="finalData" />
  </div>
</template>

<script>
import OddsElevenTable from './table/OddsElevenTable'

export default {
  name: 'OddsEleven',
  components: {
    OddsElevenTable
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tabIndex: 0,
      subtabIndex: 0,
      subtabVisible: true
    }
  },
  computed: {
    subGame () {
      if (this.data.length) {
        return this.data[this.tabIndex].children
      }
      return []
    },
    activeTab: {
      get () {
        if (this.data.length) {
          return this.data[this.tabIndex].type
        }
        return '1'
      },
      set () {
      }
    },
    activeSubtab: {
      get () {
        if (!this.data.length) {
          return '1.1'
        }
        // if (this.data[this.tabIndex].children === null) {
        //   return '1.1'
        // }
        return this.data[this.tabIndex].children[0].type
        // if (this.data.length) {
        //   return this.data[this.tabIndex].children[0].type
        // }
      },
      set () {
      }
    },
    finalData () {
      if (!this.data.length) {
        return []
      }
      // if (this.data[this.tabIndex].children === null) {
      //   return []
      // }
      // if (this.data[this.tabIndex].children[this.subtabIndex].children === null) {
      //   return []
      // }
      if (this.subtabVisible) {
        return this.data[this.tabIndex].children[this.subtabIndex].children
      } else {
        return this.data[this.tabIndex].children
      }
    }
  },
  methods: {
    // 菜单切换；根据不同的菜单更新对应数据
    handleTabClick (tab) {
      this.tabIndex = tab.index
      if (this.data[tab.index].children[0].children === null) {
        this.subtabVisible = false
      } else {
        this.subtabVisible = true
      }
    },
    handleSubtabClick (tab) {
      this.subtabIndex = tab.index
    }
  }
}
</script>
