<template lang="html">
  <el-form-item prop="loanType" label="借贷类型">
    <el-select v-model="selectedType" @change="$emit('on-change', $event)" placeholder="选择借贷类型">
        <el-option v-for="type in types" :key="type.value" :label="type.label" :value="type.value" />
      </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormLoanType',
  data () {
    return {
      selectedType: '',
      types: []
    }
  },
  created () {
    this.fetchFinanceLoanType()
  },
  methods: {
    reset () {
      this.selectedType = ''
    },
    fetchFinanceLoanType () {
      // 字典类型(0:借贷)
      this.$httpAPI.fetchFinanceLoanType({ params: { type: 0 } }).then(response => {
        this.$_.forEach(response.data.data, type => {
          this.types.push({
            label: type.name,
            value: type.dictionaryId
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>
