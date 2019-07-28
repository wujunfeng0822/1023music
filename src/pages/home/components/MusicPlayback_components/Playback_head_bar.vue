<template>
  <div class="head">
    <a href="#" class="icon btn-back" @click="goBack" v-if="canBack">&#xe60a;</a>
    <p class="song_title" v-text="songName"></p>
    <p class="song_artist" v-text="artist"></p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    canBack: {
      type: Boolean,
      default: true
    },
    songName: {
      type: String,
      default: '不详'
    },
    artist: {
      type: String,
      default: '群星'
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/MusicPlayback/play_icon'

.head
  line-height 0.84rem
  color white
  padding 0.1rem 0 0.05rem 0

  .btn-back
    font-size 0.32rem
    display inline-block
    padding-left 0.2rem
    position absolute

  p
    text-align center

  .song_title
    font-size 0.32rem
    line-height 0.52rem

  .song_artist
    font-size 0.24rem
    line-height 0.32rem
</style>