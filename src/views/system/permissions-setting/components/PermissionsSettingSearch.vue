<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="权限名称">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'name', $event)"
        placeholder="权限名称"
        :styles="{ width: '150px' }"
        ref="name"
      />
    </el-form-item>

    <el-form-item label="权限标识">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'permission', $event)"
        placeholder="权限标识"
        :styles="{ width: '150px' }"
        ref="permission"
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
