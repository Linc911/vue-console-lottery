<template lang="html">
  <el-form-item label="借贷类型">
    <el-select
      v-model="selectedLoanType"
      @change="$emit('on-change', selectedLoanType)"
      placeholder="选择借贷类型"
      clearable
    >
      <el-option
        v-for="type in loanTypes"
        :key="type.value"
        :label="type.label"
        :value="type.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchLoanType',
  data () {
    return {
      selectedLoanType: '',
      loanTypes: []
    }
  },
  created () {
    this.fetchFinanceLoanList()
  },
  methods: {
    reset () {
      this.selectedLoanType = ''
    },
    fetchFinanceLoanList () {
      this.$httpAPI.fetchFinanceLoanList().then(response => {
        this.$_.forEach(response.data.data, type => {
          this.loanTypes.push({
            value: type.dictionaryId,
            label: type.name
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
