<template>
  <div class="wrapper">
    <div class="content">
      <button @click="initAndPlay">init</button>
      <button @click="pauseMusic">pause</button>
      <button @click="playMusic">play</button>
      <button @click="setTime">setTime 10</button>
      <button @click="getDur">getDur</button>
      <button @click="getBuf">getBuf</button>
      <button @click="check">check</button>
      <!-- 顶部 -->
      <head_bar :songName="'深绿'" :artist="'AJICO'"></head_bar>
      <!-- 留声机，用isPause控制 -->
      <lyric_bg :isPause="isPause"></lyric_bg>
      <!-- 控制台，fiexed -->
      <control>
        <!-- 未实现 -->
        <template #control_more>
          <control_more></control_more>
        </template>
        <!-- 进度条 -->
        <template #control_process>
          <control_process
            :duration="audioDuration"
            :bufferedTime="bufferedTime"
            :currentTime="audioCurrentTime"
            @currentTimeChange="handleCurrentTimeChange"
          ></control_process>
        </template>
        <!-- 播放器 -->
        <template #control_player>
          <control_player :isPause="isPause" @pauseChange="handlePauseChange"></control_player>
        </template>
      </control>
    </div>
  </div>
</template>

<script>
import head_bar from "./MusicPlayback_components/Playback_head_bar";
import lyric_bg from "./MusicPlayback_components/Playback_lyric_bg";
import control from "./MusicPlayback_components/Playback_control";
import control_more from "./MusicPlayback_components/Playback_control_more";
import control_process from "./MusicPlayback_components/Playback_control_process";
import control_player from "./MusicPlayback_components/Playback_control_player";

export default {
  name: "MusicPlayback",
  components: {
    head_bar,
    lyric_bg,
    control,
    control_more,
    control_process,
    control_player
  },
  data() {
    return {
      currentAudio: null,
      audioCurrentTime: 0,
      bufferedTime: 0,
      audioDuration: 0,
      isEnd: false,
      isPause: false,
      ischeck:false
    };
  },
  methods: {
    initAndPlay() {
      // <初始化Audio对象，并自动播放>
      this.currentAudio = new Audio();
      this.currentAudio.src =
        "http://m10.music.126.net/20190729002534/625c7c2bcf3adf8a5338d047e304f4e4/ymusic/0a53/1b3f/69d2/54f6071555f341c012afcee79aa04800.mp3";
      this.currentAudio.play();
      this.isPause = false;
      this.currentAudio.volume = 1;

      // 刷新歌曲缓存时间长度
      this.currentAudio.addEventListener("progress", () => {
        const timeRange = this.currentAudio.buffered;
        if (timeRange.length > 0){
          this.bufferedTime = timeRange.end(timeRange.length - 1);
          console.log("buffedTime",timeRange.end(timeRange.length - 1));
        }
      });
      // 获取歌曲时长：只能在加载了之后才能获取
      this.currentAudio.addEventListener("durationchange", () => {
        this.audioDuration = this.currentAudio.duration;
      });
      // 刷新currentTime
      this.currentAudio.addEventListener("timeupdate", e => {
        this.audioCurrentTime = e.path[0].currentTime;
      });
      // 更新isEnd
      this.currentAudio.addEventListener("ended", () => {
        console.log("歌曲播放完");
        this.isEnd = true;
      });
    },
    handlePauseChange(val) {
      // <接收并更新暂停状态，来自子组件control_player>
      this.isPause = val;
    },
    handleCurrentTimeChange(currentTimeSet) {
      // <接收并设置当前时间，来自子组件control_process>
      this.currentAudio.currentTime = currentTimeSet;
    },
    pauseMusic() {
      this.currentAudio.pause();
      this.isPause = true;
    },
    playMusic() {
      this.currentAudio.play();
    },
    stopAndDestroy(){
      // 销毁audio
    },
    // 以下是暂时的测试方法
    setTime() {
      this.currentAudio.currentTime = 180;
    },
    getDur() {
      console.log(this.currentAudio.duration);
    },
    check(){
      const arr =['http://m10.music.126.net/20190729031919/7c7c98722c1f521ede12ddb61b975204/ymusic/e53a/156b/38ab/680d41f97a3b5acd32cdb77839ff0d9f.mp3','http://m10.music.126.net/20190729002534/625c7c2bcf3adf8a5338d047e304f4e4/ymusic/0a53/1b3f/69d2/54f6071555f341c012afcee79aa04800.mp3'];
      this.currentAudio.src=this.ischeck ? arr[0]:arr[1];
      this.currentAudio.play();
      this.ischeck = !this.ischeck;
    },
    getBuf() {
      const timeRange = this.currentAudio.buffered;
      console.log(timeRange.end(timeRange.length - 1));
    }
  },
  watch: {
    isPause(newVal) {
      // <监视isPause暂停状态，以此执行播放或暂停>
      if (newVal) {
        this.pauseMusic();
      } else {
        this.playMusic();
      }
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/MusicPlayback/play_icon'

.icon
  color white

.wrapper
  font-family $font
  background-image url('~@/assets/MusicPlayback/img/play_albumImg.png')
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
</style>