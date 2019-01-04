<template>
  <section class="home-layout">
    <el-container>
      <!-- 顶部导航 -->
      <el-header>
        <transition
          mode="out-in"
          enter-active-class="animated slideInDown fast"
          leave-active-class="animated slideOutUp fast"
        >
          <TheHeader v-show="headerVisible" />
        </transition>
      </el-header>

      <el-container>
        <!-- 侧边栏导航 -->
        <el-aside width="220px">
          <transition
            mode="out-in"
            enter-active-class="animated slideInLeft fast"
            leave-active-class="animated slideOutRight fast"
          >
            <TheSidebar v-show="sidebarVisible" />
          </transition>
        </el-aside>

        <el-container>
          <!-- 内容区 -->
          <el-main>
            <!-- 浏览历史记录栈 -->
            <TapPanel />

            <!-- 面包屑导航 -->
            <BaseBreadcrumb :breadcrumb="$route.meta.breadcrumb" />

            <!-- 主要内容 -->
            <div class="content-container">
              <keep-alive>
                <transition
                  mode="out-in"
                  enter-active-class="animated fadeIn fast"
                  leave-active-class="animated fadeOut fast"
                >
                  <router-view v-if="$route.meta.keepAlive" />
                </transition>
              </keep-alive>

              <transition
                mode="out-in"
                enter-active-class="animated fadeIn fast"
                leave-active-class="animated fadeOut fast"
              >
                <router-view v-if="!$route.meta.keepAlive" />
              </transition>
            </div>
          </el-main>

          <!-- 底部栏 -->
          <el-footer height="auto">
            <transition
              mode="out-in"
              enter-active-class="animated slideInUp fast"
              leave-active-class="animated slideOutRight fast"
            >
              <TheFooter v-show="footerVisible" />
            </transition>
          </el-footer>

        </el-container>
      </el-container>
    </el-container>
  </section>
</template>

<script type="text/javascript">
import TheHeader from '@/components/global/TheHeader'
import TheSidebar from '@/components/global/TheSidebar'
import TapPanel from '@/components/global/TabPanel'
import BaseBreadcrumb from '@/components/base/BaseBreadcrumb'
import TheFooter from '@/components/global/TheFooter'

export default {
  name: 'HomeLayout',
  components: {
    TheHeader,
    TheSidebar,
    TapPanel,
    BaseBreadcrumb,
    TheFooter
  },
  data () {
    return {
      headerVisible: false,
      sidebarVisible: false,
      footerVisible: false
    }
  },
  mounted () {
    this.headerVisible = true
    this.sidebarVisible = true
    this.footerVisible = true
  },
  destroyed () {
    this.headerVisible = false
    this.sidebarVisible = false
    this.footerVisible = false
  }
}
</script>

<style lang="scss" scoped>
.home-layout {
  min-width: 1190px;
  margin: 0 auto;
}
.el-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #324057;
  background-color: #fff;
}
.el-aside {
  position: fixed;
  z-index: 10;
  height: 100%;
  padding-bottom: 60px;
  margin-top: 60px;
  background-color: #324057;
}
.el-main {
  padding: 0;
  margin: 60px 0 30px 220px;
  background-color: #f8f8f8;
}
.content-container {
  padding: 15px;
}
.el-footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: calc(100% - 220px);
  padding: 0;
  margin-left: 220px;
}
</style>
