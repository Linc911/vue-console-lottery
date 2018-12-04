<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新菜单" width="500px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="80px"
      size="small"
      ref="formCreate"
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
        <el-input v-model.trim="formData.sort" @keyup.native.enter="submitForm('formCreate')" type="number" :min="1" :max="100" placeholder="排列顺序" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import FormValition from '@/config/form'

export default {
  name: 'MenuSettingDialogCreate',
  props: {
    menuOptions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      formData: { css: 'fa-gear', sort: 0 },
      rules: {
        parentId: FormValition.validateSelect('上级菜单'),
        name: FormValition.validateRequired('菜单名称'),
        css: FormValition.validateRequired('图标代码'),
        sort: FormValition.validateRequired('排序')
      },
      dialogVisible: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false

          this.$httpAPI.createSystemMenuItem(this.formData).then((response) => {
            this.$refs[formName].resetFields()

            this.$store.dispatch('sidebar/refreshMenu')
            this.$emit('on-created')
            this.$message.success('创建成功！')
          }).catch(() => this.$message.error('创建失败！'))
        }
      })
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
