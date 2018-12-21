<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="用户账户"
      width="174px"
      ref="username"
    />

    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'nickname', $event)"
      label="用户昵称"
      width="174px"
      ref="nickname"
    />

    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'realname', $event)"
      label="真实姓名"
      width="174px"
      ref="realname"
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
