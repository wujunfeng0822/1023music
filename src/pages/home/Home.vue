<template>
  <div>
    <div class="home">{{$store.state.count}}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions({
    add: 'change'
  })
}
</script>

<style lang="less" scoped>
  .home {
    color: red;
  }
</style>
