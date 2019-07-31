<template>
  <div class="home">
    <!-- <div>导航</div> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "home page"
    };
  }
};
</script>

<style lang="stylus" scoped>
.home
  color pink
</style>
