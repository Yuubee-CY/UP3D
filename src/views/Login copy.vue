<template>
  <div class="login_container">
    <div class="longin-title">
      <span><router-link to='/Login' class="tag">{{ langc.title1 }}</router-link></span>
      <span>/</span>
      <span><router-link to="/Register">{{ langc.title2 }}</router-link></span>
    </div>
    <!-- 登录组件 -->
    <el-form
        :model="login_form"
        :rules="login_rules"
        ref="login"
        :label-position="labelPosition"
        label-width='0.55rem'
        status-icon
    >
      <div class="login-sform">
        <div class="login-input">
          <el-form-item prop="username" :error="error_user" :label="langc.username">
            <el-input
                placeholder="please use email login"
                v-model="login_form.username"
                clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" :label="langc.password">
            <el-input
                placeholder="password"
                v-model="login_form.password"
                show-password
            ></el-input>
          </el-form-item>
        </div>

        <div class="submit">
          <el-button @click.stop="login()">{{ langc.sign_up }}</el-button>
        </div>

        <div class="line"></div>
        <div class='fpassword'>{{ langc.find }}</div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //多语言数据绑定
      langc: {},
      en: {
        title1: 'Sign up',
        title2: 'Register',
        username: "username",
        password: "password",
        rpassword: 'repassword',
        sign_up: 'sign up',
        find: 'forget password ？',
        email: 'email',
        phone: 'phone',
        register: 'submit',
        error_cpassword: 'please input password again',
        error_cpassword_e: 'password is not equal',
      },
      zh: {
        title1: '登录',
        title2: '注册',
        username: "邮箱账号",
        password: "请输入密码",
        rpassword: '再次输入密码',
        sign_up: '登录',
        find: '忘记密码 ？',
        email: '注册邮箱',
        phone: '电话号码',
        register: '注册',
        error_cpassword: '请再次输入密码',
        error_cpassword_e: '两次输入密码不一致!',
      },

      login_form: {
        username: "",
        password: "",
      },

      labelPosition: 'left',
      error_user: '',

//登录数据校验
      login_rules: {
        username: [
          {required: true, message: "please input username", trigger: "blur"},
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {required: true, message: "please input password", trigger: "blur"},
        ],
      },
    };
  },

  computed: {},
  mounted() {
    this.langc = this.en
  },

  methods: {
    //登陆验证
    login() {
      this.error_user = "";
      console.log('登录');
      this.$refs.login.validate(async (valid) => {
        if (!valid) return;
        // const result = await  this.$http.get('')
        const {data: res} = await this.$http.post("login", this.login_form);
        // console.log(username+'_'+password);
        console.log(valid);
        console.log(res);
        if (res == "list notFind") {
          this.error_user = "账号未注册或未激活";
        } else if (res == "pwerror") {
          this.error_user = "账号密码不正确";
        } else {
          window.sessionStorage.setItem('token', res.token)
          this.$router.push('/Member')
        }
      });
      console.log(this.login_form.username + "_" + this.login_form.password);
    },

    // 点击重置按钮，重置登录表单
    // login() {
    //   this.$refs.loginFormRef.validate(async valid => {
    //     if (!valid) return
    //     const { data: res } = await this.$http.post('login', this.loginForm)
    //     if (res.meta.status !== 200) return this.$message.error('登录失败！')
    //     this.$message.success('登录成功')
    //     // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
    //     //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
    //     //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
    //     window.sessionStorage.setItem('token', res.data.token)
    //     // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
    //     this.$router.push('/home')
    //   })
    // }
  },
};
</script>

<style>
.login_container {
  width: 3.182292rem;
  margin: auto;
  /* height: 2.541667rem; */
  background-color: #ffffff;
  font-family: Montserrat;
  box-shadow: 0rem 0.005208rem 0.119792rem 0rem rgba(0, 0, 0, 0.16);
  padding: 0px;
  margin-top: 0.953125rem;
  margin-bottom: 1.411458rem;
  /* border: red .005208rem solid ; */
}

.login_container .longin-title {
  width: 1.822917rem;
  height: 0.260417rem;
  padding-top: 0.322917rem;
  padding-left: 0.333333rem;
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

.login_container .login-sform {
  /* width: 3.182292rem; */
  font-size: .088542rem;
  margin-top: 0.276042rem;
  margin-left: 0.333333rem;
  /* border: red .005208rem solid ; */
}

.login_container .login-sform .login-input {
  width: 2.328125rem;

  /* margin-left: 0.416667rem; */
}

.login_container .login-input:focus {
  border: none;
  outline: none;
  box-shadow: none;
}

.login_container .login-input .el-form-item__label {
  margin-top: .052083rem;
}

.login_container .login-input .el-input {
  width: 1.171875rem;
  margin-left: 0.338542rem;
  border-bottom: solid 0.005208rem #d5d5d5;
}

.login_container .login-input .el-input .el-input__inner {
  border: none;
  /* margin-left: 0.46875rem; */
}

.login_container .submit {
  width: 0.723958rem;
  height: 0.192708rem;
  margin-left: .78125rem;
  margin-top: 0.260417rem;
  font-size: 0.140625rem;
  line-height: 0.166667rem;
  /* border: red .005208rem solid ; */
}

.login_container .submit .el-button {
  width: 0.723958rem;
  height: 0.192708rem;
  background-color: #ffb15b;
  font-size: 0.140625rem;
  color: #ffffff;
  line-height: 0.166667rem;
  padding: 0rem;
  margin: 0rem;
}

.login_container .el-form-item__error {
  margin-left: 0.416667rem;
}

.login_container .el-button:focus,
.login_container .el-button:hover {
  background-color: #ffb15b;
  color: #ffffff;
}

.login_container .login-sform .line {
  width: 2.177083rem;
  height: 0.005208rem;
  /* margin-left: 0.333333rem; */
  margin-top: 0.21875rem;
  background-color: #d5d5d5;
}

.login_container .fpassword {
  margin-top: 0.114583rem;
  /* margin-left: 0.333333rem; */
  padding-bottom: 0.364583rem;
  font-size: 0.0625rem;
  color: #d5d5d5;
  cursor: pointer;
}

.login_container .login-sform .fpassword:hover {
  color: #ffb15b;
}

.login_container .longin-title span .tag {
  color: #1e1e1e;
}
</style>
