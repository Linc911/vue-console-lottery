<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="银行名称">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'name', $event)"
        placeholder="银行名称"
        :styles="{ width: '140px' }"
        ref="name"
      />
    </el-form-item>

    <el-form-item label="所属城市">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'address', $event)"
        placeholder="所属城市"
        :styles="{ width: '140px' }"
        ref="address"
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
