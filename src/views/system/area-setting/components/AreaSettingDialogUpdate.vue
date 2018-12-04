<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改银行配置" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="name" label="地区名称">
        <el-input v-model.trim="formData.name" placeholder="中国" />
      </el-form-item>

      <FormSelect
        @on-change="$set(formData, 'parentId', $event)"
        :value="formData.parentId"
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
        <el-input v-model.trim="formData.remark" placeholder="中国_广东" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import FormValition from '@/config/form'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'AreaSettingDialogUpdate',
  components: {
    FormSelect
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemUsersItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', sort: '' },
      rules: {
        name: FormValition.validateRequired('地区名称'),
        sort: FormValition.validateInteger('排序')
      }
    }
  },
  watch: {
    data () {
      this.idParams = { id: this.data.id }
    }
  }
}
</script>
