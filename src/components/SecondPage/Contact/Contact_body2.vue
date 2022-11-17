<template>
  <div class="Contact_body2">
    <div class="text">
      <p class="title">{{ lang2.card1.title }}</p>
      <p>{{ lang2.card1.message }}</p>
      <div class="list" v-for="(item, index1) in lang2.card1.infor" :key="index1">
        <div :class="item.iconClassName" class="item">
          <img class="el-icon" v-lazy="item.iconUrl" :key="item.iconUrl">
          <div class="oneline"><span>{{ item.title }} </span><span>{{ item.informessage }}</span></div>
          <div class="QR-code" v-if=item.qrCode>
            <div class="wx-promote">
              <img class="promote-left" v-lazy="require('../../../assets/img/PC/Contact/wx_query.png')">
              <div class="promote-right">
                <p class="title">深圳云甲科技</p>
                <p>微信号</p>
                <p>功能介绍</p>
              </div>
            </div>
            <div class="facebook-promote">

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text">
      <p class="title">{{ lang2.card2.title }}</p>
      <p class="part2">
        {{ lang2.card2.message[0] }}
        <br>
        {{ lang2.card2.message[1] }}
      </p>
      <div class="form">
        <div class="inp-row">
          <div class="inp-tx">
            <div class="fake-inp">
              <input v-model="form.Name" @focus="showBorder($event)" @blur="hideBorder($event)" :placeholder='lang2.form.Name'>
              <span>*</span>
            </div>
          </div>
          <div class="inp-tx">
            <div class="fake-inp">
              <input v-model="form.Phone" @focus="showBorder($event)" @blur="hideBorder($event)" :placeholder='lang2.form.Phone' class="second_input">
              <span>*</span>
            </div>
          </div>
          <div class="inp-tx">
            <div class="fake-inp">
              <input v-model="form.Company" @focus="showBorder($event)" @blur="hideBorder($event)" :placeholder='lang2.form.Company'>
              <span>*</span>
            </div>
          </div>
          <div class="inp-tx">
            <div class="fake-inp">
              <input v-model="form.Email" @focus="showBorder($event)" @blur="hideBorder($event)" :placeholder='lang2.form.Email' class="second_input">
              <span>*</span>
            </div>
          </div>
          <div class="inp-tx">
            <div class="info-area">
              <textarea name="textarea" @focus="showBorder($event)" @blur="hideBorder($event)" v-model="form.Contant" :placeholder='lang2.form.Contant' class="big-input"></textarea>
            </div>
          </div>
        </div>
        <button @click.stop="checkfrom()">{{ lang2.submit }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      form: {
        Name: '',
        Contant: '',
        Phone: '',
        Email: '',
        Company: '',
      },
      // lang:{},
    }
  },
  computed: {},

  created() {
  },

  watch: {},

  mounted() {

  },
  methods: {
    //登陆验证
    async try_contact() {
      console.log(this.form);
      const params = new URLSearchParams();
      params.append('Name', this.form.Name);
      params.append('Contant', this.form.Contant);
      params.append('Phone', this.form.Phone);
      params.append('Email', this.form.Email);
      params.append('Company', this.form.Company);

      const {data: ret} = await this.$http.post("contact", params);
      if (ret == 'success') {
        alert('邮件已发送，感谢你的来件！');
      } else {
        alert("邮件发送失败");
      }
    },


    checkfrom() {
      var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (this.form.Name == undefined || this.form.Name == "") {
        alert('请填写名称');
      } else if (this.form.Phone == undefined || this.form.Phone == "") {
        alert('请填写联系方式')
      } else if (this.form.Email == undefined || this.form.Email == "") {
        alert('请填写邮箱')
      } else if (this.form.Company == undefined || this.form.Company == "") {
        alert('请填写公司名称')
      } else if (this.form.Contant == undefined || this.form.Contant == "") {
        alert('请填写内容')
      } else if (!reg.test(this.form.Email)) {
        alert("邮箱格式不正确");
      } else {
        this.try_contact();
      }
    },

    showBorder(e){
      e.target.style.borderColor = '#FEBB6F'
    },
    hideBorder(e){
      e.target.style.borderColor = '#D5D5D5'
    }
  },
}
</script>


<style >
.Contact_body2 {
  position: relative;
  margin: auto;
  margin-top: .796875rem;;
  width: 8.23rem;;
  height: auto;
  color: #ffb15b;
  display: flex;
  /* border: green solid 0.010417rem; */

}

.Contact_body2 div {
  float: left;
  width: 3.645833rem;
}

.Contact_body2 .text {
  width: 4.114583rem;
}

.Contact_body2 .text:first-child{
  /*width: 3.914583rem;*/
  /*margin-right: .2rem;*/
  box-sizing: border-box;
}

.Contact_body2 .text:first-child .list {
  margin-top: .078125rem;
  margin-bottom: 0.18077rem;
}


.Contact_body2 .text p {
  font-size: 16PX;
  color: #707070;
  width: 85%;
  margin-bottom: 0.385417rem;
}

.Contact_body2 .text .title {
  font-size: 30PX;
  margin-bottom: 0.260417rem;
  width: fit-content;
  padding-right: 30PX;
  border-bottom: #febb6f solid 0.020833rem;
  white-space: nowrap;
}

.Contact_body2 .text .part2 {
  width: 4.114583rem;
}

.Contact_body2 .text .list {
  position: relative;
  /*height: .48333rem;*/
}

.Contact_body2 .text .list .el-icon {
  /*width: .208333rem;*/
  /*height: .208333rem;*/
  width: 28PX;
  height: 28PX;
  float: left;
}


.Contact_body2 .item {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}

.Contact_body2 .text .list .QR-code {
  border: .005rem solid #D5D5D5;
  border-radius: 0.03831rem;
  box-sizing: border-box;
  padding: 0.01631rem;
  width: 3.38164rem;
  height: auto;
  top: calc(100% + 5PX);
  left: 0;
  position: absolute;
  opacity: 0;
  transition: all .35s;
}

.Contact_body2 .text .list .wx-query:hover .QR-code {
  display: block;
  opacity: 1;
}

.Contact_body2 .text .list .QR-code:before {
  content: '';
  display: block;
  position: absolute;
  top: -5.2%;
  left: 0.41063rem;
  border: .005rem solid #D5D5D5;
  border-bottom: none;
  border-right: none;
  background-color: #fff;
  transform: rotate(45deg);
  width: 0.08246rem;
  height: 0.08246rem;
  transition: all .5s;
  z-index: 5;
}

.Contact_body2 .text .list .QR-code .wx-promote {
  position: relative;
  width: 100%;
  /*height: 0.84541rem;*/
  height: auto;
  display: flex;
  /*z-index: 15;*/
}

.Contact_body2 .text .list .QR-code .facebook-promote{
  display: none;
}

.Contact_body2 .text .list .QR-code .promote-left {
  float: left;
  width: 0.84541rem;
  height: 0.84541rem;
}

.Contact_body2 .text .list .QR-code .promote-right {
  /*position: absolute;*/
  /*left: 0.84541rem;*/
  /*top: 0.04831rem;*/
  width: auto;
  /*height: 0.84541rem;*/
  height: auto;
}

.Contact_body2 .text .list .QR-code .promote-right p {
  color: #000;
  font-size: 0.10rem;
  border: none;
  padding: 0;
  margin: 0;
  margin-top: 0.06246rem;
  display: flex;
  width: auto;
  white-space: nowrap;
}

.Contact_body2 .text .list .QR-code .promote-right .title {
  font-size: 0.12277rem;
  width: auto;
  margin-bottom: -0.04631rem;
  margin-top: 0.02015rem;
  display: block;
  line-height: normal;
}

.Contact_body2 .text .list .QR-code .promote-right p:nth-child(2)::after {
  content: 'gh_ed60aa47cd6e';
  color: #707070;
  display: inline-block;
  width: 70px;
  /*position: absolute;*/
  margin-left: 0.24155rem;
  line-height: normal;
  white-space: normal;
}

.Contact_body2 .text .list .QR-code .promote-right p:nth-child(3)::after {
  content: '牙科三维领域的技术开发、技术支持、技术咨询';
  color: #707070;
  display: inline-block;
  width: 70px;
  /*position: absolute;*/
  margin-left: 0.13393rem;
  line-height: normal;
  white-space: normal;
}

.Contact_body2 .text .list div .oneline span:nth-child(2) {
  /*width: 2.81546rem;*/
  margin: 0;
  padding: 0;
  line-height: normal;
  word-break: break-word;
}

.Contact_body2 .text .list .long-text-address div span:nth-child(2) {
  /*line-height: 0.17493rem;*/
  line-height: normal;
  top: 5px;
}

.Contact_body2 .oneline {
  font-size: 14PX;
  margin-left: 10PX;
  color: #707070;
  display: flex;
  align-items: center;
}

.Contact_body2 .text .list .moreline span:nth-child(1), .Contact_body2 .text .list .oneline span:nth-child(1) {
  color: #343434;
  white-space: nowrap;
}

.Contact_body2 .text .form {
  width: 100%;
}

.Contact_body2 .text .form .inp-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.Contact_body2 .text .form .inp-tx {
  width: 48.2%;
}

.Contact_body2 .text .form .inp-tx:last-child{
  width: 100%;
}

.Contact_body2 .text .form .fake-inp{
  box-sizing: border-box;
  width: 100%;
  position: relative;
  margin-top: .078125rem;
  display: flex;
  align-items: center;
}

.Contact_body2 .info-area{
  width: 100%;
}

.Contact_body2 .text .form input {
  width: 100%;
  height: 40PX;
  font-family: 'Microsoft Yahei';
  padding-left:0.12077rem;
  padding-right: 25PX;
  box-sizing: border-box;
  border: 1PX solid #D5D5D5;
  border-radius: 0;
  color: #707070;
  outline: none;
  box-shadow: none;
  font-size: 14PX;
}

.Contact_body2 .text .form .fake-inp span {
  position: absolute;
  right: 0;
  width: 19PX;
  height: 24PX;
  color: #e48014;
  font-size: 22PX;
  line-height: normal;
}

.Contact_body2 .text .form .second_input {
  position: relative;
  /*margin-left: .083333rem;*/
}

.Contact_body2 .text .form .big-input {
  width: 100%;
  height: 1.197917rem;
  resize: none;
  margin-top: .078125rem;
  font-family: 'Microsoft Yahei';
  padding: 0.12077rem;
  box-sizing: border-box;
  border: .005rem solid #D5D5D5;
  border-radius: 0;
  color: #707070;
  outline: none;
  font-size: 14PX;
}

/*.Contact_body2 .text .form input::-webkit-input-placeholder {*/
/*  padding-left: .083333rem;*/
/*}*/

/*input::-moz-input-placeholder {*/
/*  padding-left: .083333rem;*/
/*}*/

/*input::-ms-input-placeholder {*/
/*  padding-left: .083333rem;*/
/*}*/

.Contact_body2 .text .form button {
  display: inline-block;
  /*width: 0.635417rem;*/
  /*height: 0.286458rem;*/
  width: 100PX;
  height: 45PX;
  border: solid .005208rem #ffb15b;
  /*font-size: 0.09662rem;*/
  font-size: 14PX;
  background-color: #ffffff;
  padding: 0;
  margin-top: .09375rem;;
  color: #ffb15b;
  outline: none;
}


/* #Contact .body2 .text .form button:focus, */
.Contact_body2 .text .form button:hover {
  background-color: #ffb15b;
  color: #fff;
}

</style>
