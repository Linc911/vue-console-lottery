<template lang="html">
  <!-- 条件筛选 -->
  <el-form @submit.native.prevent :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="请求账号"
      width="174px"
      ref="username"
    />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script>
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'

export default {
  name: 'LogsListSearch',
  components: {
    FormInput
  },
  mixins: [ searchInnerMixin ]
}
</script>
