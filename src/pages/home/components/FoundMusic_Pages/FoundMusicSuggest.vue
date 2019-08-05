<template>
  <div class="page">
    <banner :bannerList="bannerList" class="banner"></banner>
    <div class="list-board">
      <p class="board-title">
        个性推荐
        <span class="icon">&#xe612;</span>
      </p>
      <div class="board-content">
        <ul class="board-list">
          <li class="board-item" v-for="(item, index) in personalizedList" :key="index" @click="toMusicList(item.id)">
            <div class="item-img-container">
              <span class="listener-count">
                <span class="icon">&#xe60f;</span>
                <span class="num">{{item.playCount}}</span>
              </span>
              <img v-lazy="item.picUrl" alt />
            </div>
            <p class="item-title" v-text="item.name"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "../Global_components/banner";
export default {
  name: "FoundMusicSuggest",
  components: {
    banner
  },
  data() {
    return {
      bannerList: [],
      personalizedList: []
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
    getBannerList() {
      this.$axios.get("api/banner?type=2").then(
        res => {
          if (res.data.code === 200) {
            this.bannerList = res.data.banners;
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    getPersonalizedList() {
      this.$axios.get("api//personalized").then(
        res => {
          if (res.data.code === 200) {
            this.personalizedList = res.data.result;
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    toMusicList(id) {
      this.$router.push({
        path: "/music-list",
        name: "MusicList",
        query: {
          id: id
        }
      });
    }
  },

  mounted() {
    this.getBannerList();
    this.getPersonalizedList();
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/MusicPlayback/play_icon'

.banner
  margin-bottom 0.2rem

.page
  padding-bottom 2rem

  .list-board
    .board-title
      font-size 0.32rem
      font-weight bold
      line-height 0.6rem
      padding-left 0.2rem

    .board-content
      .board-list
        display flex
        flex-wrap wrap
        justify-content flex-start

        .board-item
          margin-bottom 0.2rem
          width 32%
          margin 0 0.66%

          .item-img-container
            position relative
            width 100%
            padding-bottom 100%

            .listener-count
              position absolute
              right 0
              top 0
              font-size 0.24rem
              line-height 0.3rem
              padding-top 0.05rem
              padding-right 0.05rem
              color white
              z-index 2

            img
              position absolute
              width 100%

          .item-title
            margin-top 5%
            border-top-color yellow
            font-size 0.24rem
            width 100%
            line-height 0.3rem
            $double-line-overflow()
</style>