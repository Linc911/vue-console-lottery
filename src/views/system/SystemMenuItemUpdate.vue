<template lang="html">
  <section class="menu-item-update">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="120px"
      ref="itemUpdateForm"
    >
      <el-form-item label="上级菜单" prop="parentId">
        <el-select v-model="formData.parentId" placeholder="选择上级菜单" style="width: 100%;">
          <el-option key="root" label="root" :value="0"/>
          <template v-for="item in selectOptions">
            <el-option v-if="!item.parentId" :key="item.name" :label="item.name" :value="item.id" />
          </template>
        </el-select>
      </el-form-item>

      <el-form-item label="菜单名称" prop="name">
        <el-input v-model="formData.name" placeholder="名称" />
      </el-form-item>

      <el-form-item label="路由地址" prop="url">
        <el-input v-model="formData.url" placeholder="路由地址" />
      </el-form-item>

      <el-form-item label="图标代码" prop="css">
        <el-input v-model="formData.css" placeholder="FontAwesome图标" style="width: 85%;" />
        <span class="pull-right">图标示例：<i class="fa" :class="formData.css"></i></span>
      </el-form-item>

      <el-form-item label="排列顺序" prop="sort">
        <el-input
          @keyup.native.enter="submitForm('itemUpdateForm')"
          v-model="formData.sort"
          type="number"
          :min="1"
          :max="100"
          placeholder="排列顺序"
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('itemUpdateForm')" type="primary">修改</el-button>
        <el-button @click="$router.push('/system/menu')" type="info">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'menuItemUpdate',
  data () {
    return {
      selectOptions: [],
      formData: {
        parentId: 0,
        name: '',
        url: '',
        css: '',
        sort: 1
      },
      rules: {
        parentId: [ { required: true, message: '必须选择一个上级菜单' } ],
        name: [
          { required: true, message: '菜单名称不能为空' },
          { max: 20, message: '菜单名称长度不能超过20个字符' }
        ],
        // url: { required: true, message: '路由地址不能为空' },
        css: { required: true, message: '图标代码不能为空' },
        sort: { required: true, message: '排列顺序不能为空' }
      }
    }
  },
  created () {
    this.fetchMenuList()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.put('/api-b/menus', this.formData).then(() => {
            this.$message.success('修改菜单信息成功！')
            this.$router.push('/system/menu')
          }).catch(error => console.log(error))
        }
      })
    },
    // 获取全部菜单
    fetchMenuList () {
      this.$axios.get('/api-b/menus/all').then(response => {
        const { id, parentId, name, url, css, sort } = this.$_.find(response.data, { id: Number(this.$route.params.id) })

        this.selectOptions = response.data // 赋值给选择框，先渲染出选择框内容
        Object.assign(this.formData, { id, parentId, name, url, css, sort }) // 赋值给表单对象，用于提交数据
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 20px;
}
.search-left {
  float: left;
}
.search-right {
  float: right;
  text-align: right;
}
</style>
