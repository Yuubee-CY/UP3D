<template>
  <div class="userinfo">
    <div class="header-img">
      <div v-show="show_photo" class="add-photo"></div>
      <div class="img"><img></div>
      <div class="name">{{ userlist[0] }}</div>
    </div>
    <!-- 信息组件 -->
    <div class="form-block">
      <div class="form" v-for='(item,index) in loginlang.form' :key="index" @click="input()">
        <p>{{ item.name }}</p>
        <!-- :placeholder="item.alarm" -->
        <div class="input-list">
          <input
              placeholder="待补全"
              @blur="change_inp($event,index)"
              v-model="userlist[index]"
              :type="item.type"
              :disabled="(index==1)||(editor==1)">
          <div class="status-icon"></div>
        </div>
        <div class="error" :class="{'errorshow':errortag==index,'errorhide':errortag!=index}">
          <div class="top-point "><span></span></div>
          <span class="warning">!</span>
          <span class="text"> {{ errormessage }} </span>
        </div>
      </div>
      <div class="button-box">
        <div class="button" @click="start_editor()" v-show="editor"><span
            class="edit_icon"></span>{{ loginlang.button[0] }}
        </div>
        <div class="button" @click="save()" v-show="!editor">{{ loginlang.button[1] }}</div>
        <div class="button" @click="end_editor()" v-show="!editor">{{ loginlang.button[2] }}</div>
      </div>

    </div>

    <!-- <div class="button" @click="checkfrom()">{{loginlang.button[0]}}</div>   -->

  </div>
</template>

<script>
export default {

  data() {
    return {
      editor: 1,
      loginlang: {},
      userinfo: [],
      //多语言数据绑定
      errortag: -1,
      errormessage: '',
      //登录数据校验,
      // userinfo:{},
      usermessage: {},
      userlist: [],
      //临时存储个人信息，用于点击“取消”时重置表单内容
      temp_userlist: [],
      show_photo: true
    };
  },
  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      this.loginlang = this.$t('allinfo').Member.userinfo
    },
  },
  created() {
    this.loginlang = this.$t('allinfo').Member.userinfo
    this.usermessage = JSON.parse(sessionStorage.userinfo);
    this.getuserinfo(this.usermessage)
  },
  computed: {},
  mounted() {
  },
  methods: {
    start_editor() {
      this.editor = 0
      // this.$forceUpdate();
    },
    end_editor() {
      this.editor = 1
      //通过临时变量保存当前session中的userinfo信息
      for (let key in this.usermessage) {
        if (this.usermessage[key] == null) {
          this.temp_userlist.push('')
        } else {
          if (this.temp_userlist.length < 7) {
            this.temp_userlist.push(this.usermessage[key])
          } else {
            this.temp_userlist.splice(0, 1)
            this.temp_userlist.push(this.usermessage[key])
          }
        }
      }
      this.userlist = this.temp_userlist
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].toString().trim() == '') {
          // this.userlist[i] = '待补全'
          this.userlist[i] = ''
        }
      }
    },
    async save() {
      this.editor = 1;
      const params = new URLSearchParams();
      params.append('username', this.userlist[0].toString().trim());
      params.append('email', this.userlist[1].toString().trim());
      params.append('phone', this.userlist[2].toString().trim());
      params.append('company', this.userlist[3].toString().trim());
      params.append('profession', this.userlist[4].toString().trim());
      params.append('contry', this.userlist[5].toString().trim());
      params.append('city', this.userlist[6].toString().trim());
      const {data: res} = await this.$http.post("updateUserinfo", params);
      if (res == 'updatesuccess') {
        const {data: res} = await this.$http.post("getuserinfo", params);
        sessionStorage.userinfo = JSON.stringify(res.userinfo)
        this.usermessage = JSON.parse(sessionStorage.userinfo);
        this.getuserinfo(this.usermessage)
        this.$forceUpdate();
        alert('更新成功');
      }
    },
    input() {
      this.errortag = -1;
    },
    getuserinfo(jsonList) {
      for (var key in jsonList) {
        if (jsonList[key] == null) {
          this.userlist.push('')
        } else {
          if (this.userlist.length < 7) {
            this.userlist.push(jsonList[key])
          } else {
            this.userlist.splice(0, 1)
            this.userlist.push(jsonList[key])
          }
        }
      }
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].toString().trim() == '') {
          this.userlist[i] = ''
        }
      }
    },
    checkfrom() {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      console.log('check');
      console.log(this.login_form[1]);
      if (this.login_form[0] == undefined || this.login_form[0] == "") {
        this.errortag = 0;
        this.errormessage = this.loginlang.error.empty
        console.log('empty')
      } else if (this.login_form[1] == undefined || this.login_form[1] == "") {
        this.errortag = 1;
        this.errormessage = this.loginlang.error.empty
        console.log('pempty')
      } else if (!reg.test(this.login_form[0])) {
        alert("邮箱格式不正确");
        this.errortag = 0;
        this.errormessage = this.loginlang.error.type_error
      } else {
        this.login();
      }
    },
    change_inp(e, index) {
      //用于判断用户编辑信息时是否与原来相同从而改变“保存”按钮的状态
      // {
      //   if (this.usermessage[index] != this.userlist[index]) {
      //   }
      //   let temp = []
      //   let session_userinfo = JSON.parse(sessionStorage.userinfo)
      //   for (let key in session_userinfo) {
      //     temp.push(session_userinfo[key])
      //   }
      //     if (this.userlist[i] != temp[i]) {
      //       console.log('hhhhhh')
      //       console.log(this.userlist[i])
      //       console.log(temp[i])
      //     }
      //   }
      //   // console.log(this.userlist);
      // }
    }
  },
};
</script>

<style>
.userinfo {
  max-width: 6.5rem;
  height: 4.6875rem;
  margin-left: .234375rem;
  font-family: Montserrat;
  /* box-shadow: 0rem 0.005208rem 0.119792rem 0rem rgba(0, 0, 0, 0.16); */
}

.userinfo .header-img {
  /* display: inline-block; */
  float: left;
  width: 1.541667rem;
  /* height: 2.057292rem; */
  box-shadow: 0rem 0.005208rem 0.119792rem 0rem rgba(0, 0, 0, 0.16);
  /* border: solid red .005208rem;; */
  position: relative;
}


.userinfo .header-img .add-photo {
  width: 0.60386rem;
  height: 0.60386rem;
  position: absolute;
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -20%);
  background: url("../../assets/img/PC/Member/add_photo_unactive.png") no-repeat;
  background-size: contain;
  transition: .2s all;
  cursor: pointer;
}

.userinfo .header-img .add-photo:hover {
  background: url("../../assets/img/PC/Member/add_photo_active.png") no-repeat;
  background-size: contain;
}

.userinfo .header-img .img {
  width: 1.541667rem;
  height: 2.041667rem;
  background-color: #f8f8f8;
}


.userinfo .header-img .name {
  width: 1.541667rem;
  height: .34375rem;
  background-color: white;
  font-size: .104167rem;
  line-height: .34375rem;
  color: #707070;
  text-align: center;
}


.userinfo .form-block {
  width: 4rem;
  display: inline-block;
  margin-left: .46875rem;
  /* border: solid red .005208rem;; */
}


.userinfo .form-block, .userinfo .form-block .form {
  display: inline-block;
  /* border: solid red .005208rem;; */

}

.userinfo .form-block .form .status-icon {
  display: inline-block;
  width: .145833rem;
  height: .145833rem;
  margin-left: .09375rem;
}


.userinfo .form-block .form p {
  margin-bottom: .098958rem;
  margin-left: .078125rem;
  font-size: .072917rem;
  width: max-content;
  color: #959595;
  /* border: solid red .005208rem;; */

}

.userinfo .form-block .form {
  /* padding-top: .098958rem; */
  margin-left: .744792rem;
  margin-bottom: .276042rem;
  /* border: blue solid .005208rem; */
}

.userinfo .form-block .form .input-list {
  height: .208333rem;
  display: flex;
  vertical-align: middle;
}

.userinfo .form-block .form input {
  padding: 0rem;
  margin: 0rem;
  width: 1.125rem;
  height: .1875rem;
  background-color: #ffffff;
  border-radius: .020833rem;
  border: solid .005208rem #707070;
  text-indent: .078125rem;
  font-size: .072917rem;
  color: #707070;
}

.userinfo .form-block .form:nth-child(odd) {
  margin-left: 0rem;
}

.userinfo .button-box {
  box-sizing: border-box;
  margin-top: .104167rem;

}

.userinfo .button {
  width: .666667rem;
  height: .244792rem;
  font-size: .104167rem;
  line-height: .244792rem;
  color: #f8f8f8;
  border-radius: .020833rem;
  background-color: #707070;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s all;
}

.userinfo .button:nth-child(2) {
  float: left;
}

.userinfo .button:hover {
  background-color: #ffb15b;
}

.userinfo .button .edit_icon {
  width: .104167rem;
  height: .104167rem;
  vertical-align: middle;
  background: url("../../assets/img/PC/Member/edit_icon.svg") no-repeat;
  background-size: contain;
  margin-right: 0.03623rem;
}

</style>
