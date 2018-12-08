<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="用户账号"
      width="174px"
      ref="username"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '待审核' },
        { value: 1, label: '已查看' },
        { value: 2, label: '待解决' },
        { value: 3, label: '已解决' },
        { value: 4, label: '不予解决' }
      ]"
      label="处理状态"
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
