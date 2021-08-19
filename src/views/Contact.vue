<template>
  <div id="Contact">
    <Contactbody1 :lang2="lang.Contact.body1"></Contactbody1>
    <Contactbody2 :lang2="lang.Contact.body2"></Contactbody2>
    <Contactbody3 :lang2="lang.Contact.body3"></Contactbody3>
  </div>
</template>

<script>
import Contactbody1 from "@/components/SecondPage/Contact/Contact_body1.vue";
import Contactbody2 from "@/components/SecondPage/Contact/Contact_body2.vue";
import Contactbody3 from "@/components/SecondPage/Contact/Contact_body3.vue";

export default {
  props: {
    lang: {},
  },
  components: {
    Contactbody1,
    Contactbody2,
    Contactbody3,
  },
  name: 'carrousel',
  data() {

    return {

      langc: {},
      en:
          [
            {text: 'Hi', text1: 'Nice to contact you'},
          ],

    }
  },
  computed: {},
  created() {
    this.langc = this.en;
  },
  mounted() {
    if (this.$route.params.PContact) {
      document.querySelector(".Contact_body2").scrollIntoView(true)
      try {
        document.documentElement.scrollTop -= document.querySelector(".bg_color").clientHeight
      }catch (e) {
      }
      // document.documentElement.scrollTop = document.querySelector(".Contact_body2").offsetTop
      // console.log(document.querySelector(".Contact_body2").offsetTop);
    }
  },
  methods: {
    submit() {
      alert('提交')
    },
  },
}
</script>


<style>

@media (max-width: 1056px) {
  .Contact_body2 .text .list .QR-code:before{
    top: -5.7%;
  }
}

@media (max-width: 1024px) {
  .Contact_body2 .text .list .QR-code:before{
    top: -5.5%;
  }
}

@media (max-width: 768px) {

  .contact_body1 {
    width: 10rem;
    height: 10rem;
    background-size: cover;
    background-position: center;
  }

  .contact_body1 .text {
    position: relative;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -40%);
    text-align: center;
    padding-top: 0;
    width: fit-content;
  }

  .contact_body1 .text p {
    /*font-size: 1rem;*/
    font-size: 43PX;
  }

  .contact_body1 .text p:nth-child(2) {
    font-size: 20PX;
    padding-bottom: .125rem;
    border-bottom: 2PX solid #FEBB6F;
  }

  .Contact_body2 .text .list .QR-code {
    width: 1.3rem;
    height: 1.3rem;
    overflow: hidden;
    padding: 0;
    /*position: absolute;*/
    /*top: .8333rem;*/
  }

  .Contact_body2 .text .list .QR-code .promote-left {
    width: 1.25rem;
    height: 1.25rem;
  }

  .Contact_body2 .text .list .QR-code:before {
    display: none;
  }

  .Contact_body2 .text .list .QR-code .promote-right {
    display: none;
  }
  .Contact_body2 .text .list{
    /*height: 0.58333rem;*/
    height: auto;
  }

  .Contact_body2 .text p{
    margin-bottom: .5125rem;
  }
  .Contact_body2 .text .form input{
    width: 100%;
    height: 30PX;
  }
  .Contact_body2 .text .form button{
    width: 80PX;
    height: 35PX;
  }
}

@media (max-width: 576px) {


  .Contact_body2 {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .Contact_body2 div {
    float: none;
    width: 100%;
  }

  .Contact_body2 .text {
    width: 100%;
    height: auto;
    position: relative;
    padding-top: 1.520833rem;
    margin-bottom: 1.520833rem;
  }

  .Contact_body2 .text:last-child{
    margin-top: .5125rem;
  }

  .Contact_body2 .text .title {
    width: auto;
    position: absolute;
    top: -10PX;
    left: 50%;
    transform: translate(-50%);
    border-bottom: #febb6f solid 1.5PX;
    z-index: 1;
    line-height: normal;
  }

  .Contact_body2 .text:first-child .list {
    margin-top: 1rem;
  }

  .Contact_body2 .text p {
    width: auto;
    margin-bottom: 1.8333rem;
  }

  .Contact_body2 .oneline {
    font-size: 14PX;
    box-sizing: border-box;
    width: 100%;
  }

  .Contact_body2 .text .list div .oneline span:nth-child(2) {
    /*line-height: .7333rem;*/
    line-height: normal;
    width: 80%;
    display: inline-block;
  }

  .Contact_body2 .text .list .el-icon {
    /*width: .7333rem;*/
    /*height: .7333rem;*/
    width: 40PX;
    height: 40PX;
    margin: 0;
  }

  .Contact_body2 .text .list div:nth-child(1) {
    height: .7333rem;
    width: 100%;
  }

  .Contact_body2 .text .part2 {
    width: 100%;
  }

  .Contact_body2 .text .list .QR-code {
    width: 1.58rem;
    height: 1.58rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: .8333rem;
  }

  .Contact_body2 .text .list .QR-code .promote-left {
    width: 1.55rem;
    height: 1.55rem;
  }

  .Contact_body2 .text .form {
    width: 100%;
    height: auto;
    position: relative;
    text-align: center;
  }

  .Contact_body2 .text .form input {
    width: 100%;
    height: .733rem;
  }

  .Contact_body2 .text .form .inp-tx {
    margin-top: .2125rem;
  }

  .Contact_body2 .text .form .inp-tx:last-child {
    width: 100%;
    height: 4rem;
  }

  .Contact_body2 .text .form .big-input {
    height: 4rem
  }

  .Contact_body2 .text .form button {
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 50%;*/
    /*transform: translate(-50%);*/
    width: 100PX;
    height: 45PX;
    margin-top: 25PX;
  }
  .Contact_body3{
    width: 100%;
    height: 7rem;
    margin: 0;
    padding: 0;
  }
  .Contact_body3 img{
    height: 100%;
    width: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .Contact_body3 p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.5125rem;
    height: auto;
    line-height: normal;
    padding-bottom: .125rem;
  }
  .Contact_body3 p::after{
    border-bottom: .05rem solid #FEBB6F;
  }
}

@media (max-width: 425px) {
  .Contact_body2 .text .list .QR-code {
    width: 1.9rem;
    height: 1.9rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: .8333rem;
  }

  .Contact_body2 .text .list .QR-code .promote-left {
    width: 1.85rem;
    height: 1.85rem;
  }

  .Contact_body2 .text .form input {
    width: 100%;
    height: .8333rem;
  }

  .Contact_body2 .text .form .fake-inp::after {
    top: 0.3493rem;
  }
}

</style>