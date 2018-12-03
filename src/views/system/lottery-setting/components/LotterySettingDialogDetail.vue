<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="彩票游戏配置详情" width="760px">
      <el-form :model="formData" label-width="100px" size="small" class="clearfix" disabled>
        <el-form-item label="游戏名称">
          <el-input :value="formData.name" />
        </el-form-item>

        <el-form-item label="开始时间">
          <el-input :value="formData.startTime | sortTime" />
        </el-form-item>

        <el-form-item label="结束时间">
          <el-input :value="formData.endTime | sortTime" />
        </el-form-item>

        <el-form-item label="相隔时间">
          <el-input :value="formData.intervalTime | sortTime" />
        </el-form-item>

        <el-form-item label="开奖结果地址">
          <el-input :value="formData.url" />
        </el-form-item>

        <el-form-item label="排序">
          <el-input :value="formData.sort" />
        </el-form-item>

        <el-form-item label="开奖结果定时器crontab表达式" label-width="200px" class="custom-block">
          <el-input :value="formData.crontab" />
        </el-form-item>

        <el-form-item label="系统封盘定时器crontab表达式" label-width="200px" class="custom-block">
          <el-input :value="formData.myCrontab" />
        </el-form-item>

        <el-form-item label="启用状态">
          <el-radio-group v-model="formData.status">
            <el-radio :label="0">禁用</el-radio>
            <el-radio :label="1">启用</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="ID">
          <el-input :value="formData.id" />
        </el-form-item>

        <el-form-item label="上级分类">
          <el-input :value="formData.parentType" />
        </el-form-item>

        <el-form-item label="游戏副标题">
          <el-input :value="formData.information" />
        </el-form-item>

        <el-form-item label="游戏图标地址" class="custom-block">
          <el-input :value="formData.icon" />
        </el-form-item>

        <el-form-item label="备注" class="custom-block">
          <el-input :value="formData.remark" type="textarea" rows="3" />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'LotterySettingDialogDetail',
  components: {
    FormSelect
  },
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
