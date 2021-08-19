<template>
  <div class="login_container">
    <div class="longin-title">
      <span>{{ lang.Forget.title[0] }}</span>
    </div>
    <!-- 登录组件 -->
    <div class="form-block">
      <div class="form" v-for='(item,index) in lang.Forget.form' :key="index" @click="input()">
        <p>{{ item.name }}</p>
        <!-- :placeholder="item.alarm" -->
        <input v-model="login_form[index]">
        <div class="error" :class="{'errorshow':errortag==index,'errorhide':errortag!=index}">
          <div class="top-point "><span></span></div>
          <span class="warning">!</span>
          <span class="text"> {{ errormessage }} </span>
        </div>
      </div>
      <button @click="checkfrom()">{{ lang.Forget.getcode }}</button>
      <button @click="update()">{{ lang.Forget.buttom }}</button>
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
      confirm: '',
      //登录数据校验
    };
  },

  created() {
    this.loginlang = this.$t('Forget')
  },

  computed: {},

  mounted() {
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
      console.log('check');
      console.log(this.login_form[1]);
      if (this.login_form[0] == undefined || this.login_form[0] == "") {
        this.errortag = 0;
        this.errormessage = this.lang.Forget.error.empty
        console.log('empty')
      } else if (this.login_form[2] == undefined || this.login_form[2] == "") {
        this.errortag = 2;
        this.errormessage = this.lang.Forget.error.empty
        console.log('pempty')
      } else if (this.login_form[3] == undefined || this.login_form[3] == "") {
        this.errortag = 3;
        this.errormessage = this.lang.Forget.error.empty
        console.log('pempty')
      } else if (this.login_form[2] != this.login_form[3]) {
        this.errortag = 3;
        this.errormessage = this.lang.Forget.error.repassword_notright
        console.log('pempty')
      } else if (!reg.test(this.login_form[0])) {
        alert("邮箱格式不正确");
        this.errortag = 0;
        this.errormessage = this.lang.Forget.error.type_error
      } else {
        this.find();
      }
    },

    //登陆验证
    async find() {
      console.log(this.login_form);
      const params = new URLSearchParams();
      params.append('email', this.login_form[0]);

      const {data: ret} = await this.$http.post("findUser", params);
      if (ret == 'exit') {
        const {data: ret} = await this.$http.post("findPassword", params);
        if (ret != undefined) {
          alert("验证码已发送到邮箱");
          console.log('已发送到邮箱');
          this.confirm = ret;
          console.log(this.confirm);
        } else {
          console.log('错误');
        }
      } else {
        this.errortag = 0;
        console.log(this.loginlang.error.email_empty);
        this.errormessage = this.loginlang.error.email_not_exit
        console.log(ret);
        this.exit_user = '邮箱未注册'
      }
    },


    //登陆验证
    async updatepassword() {
      console.log(this.login_form);
      const params = new URLSearchParams();
      params.append('email', this.login_form[0]);
      params.append('password', this.login_form[2]);

      const {data: ret} = await this.$http.post("findUser", params);
      if (ret == 'exit') {
        const {data: ret} = await this.$http.post("updatepassword", params);
        if (ret == 'updatesuccess') {
          console.log('重置成功');
          alert("重置成功");
          // this.confirm=ret;
          // console.log(this.confirm);
          this.confirm = ''
          this.$router.push('/Login')
        } else {
          console.log('错误');
        }
      } else {
        this.errortag = 0;
        console.log(this.loginlang.error.email_empty);
        this.errormessage = this.loginlang.error.email_not_exit
        console.log(ret);
        this.exit_user = '邮箱未注册'
      }
    },


    update() {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      console.log('check');
      console.log(this.login_form[1]);
      if (this.login_form[0] == undefined || this.login_form[0] == "") {
        this.errortag = 0;
        this.errormessage = this.lang.Forget.error.empty
        console.log('empty')
      } else if (this.login_form[1] == undefined || this.login_form[1] == "") {
        this.errortag = 1;
        this.errormessage = this.lang.Forget.error.empty
        console.log('pempty')
      } else if (this.login_form[2] == undefined || this.login_form[2] == "") {
        this.errortag = 2;
        this.errormessage = this.lang.Forget.error.empty
        console.log('pempty')
      } else if (this.login_form[3] == undefined || this.login_form[3] == "") {
        this.errortag = 3;
        this.errormessage = this.lang.Forget.error.empty
        console.log('pempty')
      } else if (this.login_form[2] != this.login_form[3]) {
        this.errortag = 3;
        this.errormessage = this.lang.Forget.error.repassword_notright
        console.log('pempty')
      } else if (!reg.test(this.login_form[0])) {
        alert("邮箱格式不正确");
        this.errortag = 0;
        this.errormessage = this.lang.Forget.error.type_error
      } else if (this.login_form[1] != (this.confirm * 123) % 1000000) {
        alert("验证码不正确");
        this.errortag = 1;
        this.errormessage = this.lang.Forget.error.code_error
      } else {
        this.updatepassword();
      }

    }


  },
};
</script>

<style>
.login_container .longin-title span {
  color: #1e1e1e;
}
</style>
