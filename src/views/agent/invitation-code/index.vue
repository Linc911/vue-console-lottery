<template lang="html">
  <div>
    <!-- 条件筛选 -->
    <SearchLayout>
      <div slot="left">
        <InvitationCodeSearch @on-search="handleSearch" />
      </div>
    </SearchLayout>

    <!-- 主要内容 -->
    <div>
      <!-- 表格 -->
      <InvitationCodeTable
        @on-deleted="fetchTableData()"
        :data="tableData"
      />

      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :page="page"
        :requestParams="requestParams"
        :httpURL="tableHttpAPI"
      />
    </div>
  </div>
</template>

<script>
import { searchOuterMixin, tableWithPaginationMixin } from '@/mixins'

import SearchLayout from '@/components/layout/SearchLayout'
import InvitationCodeSearch from './components/InvitationCodeSearch'
import InvitationCodeTable from './components/InvitationCodeTable'

export default {
  name: 'AgentInvitationCode',
  components: {
    SearchLayout,
    InvitationCodeSearch,
    InvitationCodeTable
  },
  mixins: [ searchOuterMixin, tableWithPaginationMixin ],
  data () {
    return {
      tableData: [],
      tableHttpAPI: 'fetchAgentInvitationCode',
      requestParams: { pageNo: 1, pageSize: 10 },
      page: { current: 1, size: 10, total: 10 }
    }
  }
}
</script>
