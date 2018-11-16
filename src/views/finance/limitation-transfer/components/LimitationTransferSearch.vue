<template lang="html">
  <el-form :model="formData" size="small" label-width="80px" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="账户名称"
      width="174px"
      ref="username"
    />

    <FormSelect
      @on-change="$set(formData, 'source', $event)"
      httpAPIName="fetchGamesList"
      labelAttr="name"
      valueAttr="id"
      prop="source"
      label="源头账户"
      ref="source"
    />

    <FormSelect
      @on-change="$set(formData, 'target', $event)"
      httpAPIName="fetchGamesList"
      labelAttr="name"
      valueAttr="id"
      prop="target"
      label="目标账户"
      ref="target"
    />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'LimitationTransferSearch',
  components: {
    FormInput,
    FormSelect
  },
  mixins: [ searchInnerMixin ]
}
</script>
