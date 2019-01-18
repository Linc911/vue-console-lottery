<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="用户账户">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="用户账户"
        :styles="{ width: '140px' }"
        ref="username"
      />
    </el-form-item>

    <el-form-item label="用户昵称">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'nickname', $event)"
        placeholder="用户昵称"
        :styles="{ width: '140px' }"
        ref="nickname"
      />
    </el-form-item>

    <el-form-item label="真实姓名">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'realname', $event)"
        placeholder="真实姓名"
        :styles="{ width: '140px' }"
        ref="realname"
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

export default {
  name: 'UsersSettingSearch',
  components: {
    FormInput
  },
  mixins: [ searchInnerMixin ]
}
</script>
