<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改菜单配置" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item label="上级菜单" prop="parentId">
        <el-select v-model="formData.parentId" placeholder="选择上级菜单" class="custom-block">
          <el-option key="root" label="root" :value="0"/>
          <template v-for="item in menuOptions">
            <el-option v-if="!item.parentId" :key="item.name" :label="item.name" :value="item.id" />
          </template>
        </el-select>
      </el-form-item>

      <el-form-item label="菜单名称" prop="name">
        <el-input v-model.trim="formData.name" placeholder="系统设置" />
      </el-form-item>

      <el-form-item label="路由地址" prop="url">
        <el-input v-model.trim="formData.url" placeholder="/system/menu" />
      </el-form-item>

      <el-form-item label="图标代码" prop="css">
        <el-input v-model.trim="formData.css" placeholder="fa-gear" style="width: 75%;" />
        <span class="pull-right">图标示例：<i class="fa" :class="formData.css"></i></span>
      </el-form-item>

      <el-form-item label="排列顺序" prop="sort">
        <el-input v-model.trim="formData.sort" @keyup.native.enter="submitForm('itemCreateForm')" type="number" :min="1" :max="100" placeholder="排列顺序" />
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

export default {
  name: 'MenuSettingDialogUpdate',
  props: {
    data: {
      type: Object,
      required: true
    },
    menuOptions: {
      type: Array,
      required: true
    }
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemMenuItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { parentId: '', name: '', css: '', sort: '' },
      rules: {
        parentId: FormValition.validateSelect('上级菜单'),
        name: FormValition.validateRequired('菜单名称'),
        css: FormValition.validateRequired('图标代码'),
        sort: FormValition.validateRequired('排序')
      },
      dialogVisible: false
    }
  },
  watch: {
    data () {
      this.idParams = { id: this.data.id }
      this.formData = Object.assign(this.formData, this.data)
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false

          // 判断是否对表单数据进行修改: 没修改 => 提示数据没变化，不发送请求； 进行修改 => 发送修改请求
          const same = this.$utils.isEquivalentObjects(this.data, this.formData)
          if (!same) {
            // 生成需要修改属性组成的对象，仅包含变动的属性（两个参数位置必须按要求顺序传入）
            const postData = this.$utils.generateObjectWithChangedProperties(this.data, this.formData)

            this.$httpAPI[this.updateHttpAPI](Object.assign(this.idParams, postData)).then(() => {
              this.$store.dispatch('sidebar/refreshMenu')

              this.$emit('on-updated')
              this.$message.success('修改成功！')
            }).catch(() => this.$message.error('修改失败！'))
          } else {
            this.$message.info('检测数据没有变化，不发送修改请求。')
          }
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
