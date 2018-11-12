import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import BasePagination from '@/components/base/BasePagination'

/* 面包屑导航 */
export const breadcrumbMixin = {
  components: {
    BaseBreadcrumb
  }
}

/* 页面顶部 条件筛选 */
export const searchMixin = {
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
