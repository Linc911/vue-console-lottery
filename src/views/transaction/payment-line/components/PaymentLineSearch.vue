<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" label-width="80px" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'name', $event)"
        label="路线名称"
        width="174px"
      />

      <FormSelect
        @on-change="$set(formData, 'interfaceTypeId', $event)"
        httpAPIName="fetchTransactionPortType"
        :httpAPIParams="{ params: { type: 1 } }"
        labelAttr="name"
        valueAttr="dictionaryId"
        prop="interfaceTypeId"
        label="接口类型"
        ref="interfaceTypeId"
      />

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'PaymentLineSearch',
  components: {
    FormInput,
    FormSelect,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    search () {
      this.$emit('on-search', this.formData)
    },
    reset () {
      for (let key in this.$refs) {
        this.$refs[key].reset()
      }

      this.formData = {}
    }
  }
}
</script>
