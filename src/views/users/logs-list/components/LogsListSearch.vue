<template lang="html">
  <el-form @submit.native.prevent :model="formData" size="small" inline>
    <el-form-item label="请求账号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="请求账号"
        :styles="{ width: '174px' }"
        ref="username"
      />
    </el-form-item>

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
