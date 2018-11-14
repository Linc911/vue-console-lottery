import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'

import BasePagination from '@/components/base/BasePagination'

import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

/* 面包屑导航 */
export const breadcrumbMixin = {
  components: {
    BaseBreadcrumb
  }
}

/* 条件筛选 */
// 顶部筛选 - 搜索组件父级调用
export const searchOuterMixin = {
  methods: {
    handleSearch (params) {
      // 删除为空字符串的属性
      for (let key in params) {
        if (params[key] === '') {
          delete params[key]
        }
      }

      this.requestParams = Object.assign(params, { pageNo: 1 })
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

      this.formData = {}
    }
  }
}

// 分页
export const paginationMixin = {
  components: {
    BasePagination
  },
  data () {
    return {
      listData: [],
      pageTotal: 0,
      requestParams: {}
    }
  },
  methods: {
    handlePaginationChange (data) {
      this.listData = data
    }
  }
}

/* 列表请求几种模式 */
// 列表数据请求
export const mainDataMixin = {
  created () {
    this.fetchMainData()
  },
  methods: {
    // 触发检索
    handleSearch (params) {
      this.requestParams = Object.assign(this.requestParams, params, { pageNo: 1, pageSize: 10 })
      this.fetchMainData(this.requestParams)
    },
    fetchMainData () {
      this.$httpAPI[this.mainDataAPI]({
        params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams)
      }).then(response => {
        if (response.data.data) {
          this.listData = response.data.data
        } else {
          this.listData = []
        }

        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}

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

// 列表数据请求
export const listMixin = {
  created () {
    this.fetchListData()
  },
  data () {
    return {
      listData: []
    }
  },
  methods: {
    fetchListData () {
      this.$httpAPI[this.listHttpAPI]({ params: this.requestParams }).then(response => {
        if (response.data.data) {
          this.listData = response.data.data
        } else {
          this.listData = []
        }
      }).catch(error => console.log(error))
    }
  }
}

/* 表单提交 */
// 创建新数据
export const createMixin = {
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
            if (response.data.status === 200) {
              this.$utils.invokeRefResetMothod(this.$refs)
              this.$refs[formName].resetFields()

              this.$emit('on-created')
              this.$message.success('创建成功！')
            } else {
              this.$message.error('创建失败！')
            }
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

// 更新数据
export const updateMixin = {
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

          // 判断两个对象是否相等（自有属性和属性值一一对应）
          const same = this.$utils.isEquivalentObjects(this.data, this.formData)
          if (!same) {
            // 生成需要修改属性组成的对象，仅包含变动的属性（两个参数位置要按顺序）
            const postData = this.$utils.generateObjectWithChangedProperties(this.data, this.formData)
            console.log(this.idObject)
            this.$httpAPI[this.updateHttpAPI](Object.assign(this.idObject, postData)).then(response => {
              if (response.data.status === 200) {
                this.$emit('on-updated')
                this.$message.success('修改成功！')
              } else {
                this.$message.error('修改失败！')
              }
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
