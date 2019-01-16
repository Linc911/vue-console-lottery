<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="球号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'ball', $event)"
        placeholder="输入球号"
        :styles="{ width: '120px' }"
        ref="ball"
      />
    </el-form-item>

    <el-form-item label="尾数">
      <FormSelectArray
        @on-change="$set(formData, 'tail', $event)"
        :value="formData.tail"
        :options="[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]"
        placeholder="选择尾数"
        :styles="{ width: '100px' }"
        ref="tail"
      />
    </el-form-item>

    <el-form-item label="波色">
      <FormSelectArray
        @on-change="$set(formData, 'colourType', $event)"
        :value="formData.colourType"
        :options="[ '红', '绿', '蓝' ]"
        placeholder="选择波色"
        :styles="{ width: '100px' }"
        ref="colourType"
      />
    </el-form-item>

    <el-form-item label="生肖">
      <FormSelectArray
        @on-change="$set(formData, 'chineseZodiac', $event)"
        :value="formData.chineseZodiac"
        :options="[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪' ]"
        placeholder="选择生肖"
        :styles="{ width: '100px' }"
        ref="colourType"
      />
    </el-form-item>

    <el-form-item label="家禽/野兽">
      <FormSelectStatic
        @on-change="$set(formData, 'poultry', $event)"
        :value="formData.poultry"
        :options="[
          { value: 1, label: '家禽' },
          { value: 0, label: '野兽' }
        ]"
        placeholder="家禽/野兽"
        :styles="{ width: '100px' }"
        ref="poultry"
      />
    </el-form-item>

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script>
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelectArray from '@/components/form/FormSelectArray'
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'SixSettingSearch',
  components: {
    FormInput,
    FormSelectArray,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>
