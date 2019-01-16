<template>
  <div>
    <el-table :data="data" size="small" max-height="650" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="ball" label="球号">
        <template slot-scope="scope">
          <BaseBall
            :number="scope.row.ball"
            :bgcolor="scope.row.colourType | markSixRGB"
            style="margin-left: 6px"
          />
        </template>
      </el-table-column>

      <el-table-column prop="tail" label="尾数" sortable />

      <el-table-column prop="colourType" label="波色" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.colourType | markSixColor }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="chineseZodiac" label="生肖" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.chineseZodiac | zodiac }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="poultry" label="家禽/野兽" :width="100" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.poultry | markSixBeast }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="updateTime" label="更新时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" :min-width="140" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'dialogUpdate')"
            type="primary"
            icon="el-icon-edit"
            size="mini"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <SixSettingDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseBall from '@/components/base/BaseBall'
import SixSettingDialogUpdate from './SixSettingDialogUpdate'

export default {
  name: 'SixSettingTable',
  components: {
    BaseBall,
    SixSettingDialogUpdate
  },
  data () {
    return {
      activeItem: {}
    }
  },
  mixins: [ tableComponentMixin ]
}
</script>
