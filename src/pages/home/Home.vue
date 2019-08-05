<template>
  <div class="home">
    <!-- <div>导航</div> -->
    <transition
      name="page"
      enter-active-class="animated zoomInUp"
      leave-active-class=""
    >
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" @showTabBar="handleShowTabBar"></router-view>
      </keep-alive>
    </transition>
    
    <transition
      name="page"
      enter-active-class="animated zoomInUp"
      leave-active-class=""
    >
      <router-view v-if="!$route.meta.keepAlive" @showTabBar="handleShowTabBar"></router-view>
    </transition>

    <tabBar v-show="tabBarIsShow"></tabBar>
  </div>
</template>

<script>
import tabBar from "./components/Global_components/tabBar";
export default {
  components: {
    tabBar
  },
  data() {
    return {
      tabBarIsShow: true
    };
  },
  methods: {
    handleShowTabBar(bool) {
      this.tabBarIsShow = bool;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
