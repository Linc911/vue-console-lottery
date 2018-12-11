import BasePagination from '@/components/base/BasePagination'

import BaseSwitch from '@/components/base/BaseSwitch'
import BaseTimePicker from '@/components/base/BaseTimePicker'

import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

/* ========================================== BaseSwitch组件 ========================================== */
export const statusSwitchMixin = {
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
          this.$emit('on-status-changed', payload.id)
          this.$message.success('修改状态成功！')
        } else {
          this.$emit('on-status-failed', payload.id)
          this.$message.error('修改状态失败！')
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
// 顶部筛选 - 搜索组件父级调用
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
    search () {
      this.$emit('on-search', this.formData)
    },
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
      activeItem: { name: '' }
    }
  },
  methods: {
    showDialog (item, ref) {
      this.activeItem = item
      this.$refs[ref].toggleDialogVisible(true)
    },
    handleDeleteConfirm () {
      this.$refs.dialogDelete.toggleDialogVisible(false)

      this.$httpAPI[this.deleteHttpAPI]({
        params: { [this.deleteAttrName]: this.deleteId ? this.activeItem[this.deleteId] : this.activeItem.id }
      }).then(response => {
        /* 接口没有统一，待接口文档统一后再对相应的返回码做处理 */
        // if (response.data.status === 200) {
        //   this.$emit('on-deleted')
        //   this.$message.success('删除成功！')
        // } else {
        //   this.$message.error('删除失败！')
        // }

        this.$emit('on-deleted')
        this.$message.success('删除成功！')
      }).catch(error => console.log(error))
    }
  }
}

/* ========================================== DialogCreate 组件 ========================================== */
export const dialogCreateMixin = {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false

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

            this.$emit('on-created', this.formData)
            this.$message.success('创建成功！')
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请按提示填写！')
        }
      })
    },
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
    data () {
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
              this.$message.success('修改成功！')
            }).catch(error => console.log(error))
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

/* ========================================== DialogDetail 组件 ========================================== */
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
