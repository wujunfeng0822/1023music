<template>
  <div>
  <div>导航</div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'home page'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    color pink
</style>
