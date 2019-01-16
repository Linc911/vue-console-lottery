<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改六合彩基础配置" width="768px">
    <el-form
      :model="formData"
      label-width="80px"
      size="small"
      ref="formUpdate"
      class="clearfix"
    >
      <el-form-item prop="ball" label="球号">
        <el-input v-model.trim="formData.ball" disabled />
      </el-form-item>

      <el-form-item prop="tail" label="尾数">
        <FormSelectArray
          @on-change="$set(formData, 'tail', $event)"
          :value="formData.tail"
          :options="[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]"
          placeholder="选择尾数"
          width="100%"
        />
      </el-form-item>

      <el-form-item prop="colourType" label="波色">
        <FormSelectArray
          @on-change="$set(formData, 'colourType', $event)"
          :value="formData.colourType"
          :options="[ '红', '绿', '蓝' ]"
          placeholder="选择波色"
          width="100%"
        />
      </el-form-item>

      <el-form-item prop="colour" label="颜色">
        <el-color-picker v-model="formData.colour"></el-color-picker>
      </el-form-item>

      <el-form-item prop="chineseZodiac" label="生肖">
        <FormSelectArray
          @on-change="$set(formData, 'chineseZodiac', $event)"
          :value="formData.chineseZodiac"
          :options="[ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪' ]"
          placeholder="选择生肖"
          width="100%"
        />
      </el-form-item>

      <el-form-item prop="poultry" label="家禽/野兽">
        <FormRadio
          @on-change="$set(formData, 'poultry', $event)"
          :value="formData.poultry"
          :options="[
            { value: 1, label: '家禽' },
            { value: 0, label: '野兽' }
          ]"
        />
      </el-form-item>

      <el-form-item prop="icon" label="图标地址">
        <el-input v-model.trim="formData.icon" placeholder="http://www.xx.com/xx.jpg" />
      </el-form-item>

      <el-form-item prop="sort" label="排列顺序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="排列顺序" />
      </el-form-item>

      <el-form-item prop="remark" label="备注" class="custom-block">
        <el-input v-model.trim="formData.remark" type="textarea" rows="4" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="handleValidationSuccess (formData)" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormSelectArray from '@/components/form/FormSelectArray'
import FormRadio from '@/components/form/FormRadio'

export default {
  name: 'SixOddsDialogUpdate',
  components: {
    FormSelectArray,
    FormRadio
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSixSettingItem',
      httpParams: {}, // 必须携带的Id参数/及其他参数
      formData: {}
    }
  },
  watch: {
    data () {
      this.formData = Object.assign(this.formData, this.data)
      this.httpParams = { ball: this.data.ball }
    }
  }
}
</script>

<style scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
