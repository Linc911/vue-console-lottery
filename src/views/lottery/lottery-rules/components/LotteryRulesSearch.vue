<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormSelectGame
      @on-change="$set(formData, 'gameType', $event)"
      httpAPIName="fetchGamesMenu"
      :httpAPIParams="{ params: { type: 1 } }"
      labelAttr="name"
      valueAttr="id"
      prop="gameType"
      label="游戏类型"
      filterable
      ref="gameType"
    />

    <el-form-item label="应用场景">
      <FormSelectArray
        @on-change="$set(formData, 'type', $event)"
        :options="[
          { value: 0, label: '电脑页面' },
          { value: 1, label: '手机页面' },
          { value: 2, label: '手机APP' },
        ]"
        :styles="{ width: '100px' }"
        ref="type"
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

import FormSelectGame from '@/components/form/FormSelectGame'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'UsersSettingSearch',
  components: {
    FormSelectGame,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>
