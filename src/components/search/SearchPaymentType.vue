<template lang="html">
  <el-form-item label="支付类型">
    <el-select v-model="paymentType" @change="$emit('on-change', paymentType)" placeholder="支付类型" clearable>
      <el-option
        v-for="type in types"
        :key="type.value"
        :label="type.label"
        :value="type.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchPaymentType',
  data () {
    return {
      paymentType: '',
      types: [
        { label: '客服填单', value: -1 },
        { label: '微信', value: 1 }
      ]
    }
  },
  methods: {
    reset () {
      this.paymentType = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100px;
}
</style>
