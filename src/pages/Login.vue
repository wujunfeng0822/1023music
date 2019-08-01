<template>
  <div class="wrapper">
    <div class="logoContainer">
      <h1 class="logo"></h1>
    </div>
    <form class="content">
      <input type="phone" placeholder="手机号" v-model="account" />
      <input type="password" placeholder="密码" v-model="password" />
      <a @click="login">登录</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    toast({txt,type,time,mask}) {
      const toastEle = this.$createToast({
        txt: txt || "Loading...",
        mask: mask || true ,
        type: type || 'loading',
        time: time || 0
      });
      toastEle.show();
      return toastEle.hide;
    },
    login() {
      // const hide = this.toast();
      // /login/cellphone?phone=xxx&password=yyy
      // this.$axios
      //   .post(`api/login/cellphone`, {
      //     phone: this.account,
      //     password: this.password
      //   })
      //   .then(
      //     res => {
      //       if (res.data.code === 200) {
      //         // 登录成功
      //       } else {
      //         // 登录失败
      //         // error.show();
      //       }
      //       console.log(res);
      //     },
      //     err => {
      //       console.log(err);
      //     }
      //   );
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  background-color #240400
  position absolute
  height 100%
  width 100%
  padding-top 20%

.logoContainer
  position relative
  margin 0 auto
  width 46.9%
  padding-bottom 18.4%

  .logo
    position absolute
    background-image url('https://s2.music.126.net/style/web2/img/frame/topbar.png?ab5a4c90c17b04183c317686f1393e9d')
    background-repeat norepeat
    width 100%
    height 100%
    background-position 0 0

.content
  padding-top 0.5rem
  display flex
  flex-direction column
  align-items center

  input
    line-height 0.9rem
    width 70%
    padding 0 0.2rem
    background-color transparent
    border-bottom 1px solid white
    color white

  a
    margin-top 0.5rem
    background-color #ed1c00
    color white
    width 40%
    line-height 0.8rem
    text-align center
    border-radius 0.4rem
    font-size 0.32rem
</style>
