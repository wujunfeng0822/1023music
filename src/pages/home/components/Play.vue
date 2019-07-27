<template>
  <div class="wrapper">
    <div class="content">
      <div class="head">
        <a href="#" class="icon btn-back">&#xe60a;</a>
        <p class="song_title">深绿</p>
        <p class="song_artist">AJICO</p>
      </div>
      <div class="lyric">
        <img class="movebar" src="@/assets/Play/img/play_movebar.png" alt />
        <div class="album-border">
          <div class="album-content"></div>
        </div>
      </div>
      <div class="control">
        <ul class="control-more">
          <li class="icon more-icon">&#xe630;</li>
          <li class="icon more-icon">&#xe659;</li>
          <li class="icon more-icon">&#xe650;</li>
          <li class="icon more-icon">&#xe612;</li>
        </ul>
        <div class="control-process">
          <span class="current-time timer">00:00</span>
          <div class="process-total">
            <div class="process-current">
              <span class="dot"></span>
            </div>
          </div>
          <span class="total-time timer">00:00</span>
        </div>
        <ul class="control-player">
          <li class="icon player-icon">&#xe71d;</li>
          <li class="icon player-icon">&#xe78a;</li>
          <li class="icon player-icon btn-play-pause">&#xe62c;</li>
          <li class="icon player-icon">&#xe7a5;</li>
          <li class="icon player-icon">&#xe77a;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/play_icon'

.icon
  color white

.wrapper
  font-family $font
  background-image url('~@/assets/Play/img/play_albumImg.png')
  position absolute
  width 100%
  height 100%
  box-sizing border-box
  z-index 2
  box-shadow 0 0 1rem 2rem white inset

  &:after
    content ''
    position absolute
    width 100%
    height 100%
    filter blur(20px) contrast(50%) brightness(120%)
    z-index 3
    left 0
    top 0
    background inherit

  .content
    position relative
    z-index 999
    color white !important

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

    .lyric
      position relative
      // background-color pink
      overflow hidden
      padding-top 22.4%

      .movebar
        position absolute
        z-index 996
        top -4%
        width 35%
        left 0
        right 0
        margin 0 auto
        transform-origin 15.4% 15.4%
        transform translateX(35%) rotate(0deg)

      .album-border
        position relative
        margin 0 auto
        left 0
        right 0
        width 90%
        padding-bottom 90%
        box-sizing border-box
        border 1px solid white
        border-radius 50%
        background-image url('~@/assets/Play/img/play_albumBorder.png')
        background-size contain
        z-index 995

        .album-content
          position absolute
          left 50%
          top 50%
          margin-top -31.25%
          margin-left -31.25%
          width 62.5%
          padding-bottom 62.5%
          border-radius 50%
          overflow hidden
          background-image url('~@/assets/Play/img/play_albumImg.png')
          background-size contain
          background-color black

    .control
      position fixed
      bottom 0
      // background-color black
      width 100%

      .control-more
        display flex
        justify-content space-between
        line-height 0.8rem
        padding: .2rem 1rem
        
        .more-icon
          font-size .5rem

      .control-process
        display flex
        align-items center
        line-height 0.84rem
        // background-color purple
        .timer
          display block
          margin 0 .2rem
          font-size .24rem
        .process-total
          position relative
          flex-grow 1
          height .02rem
          background-color yellow
          .process-current
            position relative
            width 50%
            padding .02rem 0
            background-color red
            .dot
              display block
              position absolute
              top 0
              right 0
              margin-left -.125rem
              margin-top -.125rem
              width .1rem
              height .1rem
              border .075rem solid white
              border-radius 50%
              background-color red

      .control-player
        display flex
        justify-content space-between
        line-height 1.1rem
        padding .2rem .2rem
        .player-icon
          font-size .6rem
        .btn-play-pause
          font-size .8rem
</style>