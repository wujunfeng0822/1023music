<template>
  <div id="app">
    <transition name="page" enter-active-class="animated zoomInUp" leave-active-class>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getSessionStorage() {
      this.$store.dispatch("getSessionStorage");
    }
  },
  created() {
    this.getSessionStorage();
  }
};
</script>
