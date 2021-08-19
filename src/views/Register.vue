<template>
  <div class="login_container">
    <div class="longin-title">
      <span><router-link to='/Login'>{{ lang.Register.title[0] }}</router-link></span>
      <span>/</span>
      <span><router-link to="/Register" class="tag">{{ lang.Register.title[1] }}</router-link></span>
    </div>
    <div class="form-block">
      <div class="form" v-for='(item,index) in lang.Register.form' :key="index" @click="input()">
        <p>{{ item.name }}</p>
        <input v-model="login_form[index]">
        <div class="error" :class="{'errorshow':errortag==index,'errorhide':errortag!=index}">
          <div class="top-point "><span></span></div>
          <span class="warning">!</span>
          <span class="text">{{ errormessage }}  </span>
        </div>
      </div>
      <button @click="checkfrom()">{{ lang.Register.buttom }}</button>
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
      login_form: [],
      //多语言数据绑定
      errortag: -1,
      errormessage: '',
      //登录数据校验
    };
  },

  created() {
    this.loginlang = this.$t('Register')
  },

  computed: {},

  mounted() {
    this.langc = this.en
  },

  methods: {

    input() {
      console.log('focus')
      console.log(this.errortag)
      this.errortag = -1;
      console.log(this.errortag)
    },
    checkfrom() {

      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

      //表单验证
      if (this.login_form[0] == undefined || this.login_form[0] == "") {
        this.errortag = 0;
        this.errormessage = this.lang.Register.error.empty
        console.log('empty')
      } else if (this.login_form[1] == undefined || this.login_form[1] == "") {
        this.errortag = 1;
        this.errormessage = this.lang.Register.error.empty
        console.log('pempty')
      } else if (this.login_form[2] == undefined || this.login_form[2] == "") {
        this.errortag = 2;
        this.errormessage = this.lang.Register.error.empty
        console.log('pempty')
      } else if (this.login_form[3] == undefined || this.login_form[3] == "") {
        this.errortag = 3;
        this.errormessage = this.lang.Register.error.empty
        console.log('pempty')
      } else if (this.login_form[2] != this.login_form[3]) {
        this.errortag = 3;
        this.errormessage = this.lang.Register.error.repassword_notright
        console.log('pempty')
      } else if (!reg.test(this.login_form[0])) {
        alert("邮箱格式不正确");
        this.errortag = 0;
        this.errormessage = this.lang.Register.error.type_error
      } else {
        this.register();
      }
    },


    //登陆验证
    async register() {
      console.log(this.login_form);
      const params = new URLSearchParams();
      params.append('email', this.login_form[0]);
      params.append('phone', this.login_form[1]);
      params.append('password', this.login_form[2]);

      const {data: ret} = await this.$http.post("findUser", params);
      if (ret == 'exit') {
        this.errortag = 0;
        this.errormessage = this.lang.Register.error.email_exit
        this.exit_user = '邮箱已被注册'
      } else {
        const {data: res} = await this.$http.post("register", params);
        console.log(res);
        if (res == 'insert success') {
          alter('请前往邮箱激活账号')
          this.$router.push('/Login')
        }
      }
      ;
    },

  },
};
</script>

<style>

</style>
