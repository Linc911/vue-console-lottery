import config from '@/config/data'

import BasePagination from '@/components/base/BasePagination'
import BaseSwitch from '@/components/base/BaseSwitch'
import BaseTimePicker from '@/components/base/BaseTimePicker'
import SearchLayout from '@/components/layout/SearchLayout'
import BaseAdd from '@/components/base/BaseAdd'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

/* ========================================== BaseSwitch组件 ========================================== */
export const statusSwitchMixin = { // Deprecated
  components: {
    BaseSwitch
  },
  methods: {
    handleSwitchChange (payload) {
      this.$httpAPI[this.statusSwitchAPI](
        { id: payload.id, status: Number(!payload.value) }
      ).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-status-change')
          this.$message.success('修改状态成功！')
        } else {
          this.$message.error('修改状态失败！')
        }
      }).catch(error => console.log(error))
    }
  }
}

export const switchMixin = {
  components: {
    BaseSwitch
  },
  methods: {
    handleSwitchChange (payload) {
      this.$httpAPI[this.switchObj.API](
        { [this.switchObj.attrId]: payload.id, [this.switchObj.attrValue]: Number(payload.value) }
      ).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-changed', payload.id)
          this.$message.success(config.UPDATE_SUCCEEDED)
        } else {
          this.$message.error(config.UPDATE_FAILED)
        }
      }).catch(error => console.log(error))
    }
  }
}

/* ========================================== BaseTimePicker组件 ========================================== */
export const timePickerMixin = {
  components: {
    BaseTimePicker
  },
  methods: {
    handleTimePickerChange (payload) {
      console.log(payload)
    }
  }
}

/* ========================================== 动态菜单 Tab组件 ========================================== */
export const menuMixin = {
  created () {
    this.fetchMenuData()
  },
  methods: {
    handleTabClick (tab) {
      this.$emit('on-change', { id: tab.name, name: tab.label })
    },
    fetchMenuData () {
      this.$httpAPI[this.menuHttpAPI]({ params: this.requestParams }).then(response => {
        if (response.data.data) {
          this.menu = response.data.data
        } else {
          this.menu = []
        }
      }).catch(error => console.log(error))
    }
  }
}

/* ========================================== 条件筛选 ========================================== */
// 顶部筛选 - 搜索组件父级调用(没有搜索区域)
export const searchLayoutWithoutSearchMixin = {
  components: {
    SearchLayout,
    BaseAdd
  }
}

// 顶部筛选 - 搜索组件父级调用
export const searchLayoutWithoutAddMixin = {
  methods: {
    // 处理触发搜索事件
    handleSearch (params) {
      // 请求参数改变（携带搜索条件参数、重置到首页）
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.page.current = 1

      // 重新获取数据
      this.fetchTableData()
    }
  }
}

// 顶部筛选 - 搜索组件父级调用
export const searchLayoutMixin = {
  components: {
    SearchLayout,
    BaseAdd
  },
  methods: {
    // 处理触发搜索事件
    handleSearch (params) {
      // 请求参数改变（携带搜索条件参数、重置到首页）
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.page.current = 1

      // 重新获取数据
      this.fetchTableData()
    }
  }
}

// 顶部筛选 - 搜索组件父级调用 (deprecated 待删除)
export const searchOuterMixin = {
  methods: {
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1 })
      this.fetchTableData()
    }
  }
}

// 顶部筛选 - 搜索组件调用
export const searchInnerMixin = {
  components: {
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    // 通知父组件触发搜索事件；将请求参数传给父组件
    search () {
      this.$emit('on-search', this.formData)
    },
    // 将全部的 form 组件重置为初始值；初始化组件内容的数据
    reset () {
      for (let key in this.$refs) {
        this.$refs[key].reset()
      }

      this.$utils.initializeObjectProperties(this.formData)
    }
  }
}

/* ========================================== 列表请求几种模式 ========================================== */
// 表格数据（带分页）
export const tableWithPaginationMixin = {
  components: {
    BasePagination
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    // 分页变化时，请求新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI]({ params: this.requestParams }).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }

        this.page.total = response.data.amount

        if (Object.prototype.toString.call(this.statistics) === '[object Object]') {
          this.statistics = response.data
        }
      }).catch(error => console.log(error))
    }
  }
}

// 表格数据（带分页 Post请求）
export const tableWithPaginationPostMixin = {
  components: {
    BasePagination
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    // 分页变化时，请求新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI](this.requestParams).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }

        this.page.total = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}

// 表格数据（不带分页）
export const tableWithoutPaginationMixin = {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI]({ params: this.requestParams }).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }
      }).catch(error => console.log(error))
    }
  }
}
// 表格数据（带分页）
export const tableWithoutPaginationPostMixin = {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.fetchTableData()
  },
  methods: {
    fetchTableData () {
      this.$httpAPI[this.tableHttpAPI](this.requestParams).then(response => {
        if (response.data.data) {
          this.tableData = response.data.data
        } else {
          this.tableData = []
        }
      }).catch(error => console.log(error))
    }
  }
}

/* ========================================== Table 组件 ========================================== */
export const tableComponentMixin = {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeItem: {} // deprecated
    }
  },
  methods: {
    // 显示弹框；将当前点击的数据记录下来
    showDialog (item, ref) {
      this.activeItem = item

      this.$refs[ref].toggleDialogVisible(true)
    },
    // 响应删除操作
    handleDeleteConfirm () {
      this.$refs.dialogDelete.toggleDialogVisible(false) // 隐藏弹框

      // 发送请求；根据是否有 this.deleteId 赋值，来决定用什么对象属性
      this.$httpAPI[this.deleteHttpAPI]({
        params: { [this.deleteAttrName]: this.deleteId ? this.activeItem[this.deleteId] : this.activeItem['id'] }
      }).then(response => {
        if (response.data.status === 200) {
          this.$emit('on-changed')
          this.$message.success(config.DELETE_SUCCEEDED)
        } else {
          this.$message.error(config.DELETE_FAILED)
        }
      }).catch((error) => {
        console.log(error)
        this.$message.warning(config.DELETE_FAILED)
      })
    }
  }
}

/* ================================== form 组件 ==================================== */
export const formComponentMixin = {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    // 变化时，更新数据
    data () {
      this.formData = Object.assign(this.formData, this.data)
    }
  },
  mounted () {
    // 创建时，传入数据
    this.formData = Object.assign(this.formData, this.data)
  },
  methods: {
    // 表单验证：通过验证，通知父组件submit Form，否则提示验证失败
    validateForm () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('on-validated', this.formData)
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    },
    // 初始化表单
    resetFields () {
      this.$refs.form.resetFields()
    }
  }
}

/* ========================================== DialogCreate 组件 ========================================== */
export const dialogCreateMixin = {
  data () {
    return {
      saveString: config.COMPONENT_CREATION_RECORD,
      dialogVisible: false,
      checked: true
    }
  },
  methods: {
    // 检验表单验证是否通过，发送修改请求
    submitForm (formName) { // DEPRECATED
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false // 表单验证通过才隐藏弹框

          this.$httpAPI[this.createHttpAPI](this.formData).then(response => {
            /* 接口没有统一，待接口文档统一后再对相应的返回码做处理 */
            // if (response.data.status === 200) {
            //   // 清除表单填写记录
            //   this.$utils.invokeRefResetMothod(this.$refs)
            //   this.$refs[formName].resetFields()
            //
            //   this.$emit('on-created', this.formData)
            //   this.$message.success('创建成功！')
            // } else {
            //   this.$message.error('创建失败！')
            // }

            // 清除表单填写记录
            if (!this.checked) {
              this.$utils.invokeRefResetMothod(this.$refs)
              this.$refs[formName].resetFields()
            }

            this.$emit('on-created', this.formData)

            this.$message.success(config.CREATE_SUCCEEDED)
          }).catch(error => console.log(error))
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    },
    // 当子组件通知验证通过时，发送请求
    handleValidationSuccess (data) {
      this.dialogVisible = false // 隐藏弹框

      this.$httpAPI[this.createHttpAPI](data).then((response) => {
        !this.checked && this.$refs.form.resetFields() // 根据用户选择，是否重置所有的表单输入

        this.$emit('on-created')

        this.$message.success(config.CREATE_SUCCEEDED)
      }).catch((error) => {
        console.dir(error)
        this.$message.error(config.CREATE_FAILED)
      })
    },
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}

/* ========================================== DialogUpdate 组件 ========================================== */
export const dialogUpdateMixin = {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  watch: {
    // 将数据赋值给新的对象（子组件不能更新父组件的属性）
    // data () {
    //   this.formData = Object.assign(this.formData, this.data)
    // }
  },
  methods: {
    // 检验表单验证是否通过，发送修改请求
    submitForm (formName) { // DEPRECATED
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false // 表单验证通过才隐藏弹框

          // 判断是否对表单数据进行修改: 没修改 => 提示数据没变化，不发送请求； 进行修改 => 发送修改请求
          const same = this.$utils.isEquivalentObjects(this.data, this.formData)
          if (!same) {
            // 生成需要修改属性组成的对象，仅包含变动的属性（两个参数位置必须按要求顺序传入）
            const postData = this.$utils.generateObjectWithChangedProperties(this.data, this.formData)

            // 判断接口是否是传支持多个修改： 是 => 生产数组，否 => 生产对象
            let finalPostData = null
            if (this.idParams.multiple) {
              finalPostData = [ Object.assign(this.idParams, postData) ]
            } else {
              finalPostData = Object.assign(this.idParams, postData)
            }

            this.$httpAPI[this.updateHttpAPI](finalPostData).then(response => {
              /* 接口没有统一，待接口文档统一后再对相应的返回码做处理 */
              // if (response.data.status === 200) {
              //   this.$emit('on-updated')
              //   this.$message.success('修改成功！')
              // } else {
              //   this.$message.error('修改失败！')
              // }

              this.$emit('on-updated')

              this.$message.success(config.UPDATE_SUCCEEDED)
            }).catch((error) => {
              console.log(error)
              this.$message.error(config.UPDATE_FAILED)
            })
          } else {
            this.$message.info(config.VALIDATION_UNCHANTED)
          }
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    },
    // 当子组件通知验证通过时，发送请求
    handleValidationSuccess (data) {
      this.dialogVisible = false // 隐藏弹框

      this.$httpAPI[this.updateHttpAPI](data).then((response) => {
        this.$emit('on-updated')

        this.$message.success(config.UPDATE_SUCCEEDED)
      }).catch((error) => {
        console.dir(error)
        this.$message.error(config.UPDATE_FAILED)
      })
    },
    // 显示与隐藏弹框（父组件调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}

/* ================================== DialogDetail 组件 ==================================== */
export const dialogDetailMixin = {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formData: {},
      dialogVisible: false
    }
  },
  watch: {
    data () {
      this.formData = this.data
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
