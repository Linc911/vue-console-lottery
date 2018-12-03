<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新银行卡" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      size="small"
      ref="formCreate"
    >
      <el-form-item prop="name" label="地区名称">
        <el-input v-model.trim="formData.name" placeholder="中国" />
      </el-form-item>

      <FormSelect
        @on-change="$set(formData, 'parentId', $event)"
        httpAPIName="fetchSystemAreaList"
        :httpAPIParams="{ pageNo: 1, pageSize: 10 }"
        labelAttr="name"
        valueAttr="parentId"
        prop="parentId"
        label="所属地区"
        optionRoot
        ref="parentId"
      />

      <el-form-item prop="sort" label="排序" >
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="99" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.wechat" placeholder="中国_广东" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import FormSelect from '@/components/form/FormSelect'

import { dialogCreateMixin } from '@/mixins'
import FormValition from '@/config/form'

export default {
  name: 'BanksSettingDialogCreate',
  components: {
    FormSelect
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateSystemAreaItem',
      formData: { sort: 0 },
      rules: {
        name: FormValition.validateRequired('地区名称'),
        sort: FormValition.validateInteger('排序')
      }
    }
  }
}
</script>
