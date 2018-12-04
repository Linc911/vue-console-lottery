<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'name', $event)"
      label="权限名称"
      width="174px"
      ref="name"
    />

    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'permission', $event)"
      label="权限标识"
      width="174px"
      ref="permission"
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
