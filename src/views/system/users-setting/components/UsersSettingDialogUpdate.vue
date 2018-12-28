<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="修改用户信息" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="100px"
        size="small"
        class="clearfix"
        ref="formUpdate"
      >
        <el-form-item prop="username" label="用户名称">
          <el-input v-model.trim="formData.username" placeholder="用户名称" />
        </el-form-item>

        <el-form-item prop="nickname" label="用户昵称" >
          <el-input v-model.trim="formData.nickname" placeholder="用户昵称" />
        </el-form-item>

        <el-form-item prop="sex" label="用户性别">
          <el-radio-group v-model="formData.sex">
            <el-radio :label="0">女</el-radio>
            <el-radio :label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="phone" label="手机号码" >
          <el-input v-model.trim="formData.phone" type="number" placeholder="手机号码" />
        </el-form-item>

        <el-form-item prop="qq" label="QQ号码">
          <el-input v-model.trim="formData.qq" placeholder="QQ号码" />
        </el-form-item>

        <el-form-item prop="wechat" label="微信号">
          <el-input v-model.trim="formData.wechat" placeholder="微信号" />
        </el-form-item>

        <el-form-item prop="email" label="电子邮箱">
          <el-input v-model.trim="formData.email" type="mail" placeholder="电子邮箱" />
        </el-form-item>

        <el-form-item prop="enabled" label="启用状态">
          <el-radio-group v-model="formData.enabled">
            <el-radio :label="false">禁用</el-radio>
            <el-radio :label="true">启用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelect from '@/components/form/FormSelect'
import FormRadio from '@/components/form/FormRadio'
import FormTimeSelect from '@/components/form/FormTimeSelect'

export default {
  name: 'UsersSettingDialogUpdate',
  components: {
    FormSelect,
    FormRadio,
    FormTimeSelect
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemUsersItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { username: '', password: '', phone: '', sex: '', enabled: '' },
      rules: {
        username: validators.validateRequired('用户名称'),
        password: validators.validateStringLength('登录密码', 6, 20),
        phone: validators.validatePhone('手机号码'),
        sex: validators.validateSelect('性别'),
        enabled: validators.validateSelect('启用状态')
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

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>
