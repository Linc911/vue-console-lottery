<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新出款商户配置" width="760px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="100px"
      size="small"
      ref="formCreate"
      class="clearfix"
    >
      <el-form-item prop="name" label="接口名称">
        <el-input v-model.trim.trim="formData.name" placeholder="接口名称" />
      </el-form-item>

      <FormSelect
        @on-change="$set(formData, 'dictionaryId', $event)"
        httpAPIName="fetchWithdrawAccountTypeList"
        :httpAPIParams="{ params: { type: 5 } }"
        labelAttr="name"
        valueAttr="dictionaryId"
        prop="dictionaryId"
        label="接口类型"
        ref="dictionaryId"
      />

      <el-form-item prop="sort" label="排列顺序">
        <el-input v-model.trim="formData.sort" placeholder="排列顺序" type="number" />
      </el-form-item>

      <el-form-item prop="status" label="启用状态">
        <el-radio-group v-model.trim="formData.status">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">禁用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="merchantId" label="商户ID">
        <el-input v-model.trim="formData.merchantId" placeholder="支付宝" />
      </el-form-item>

      <el-form-item prop="operator" label="操作人">
        <el-input v-model.trim="formData.operator" placeholder="超级管理员" />
      </el-form-item>

      <el-form-item prop="address" label="支付地址" class="custom-block">
        <el-input v-model.trim="formData.address" placeholder="广东广州" />
      </el-form-item>

      <el-form-item prop="publicKey" label="秘钥(公钥)" class="custom-block">
        <el-input v-model.trim="formData.publicKey" placeholder="秘钥(公钥)" />
      </el-form-item>

      <el-form-item prop="privateKey" label="秘钥(私钥)" class="custom-block">
        <el-input v-model.trim="formData.privateKey" placeholder="秘钥(私钥)" />
      </el-form-item>

      <el-form-item prop="whiteList" label="IP白名单" class="custom-block">
        <el-input v-model.trim="formData.whiteList" placeholder="ip白名单，多个用逗号分隔" />
      </el-form-item>

      <el-form-item prop="remark" label="备注" class="custom-block">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'WithdrawAccountDialogCreate',
  components: {
    FormSelect
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateWithdrawAccountItem',
      formData: { sort: 0, status: 0 },
      rules: {
        name: { required: true, message: '接口名称不能为空' },
        dictionaryId: { required: true, message: '接口类型必须选择一个' },
        status: { required: true, message: '启用状态必须选择一个' },
        sort: this.$utils.generateFormValidatorInteger('排列顺序')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
