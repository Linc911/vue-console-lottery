<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <el-form-item label="分润设置名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="分润设置名称"
          :styles="{ width: '140px' }"
          ref="name"
        />
      </el-form-item>

      <FormSelect
        @on-change="$set(formData, 'gameConfigId', $event)"
        :value="formData.gameConfigId"
        httpAPIName="fetchGameClasses"
        labelAttr="name"
        valueAttr="id"
        prop="gameConfigId"
        label="游戏类型"
        ref="gameConfigId"
      />

      <el-form-item label="启用状态">
        <FormSelectArray
          @on-change="$set(formData, 'status', $event)"
          :options="[ '启用', '禁用' ]"
          :styles="{ width: '100px' }"
          ref="status"
        />
      </el-form-item>

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'RebateSettingSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
