<template lang="html">
  <!-- 分页 -->
  <el-pagination
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    :current-page="page.current"
    :page-size="page.size"
    :total="page.total"
    :page-sizes="[10, 20, 40, 100]"
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>

<script type="text/javascript">
export default {
  name: 'BasePagination',
  props: {
    httpURL: {
      type: String,
      required: true
    },
    requestParams: {
      type: Object,
      default () {
        return {}
      }
    },
    pageTotal: {
      type: Number,
      default: 10
    },
    page: {
      type: Object,
      default () {
        return {
          current: 1,
          size: 10,
          total: 10
        }
      }
    }
  },
  methods: {
    // 分页跳转时
    handleCurrentChange (currentPage) {
      this.getData({ current: this.page.current = currentPage, size: this.page.size })
    },
    // 分页调整每页显示条数时
    handleSizeChange (pageSize) {
      this.getData({ current: this.page.current = 1, size: this.page.size = pageSize })
    },
    getData (page) {
      this.$httpAPI[this.httpURL]({
        params: Object.assign(this.requestParams, { pageNo: page.current, pageSize: page.size })
      }).then(response => {
        this.$emit('on-change', response.data.data)
      }).catch(error => console.log(error))
    }
  }
}
</script>
