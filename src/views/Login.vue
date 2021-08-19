<template>
  <div class="login_container">
    <div class="longin-title">
      <span><router-link to='/Login' class="tag">{{ lang.Login.title[0] }}</router-link></span>
      <span>/</span>
      <span><router-link to="/Register">{{ lang.Login.title[1] }}</router-link></span>
    </div>
    <!-- 登录组件 -->
    <div class="form-block">
      <div class="form" v-for='(item,index) in  lang.Login.form' :key="index" @click="input()">
        <p>{{ item.name }}</p>
        <!-- :placeholder="item.alarm" -->
        <input :type="item.type" v-model="login_form[index]">
        <div class="error" :class="{'errorshow':errortag==index,'errorhide':errortag!=index}">
          <div class="top-point "><span></span></div>
          <span class="warning">!</span>
          <span class="text">{{ errormessage }}</span>
        </div>
      </div>
      <button @click="checkfrom()">{{ lang.Login.buttom }}</button>
      <router-link to="/Forget" class="forget">{{ lang.Login.Forget }}</router-link>
    </div>


  </div>
</template>

<script>
export default {
  props: {
    lang: {},
  },

  data() {
    return {
      Buffer: {},
      login_form: [],
      //多语言数据绑定
      errortag: -1,
      errormessage: '',
      //登录数据校验
    };
  },
  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      //  this.loginlang=this.$t('Login')
      // this.$forceUpdate();
    },
  },
  created() {
    // this.loginlang=this.$t('Login')
  },

  computed: {},

  mounted() {
  },

  methods: {
    input() {
      this.errortag = -1;
    },

    checkfrom() {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (this.login_form[0] == undefined || this.login_form[0] == "") {
        this.errortag = 0;
        this.errormessage = this.lang.Login.error.empty
        console.log('empty')
      } else if (this.login_form[1] == undefined || this.login_form[1] == "") {
        this.errortag = 1;
        this.errormessage = this.lang.Login.error.empty
        console.log('pempty')
      } else if (!reg.test(this.login_form[0])) {
        alert("邮箱格式不正确");
        this.errortag = 0;
        this.errormessage = this.lang.Login.error.type_error
      } else {
        this.login();
      }
    },

    //登陆验证
    async login() {
      const params = new URLSearchParams();
      console.log(this.login_form[0]);
      console.log(this.login_form[1])
      params.append('username', this.login_form[0]);
      params.append('password', this.login_form[1]);
      const {data: res} = await this.$http.post("login", params);
      console.log('res:', res);
      if (res == "list notFind") {
        this.error_user = "账号未注册或未激活";
        this.errortag = 0;
        this.errormessage = this.lang.Login.error.email_exit
      } else if (res == "pwerror") {
        this.error_user = "账号密码不正确";
        this.errortag = 1;
        this.errormessage = this.lang.Login.error.password_notright
      } else {
        window.sessionStorage.setItem('token', res.token)
        Buffer = JSON.stringify(res.userinfo)
        sessionStorage.userinfo = Buffer
        this.$store.commit("set_user_info", res.userinfo)
        this.$router.push('/Member/userinfo')
      }
    },
  },
};
</script>

<style>
.login_container {
  width: 10rem;
  height: 4.6875rem;
  /* height: 2.541667rem; */
  background-color: #ffffff;
  font-family: Montserrat;
  box-shadow: 0rem 0.005208rem 0.119792rem 0rem rgba(0, 0, 0, 0.16);
  padding: 0px;
  background: url(../assets/img/PC/Login/bg.png) no-repeat center;
  background-size: 10rem 4.6875rem;
  /* border: red .005208rem solid ; */
}

.login_container .longin-title {
  width: 1.822917rem;
  height: 0.260417rem;
  margin-top: .765625rem;;
  margin-left: 6rem;
  /* padding-left: 0.333333rem; */
  font-size: 0.208333rem;
  /* border: red .005208rem solid ; */
}

.login_container .longin-title span, .login_container .longin-title span a {
  font-size: 0.208333rem;
  width: auto;
  overflow: hidden;
  line-height: 0.208333rem;
  color: #d5d5d5;
  cursor: pointer;
  /* border: red .005208rem solid ; */
}

.login_container .longin-title span .tag {
  color: #1e1e1e;
}

.login_container .form-block {
  /* width: 1.6875rem; */
  margin-top: 0.416667rem;
  margin-left: 6rem;
  /* border: red solid .005208rem;*/
}

/* .login_container .form-block .form{ */
/* width: 1.6875rem; */
/* border: red solid .005208rem;*/
/* } */
.login_container .form-block .form p {
  font-size: .088542rem;
  font-family: Montserrat;
  line-height: 0.104167rem;
  color: #1e1e1e;
}

.login_container .form-block .form input {
  width: 1.677083rem;
  height: 0.208333rem;
  font-size: .083333rem;;
  color: #1e1e1e;
  margin-top: .052083rem;
}


.login_container .form-block .form .error {
  display: block;
  position: relative;
  margin-top: 0.026042rem;
  margin-left: .807292rem;;
  width: fit-content;
  height: 0.208333rem;
  font-size: .088542rem;
  border: #959595 solid .005208rem;
  border-radius: 0.02rem;
  color: #1e1e1e;
}

.errorshow {
  visibility: visible;
}

.errorhide {
  visibility: hidden;
}

.login_container .form-block .form .error .top-point {
  width: 0;
  height: 0;
  border-width: 0 0.03125rem 0.03125rem;
  border-style: solid;
  border-color: transparent transparent #959595; /*透明 透明  灰*/
  position: absolute;
  top: -0.03rem;
  left: 0.05rem;
}

.login_container .form-block .form .error .top-point span {
  display: block;
  width: 0;
  height: 0;
  border-width: 0 0.026042rem 0.026042rem;
  border-style: solid;
  border-color: transparent transparent white; /*透明 透明  黄*/
  position: absolute;
  top: .005208rem;
  left: -0.026042rem;
}

.login_container .form-block .form .error .text,
.login_container .form-block .form .error .warning {
  display: inline-block;
  margin-left: 0.026042rem;
  margin-top: 0.036458rem;
}

.login_container .form-block .form .error .text {
  margin-right: 0.052083rem;
}

.login_container .form-block .form .error .warning {
  color: white;
  width: 0.125rem;
  height: 0.125rem;
  background-color: orange;
  font-size: 0.09375rem;
  line-height: 0.125rem;
  text-align: center;
}

.login_container button {
  width: .65625rem;
  height: 0.208333rem;
  background-color: #ffb15b;
  border: white solid;
  border-radius: .020833rem;
  font-size: .088542rem;
  line-height: 0.104167rem;
  color: white;
}

.forget {
  display: block;
  margin-top: 0.46875rem;
  width: 1.395833rem;
  font-size: .088542rem;
  line-height: 0.15625rem;
  color: #d5d5d5;
  border-top: #d5d5d5 solid 0.010417rem;
}

.forget:hover {
  color: orange;
}
</style>
