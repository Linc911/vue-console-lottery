<template lang="html">
  <div class="finance-setting">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
  </div>
</template>
