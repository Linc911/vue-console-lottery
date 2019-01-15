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
        <el-select v-model="formData.tail" placeholder="选择尾数">
          <el-option
            v-for="(item, index) in tails"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="colourType" label="波色">
        <el-select v-model="formData.colourType" placeholder="选择波色">
          <el-option
            v-for="(item, index) in colors"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="colour" label="颜色">
        <el-color-picker v-model="formData.colour"></el-color-picker>
      </el-form-item>

      <el-form-item prop="chineseZodiac" label="生肖">
        <el-select v-model="formData.chineseZodiac" placeholder="选择生肖">
          <el-option
            v-for="(item, index) in zodiac"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="poultry" label="家禽/野兽">
        <el-radio v-model="formData.poultry" :label="1">家禽</el-radio>
        <el-radio v-model="formData.poultry" :label="0">野兽</el-radio>
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
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

export default {
  name: 'SixOddsDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      tails: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      colors: [ '红', '绿', '蓝' ],
      zodiac: [ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪' ],
      updateHttpAPI: 'updateSixSettingItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: {}
    }
  },
  watch: {
    data () {
      this.formData = Object.assign(this.formData, this.data)
      this.idParams = { ball: this.data.ball }
    }
  }
}
</script>

<style scoped>
.el-form-item {
  float: left;
  width: 50%;
}

.el-select {
  width: 100%;
}
</style>
