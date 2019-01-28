<template lang="html">
  <el-form @submit.native.prevent :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="注册人员">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placeholder="注册人员"
          :styles="{ width: '140px' }"
          ref="username"
        />
      </el-form-item>
    </SearchFormLayout>
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
