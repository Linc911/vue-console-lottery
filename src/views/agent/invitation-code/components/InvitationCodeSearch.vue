<template lang="html">
  <el-form @submit.native.prevent :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="注册人员"
      width="174px"
      ref="username"
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

export default {
  name: 'UsersSettingSearch',
  components: {
    FormInput
  },
  mixins: [ searchInnerMixin ]
}
</script>
