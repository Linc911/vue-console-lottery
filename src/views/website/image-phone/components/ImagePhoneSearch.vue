<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="图片名称">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'name', $event)"
        placeholder="图片名称"
        :styles="{ width: '140px' }"
        ref="name"
      />
    </el-form-item>

    <el-form-item label="启用状态">
      <FormSelectArray
        @on-change="$set(formData, 'status', $event)"
        :options="[ '启用', '禁用' ]"
        :styles="{ width: '100px' }"
        ref="status"
      />
    </el-form-item>

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'ActivityListSearch',
  components: {
    FormInput,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
