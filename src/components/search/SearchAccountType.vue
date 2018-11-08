<template lang="html">
  <el-form-item label="账户类型">
    <el-select v-model="selectedGame" @change="$emit('on-change', selectedGame)" placeholder="选择账户类型" clearable>
      <el-option
        v-for="game in games"
        :key="game.value"
        :label="game.label"
        :value="game.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchGames',
  data () {
    return {
      selectedGame: '',
      games: []
    }
  },
  created () {
    this.fetchGamesList()
  },
  methods: {
    reset () {
      this.selectedGame = ''
    },
    fetchGamesList () {
      this.$httpAPI.fetchGamesList().then(response => {
        this.$_.forEach(response.data.data, game => {
          this.games.push({
            value: game.id,
            label: game.name
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100px;
}
</style>
