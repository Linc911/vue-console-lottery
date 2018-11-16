<template>
  <el-dialog title="每注详情" :visible.sync="dialogVisible" width="400px">
    <span>
      {{bets.betType | betType}}<a v-if="bets.bettings">-{{bets.bettings[0].childType | childType}}</a><br>

      <!--主盘势-->
      <div v-if="bets.betType===1">
        <div v-for="(m) in bets.totalSum" v-if="bets.totalSum.length!==0">
          总和{{m.childType | childType}} @<a class="main_color">{{m.rate}}</a>
        </div>
        <div v-for="(m) in bets.firstBall" v-if="bets.firstBall.length!==0">
          第一球{{m.childType | childType}} @<a class="main_color">{{m.rate}}</a>
        </div>
        <div v-for="(m) in bets.secondBall" v-if="bets.secondBall.length!==0">
          第二球{{m.childType | childType}} @<a class="main_color">{{m.rate}}</a>
        </div>
        <div v-for="(m) in bets.thirdBall" v-if="bets.thirdBall.length!==0">
          第三球{{m.childType | childType}} @<a class="main_color">{{m.rate}}</a>
        </div>
        <div v-for="(m) in bets.fourthBall" v-if="bets.fourthBall.length!==0">
          第四球{{m.childType | childType}} @<a class="main_color">{{m.rate}}</a>
        </div>
        <div v-for="(m) in bets.fifthBall" v-if="bets.fifthBall.length!==0">
          第五球{{m.childType | childType}} @<a class="main_color">{{m.rate}}</a>
        </div>
      </div>
      <!--单码-->

      <div v-if="bets.betType===2">
          <div v-for="(m) in bets.firstBall" v-if="bets.firstBall.length!==0">
            第一球{{m.ballNums[0]}} @<a class="main_color">{{m.rate}}</a>
          </div>
        <div v-for="(m) in bets.secondBall" v-if="bets.secondBall.length!==0">
            第二球{{m.ballNums[0]}} @<a class="main_color">{{m.rate}}</a>
          </div>
        <div v-for="(m) in bets.thirdBall" v-if="bets.thirdBall.length!==0">
            第三球{{m.ballNums[0]}} @<a class="main_color">{{m.rate}}</a>
          </div>
        <div v-for="(m) in bets.fourthBall" v-if="bets.fourthBall.length!==0">
            第四球{{m.ballNums[0]}} @<a class="main_color">{{m.rate}}</a>
          </div>
        <div v-for="(m) in bets.fifthBall" v-if="bets.fifthBall.length!==0">
            第五球{{m.ballNums[0]}} @<a class="main_color">{{m.rate}}</a>
          </div>
      </div>

      <!--组合-->
      <div v-for="(em) in bets.bettings" v-if="bets.betType===5 || bets.betType===4 || bets.betType===3">
        {{em.childType | childType}}{{em.ballNums}} @<a class="main_color">{{em.rate}}</a>
      </div>
    </span>
  </el-dialog>
</template>

<script>
import BaseBall from '@/components/base/BaseBall'

export default {
  name: 'BetsDetail',
  components: [
    BaseBall
  ],
  filters: {
    betType (value) {
      return value === 1 ? '主盘势'
        : value === 2 ? '单码'
          : value === 3 ? '选号-任选'
            : value === 4 ? '选号-组选' : '选号-直选'
    },
    bettingsLength (value) {
      if (Object.prototype.toString.call(value) === '[object Array]') {
        return value.length === 2 ? '前二' : '前三'
      }
    },
    childType (value) {
      let valArr = ['大', '小', '单', '双', '尾大', '尾小', '龙', '虎', '一中一', '二中二', '三中三',
        '四中四', '五中五', '六中五', '七中五', '八中五', '前二', '前三', '大', '小', '单', '双']
      for (let i = 0; i < valArr.length; i++) {
        if (value === i + 1) {
          return valArr[i]
        }
      }
    }
  },
  props: {
    bets: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>
