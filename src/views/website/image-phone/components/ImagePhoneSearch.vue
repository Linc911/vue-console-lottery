<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'name', $event)"
      label="图片名称"
      width="174px"
      ref="name"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '启用' },
        { value: 1, label: '禁用' },
      ]"
      label="启用状态"
      width="100px"
      ref="status"
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
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'ActivityListSearch',
  components: {
    FormInput,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>
