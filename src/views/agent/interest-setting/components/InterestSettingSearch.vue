<template lang="html">
  <el-form :model="formData" size="small" inline>
    <SearchFormLayout @on-search="search()" @on-reset="handleRefresh">
      <el-form-item label="分润设置名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="分润设置名称"
          :styles="{ width: '140px' }"
          ref="name"
        />
      </el-form-item>

      <el-form-item label="游戏类型">
        <FormSelectAsync
          @on-change="$set(formData, 'gameConfigId', $event)"
          :value="formData.gameConfigId"
          httpAPIName="fetchGameClasses"
          labelAttr="name"
          valueAttr="id"
          ref="gameConfigId"
        />
      </el-form-item>

      <el-form-item label="启用状态">
        <FormSelectArray
          @on-change="$set(formData, 'status', $event)"
          :options="[ '启用', '禁用' ]"
          :styles="{ width: '100px' }"
          ref="status"
        />
      </el-form-item>
    </SearchFormLayout>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelectAsync from '@/components/form/FormSelectAsync'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'InterestSettingSearch',
  components: {
    FormInput,
    FormSelectAsync,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
