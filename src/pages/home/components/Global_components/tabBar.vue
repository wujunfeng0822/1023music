<template>
  <div class="tabBar">
    <a
      class="item"
      v-for="(item,index) in list"
      :key="index"
      :class="{active:item.active}"
      @click="beActive(index,item)"
    >
      <span class="icon">{{item.icon}}</span>
      <div>{{item.text}}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    currentPageID: {
      type: Number,
      default: 0
    }
  },
  name: "tabBar",
  data() {
    return {
      list: [
        {
          id: 0,
          icon: "\ue63b",
          text: "发现音乐",
          active: false,
          routePath: "/found-music",
          routeName: "FoundMusic"
        },
        {
          id: 1,
          icon: "\ue680",
          text: "我的音乐",
          active: false,
          routePath: "/my-music",
          routeName: "MyMusic"
        },
        {
          id: 2,
          icon: "\ue61a",
          text: "朋友",
          active: false,
          routePath: "/music-share",
          routeName: "MusicShare"
        },
        {
          id: 3,
          icon: "\ue618",
          text: "账号",
          active: false,
          routePath: "/my-account",
          routeName: "MyAccount"
        }
      ]
    };
  },
  created() {
    // console.log(this.currentPageID);
    // for (let item of this.list) {
    //   item.active = item.id === this.currentPageID;
    // }
  },
  methods: {
    beActive(index,item) {
      for (let item of this.list) {
        item.active = false;
      }
      this.list[index].active = true;
      this.$router.push({
        path:item.routePath,
        name:item.routeName
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/MusicPlayback/play_icon'

.icon
  font-size .5rem

.tabBar
  position fixed
  bottom 0
  left 0
  width 100%
  height 1.2rem
  padding-top .2rem
  padding-bottom .1rem
  box-sizing border-box
  display flex
  background-color #f2f2f2
  z-index 999

.item
  font-size .28rem
  color black
  width 25%
  height 100%
  display flex
  flex-direction column
  justify-content space-between
  align-items center

.active
  color red
</style>
