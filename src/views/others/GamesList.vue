<template>
  <el-table :data="games">
    <el-table-column type="name">
      <template slot-scope="props">
        <p>Name: {{ props.row.name }}</p>
      </template>
    </el-table-column>

    <el-table-column type="index" />
    <el-table-column label="ID" prop="id" />
    <el-table-column label="游戏名称" prop="name" />

    <el-table-column label="父类型" prop="parentType" />
    <el-table-column label="游戏类型" prop="type" />
    <el-table-column label="开始时间" prop="startTime" />
    <el-table-column label="结束时间" prop="endTime" />
    <el-table-column label="每期相隔的时间" prop="intervalTime" />
    <el-table-column label="开奖结果的地址" prop="url" />
    <el-table-column label="子类型信息" prop="children" />
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      games: []
    }
  },
  created () {
    this.fetchGamesList()
  },
  methods: {
    // 获取游戏菜单
    fetchGamesList () {
      this.$axios.get('/api-g/GameTypeConfig/tree').then(response => {
        this.games = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>
