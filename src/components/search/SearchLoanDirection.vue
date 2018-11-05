<template lang="html">
  <el-form-item label="调整方向">
    <el-select v-model="loanDirection" @change="$emit('on-change', loanDirection)" placeholder="调整方向" clearable>
      <el-option
        v-for="direction in loanDirections"
        :key="direction.value"
        :label="direction.label"
        :value="direction.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchLoanDirection',
  data () {
    return {
      loanDirection: '',
      loanDirections: [
        { label: '增加', value: 0 },
        { label: '减少', value: 1 }
      ]
    }
  },
  methods: {
    reset () {
      this.loanDirection = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100px;
}
</style>
