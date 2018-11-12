<template lang="html">
  <el-form-item prop="interfaceTypeId" label="接口类型">
    <el-select
      v-model="selectedOption"
      @change="$emit('on-change', $event)"
      placeholder="选择接口类型"
      class="custom-block"
    >
        <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value" />
      </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'FormPortType',
  data () {
    return {
      selectedOption: '',
      options: []
    }
  },
  created () {
    this.fetchTransactionPortType()
  },
  methods: {
    reset () {
      this.selectedOption = ''
    },
    fetchTransactionPortType () {
      this.$httpAPI.fetchTransactionPortType({ params: { type: 1 } }).then(response => {
        this.$_.forEach(response.data.data, item => {
          this.options.push({
            label: item.name,
            value: item.dictionaryId
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>
