<template>
  <ul class="control-player">
    <li class="icon player-icon">&#xe71d;</li>
    <li class="icon player-icon">&#xe78a;</li>
    <li class="icon player-icon btn-play-pause" @click="switchPause"><span v-show="player_isPause">&#xe62c;</span><span v-show="!player_isPause">&#xe61e;</span></li>
    <li class="icon player-icon">&#xe7a5;</li>
    <li class="icon player-icon">&#xe77a;</li>
  </ul>
</template>

<script>
export default {
  name: "Playback_control_player",
  props:{
    isPause:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  computed:{
    player_isPause:{
      get(){
       return this.isPause; 
      },
      set(val){
        this.$emit('pauseChange',val);        
      }
    }
  },
  methods:{
    switchPause(){
      this.player_isPause = !this.player_isPause;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/MusicPlayback/play_icon'

.control-player
  display flex
  justify-content space-between
  line-height 1.1rem
  padding 0.2rem 0.2rem

  .player-icon
    font-size 0.6rem

  .btn-play-pause
    font-size 0.8rem
</style>