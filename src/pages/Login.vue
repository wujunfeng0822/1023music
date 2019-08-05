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
import { mapState } from "vuex";
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  computed: {
    lastAccount:{
      get(){
        this.account = this.$store.state.account;
        return this.$store.state.account;
      }
    }
  },
  watch:{
    lastAccount(newVal){
    }
  },
  methods: {
    login() {
      if (!this.validate()) {
        return;
      }
      const toastLoadingHide = this.toast({});
      this.$axios
        .post(`api/login/cellphone`, {
          phone: this.account,
          password: this.password
        })
        .then(
          res => {
            toastLoadingHide();
            if (res.data.code === 200) {
              // 登录成功
              const profile = res.data.profile;

              this.$store.dispatch("update_login", {
                isLogin: true,
                profile: profile,
                account: this.account
              });
              // 路由跳转
              this.$router.replace({
                path: "/my-account"
              });
            } else {
              // 登录失败
              console.log(res.data.code);
              this.toast({
                txt: "登录失败",
                mask: false,
                type: "err",
                time: 1000
              });
            }
          },
          err => {
            toastLoadingHide();
            console.log(err);
            this.toast({
              txt: "登录失败，网络出错",
              mask: false,
              type: "err",
              time: 1000
            });
          }
        );
    },
    validate() {
      //<表单验证>
      if (this.account === "") {
        this.toast({
          txt: "未输入手机号",
          time: 500,
          mask: false,
          type: "err"
        });
        return false;
      }
      const v = new this.$validator();
      if (!v.isPhone(this.account)) {
        this.toast({ txt: "手机号错误", time: 500, mask: false, type: "err" });
        return false;
      } else {
        this.$axios
          .get(`api/cellphone/existence/check?phone=${this.account}`)
          .then(
            res => {
              if (res.data.exist < 0) {
                this.toast({
                  txt: "该手机号尚未注册",
                  time: 500,
                  mask: false,
                  type: "err"
                });
                return false;
              }
            },
            err => {
              this.toast({
                txt: "网络出错，请稍后尝试",
                time: 500,
                mask: false,
                type: "err"
              });
              return false;
            }
          );
      }
      if (this.password === "") {
        this.toast({ txt: "未输入密码", time: 500, mask: false, type: "err" });
        return false;
      }
      return true;
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
