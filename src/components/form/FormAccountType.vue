<template lang="html">
  <el-form-item prop="gameType" label="账户类型">
    <el-select v-model="selectedType" @change="$emit('on-change', $event)" placeholder="选择账户类型">
      <el-option v-for="type in AccountTypes" :key="type.value" :label="type.label" :value="type.value" />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      selectedType: '',
      AccountTypes: []
    }
  },
  created () {
    this.fetchGamesList()
  },
  methods: {
    reset () {
      this.selectedType = ''
    },
    fetchGamesList () {
      this.$httpAPI.fetchGamesList().then(response => {
        this.$_.forEach(response.data.data, item => {
          this.AccountTypes.push({
            label: item.name,
            value: item.id
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>
