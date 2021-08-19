<template>
  <div id="MainProduct">
    <ProductBanner :lang2="lang.MainProduct.banner"></ProductBanner>
    <ProductBody1 id='Dental_Scanner' :lang2="lang.MainProduct.body1"></ProductBody1>
    <ProductBody2 id='UPCAD' :lang2="lang.MainProduct.body2"></ProductBody2>
    <ProductBody3 id='UPCAM' :lang2="lang.MainProduct.body3"></ProductBody3>
    <ProductBody4 id='Milling_Machine' :lang2="lang.MainProduct.body4"></ProductBody4>
  </div>
</template>

<script>
import ProductBanner from "@/components/Product/Product_Banner.vue"
import ProductBody1 from "@/components/Product/Product_Body1.vue"
import ProductBody2 from "@/components/Product/Product_Body2.vue"
import ProductBody3 from "@/components/Product/Product_Body3.vue"
import ProductBody4 from "@/components/Product/Product_Body4.vue"
import $ from 'jquery'


export default {

  props: {
    lang: {},
  },

  components: {
    ProductBanner,
    ProductBody1,
    ProductBody2,
    ProductBody3,
    ProductBody4
  },

  data() {
    return {}
  },

  computed: {
    //   swiper() {
    //   // return this.$refs.mySwiper.$swiper
    // }
  },
  created() {
    this.langc = this.en;
  },

  watch: {
    '$store.state.product_posistion': function () {
      try{
        document.getElementById(this.$store.state.product_posistion).scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
        });
      }catch (e){
      }
    }
  },

  mounted() {

    if (this.$store.state.product_posistion != null) {
      try{
        document.getElementById(this.$store.state.product_posistion).scrollIntoView({
          behavior: "smooth",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
        });
      }catch (e) {

      }
    }

    setTimeout(()=>{
      $('.Product_body1 .bigcard .b button').each((index, doc) => {
        if(doc.innerHTML == ""){
          console.log(doc);
          doc.style.display = 'none'
        }
      })
    },1)
    $('.Product_body1 .bigcard .b button').each((index, doc) => {
      if(doc.innerHTML == ""){
        console.log(doc);
        doc.style.display = 'none'
      }
    })
  },

  methods: {
    getlocal() {
      // //找到锚点id
      // let selectId = localStorage.getItem("toId");
      // let toElement = document.getElementById(selectId);
      // //如果对应id存在，就跳转
      // if(selectId){
      //     toElement.scrollIntoView()
      // }
// document.querySelector('city_top').scrollIntoView(true)
      //   var city_top = $('#city_top').offset().top;
      //  window.animate({scrollTop:city_top},500);
    }
  }
}
</script>


<style>
#MainProduct {
  /* position:relative; */
  font-family: Montserrat;
  width: 10rem;
  overflow: hidden;
  background-color: #f2f2f2;
  z-index: 0;
}

#MainProduct .banner {
  width: 10rem;
  height: 5rem;
  margin-bottom: .520833rem;
}

#MainProduct .banner img {
  width: 10rem;
  height: 5rem;
}

#MainProduct .body1 .header {
  width: .78125rem;
  height: .78125rem;
  overflow: hidden;
  border-width: 0.010417rem;
  margin: auto;
  margin-bottom: 0.104167rem;
}

#MainProduct .body1 .bgpic0 {
  background-image: url(../assets/img/PC/Commen/dental_teelth.png);
  background-repeat: no-repeat;
  background-size: 5.453125rem, 0.6875rem;
  background-position: 0.052083rem, -0.052083rem;
}

#MainProduct .body1 .bgpic1 {
  background-image: url(../assets/img/PC/Commen/dental_teelth.png);
  background-repeat: no-repeat;
  background-size: 5.453125rem, 0.6875rem;
  background-position: -1.5625rem, -0.052083rem;
}

#MainProduct .body1 .bgpic2 {
  background-image: url(../assets/img/PC/Commen/dental_teelth.png);
  background-repeat: no-repeat;
  background-size: 5.453125rem, 0.6875rem;
  background-position: -3.151042rem, -0.052083rem;
}

#MainProduct .body1 .bgpic3 {
  background-image: url(../assets/img/PC/Commen/dental_teelth.png);
  background-repeat: no-repeat;
  background-size: 5.453125rem, 0.6875rem;
  background-position: -4.739583rem, -0.052083rem;
}

#MainProduct .body1 .title {
  font-family: Montserrat;
  width: 1.5625rem;
  font-size: 0.3125rem;
  line-height: 0.375rem;
  text-align: center;
  color: #1e1e1e;
  border-bottom-width: 0.010417rem;
  border-bottom: #d5d5d5 solid;
  padding-bottom: 0.036458rem;
  margin: auto;
  margin-bottom: .890625rem;
}


#MainProduct .body1 .bigcard {
  position: relative;;
  width: 9.166667rem;
  height: 3.125rem;
  /* overflow: hidden; */
  margin: auto;
  /* border: #f2f2f2 solid .005208rem; */
  margin-bottom: 1.5625rem;
}

#MainProduct .body1 .wbg {
  background-color: #ffffff;
}


#MainProduct .body1 .bigcard h1 {
  width: 4.5rem;
  font-size: 0.208333rem;
  font-weight: normal;
  line-height: 0.25rem;
  padding-top: 0.630208rem;
  margin-left: 1.114583rem;
  color: #1e1e1e;
  /* border: red solid .005208rem; */
}

#MainProduct .body1 .bigcard .smallcard h1 {
  padding-top: 0.3125rem;
  margin-left: 0.338542rem;
}


#MainProduct .body1 .bigcard .smallcard .info {
  width: 100%;
  font-size: .083333rem;
  line-height: 0.208333rem;
  margin-top: 0.229167rem;
  margin-left: 0.338542rem;
  color: #959595;
}

#MainProduct .body1 .bigcard .smallcard .hightlight {
  font-size: .083333rem;
  line-height: 0.458333rem;
  margin-left: 0.338542rem;
  color: #959595;
}

#MainProduct .body1 .bigcard .smallcard {
  position: relative;
  float: left;
  width: 4.541667rem;
  height: 2.671875rem;
  background-color: #ffffff;
}

#MainProduct .body1 .bigcard .smallcard:nth-child(2) {
  margin-left: .08rem;
}

#MainProduct .body1 .bigcard .bottom {
  width: 4.5rem;
  margin-top: 0.802083rem;
  margin-left: 1.114583rem;
}

#MainProduct .body1 .bigcard .b button {
  width: 0.666667rem;
  height: 0.244792rem;
  background-color: rgb(30, 30, 30);
  cursor: pointer;
  border-width: 0.005208rem;
  border-style: solid;
  border-color: black;
  /* border-image: initial; */
  border-radius: 0.125rem;
  cursor: pointer;
  font-size: .0625rem;
  color: #f8f8f8;
  /* margin-top: 0.802083rem;
  margin-left: 1.114583rem;  */
}

#MainProduct .body1 .bigcard button:focus {
  outline: none;
}

#MainProduct .body1 .bigcard .b:nth-child(2) button {
  background-color: #ffffff;
  margin-left: .088542rem;
  color: #1e1e1e;
}

#MainProduct .body1 .bigcard .smallcard .bottom {
  width: 4.5rem;
  margin-top: 0.46875rem;
  margin-left: 0.338542rem;
}

#MainProduct .body1 .bigcard button .more {
  font-size: .0625rem;
  color: #f8f8f8;
}


#MainProduct .body1 .bigcard img {
  position: absolute;
  width: 6.057292rem;
  height: 4.34375rem;
  top: 0;
  left: 4rem;
  /* border: red solid .005208rem; */
}


#MainProduct .body1 .bigcard .smallcard img {
  position: absolute;
  top: 0.3125rem;
  left: 2.291667rem;
  width: 2.505208rem;
  height: 4.416667rem;
}

#MainProduct .body1 .bigcard .smallcard .p {
  position: absolute;
  top: .84375rem;
  left: 1.5625rem;
  width: 3.71875rem;
  height: 3.223958rem;
}

.Product_body1{
  padding-top: .6125rem;
}

@media (max-width: 768px) {

  /*#Milling_Machine .bigcard .smallcard .bottom{*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*}*/
  /*#Milling_Machine .bigcard .smallcard button{*/
  /*  margin: 0;*/
  /*}*/
}

@media (max-width: 576px) {
  .Product_body1 {
    padding-top: 1rem;
  }

  .Product_body1 .bigcard {
    width: 9rem;
    height: auto;
    margin: auto;
    margin-bottom: .3125rem;
  }

  .Product_body1 .header {
    width: 1.78125rem;
    height: 1.78125rem;
    margin-bottom: 0.24167rem;
    background-size: 14rem;
    background-position: 0;
  }

  .Product_body1 .title {
    padding-bottom: 0.16458rem;
  }

  .bigcard > .smallcard {
    display: none;
  }

  .bigcard > .swiper-container {
    display: block;
    height: 100%;
  }

  .bigcard > .swiper-container .smallcard {
    height: 11.5rem;
    padding: .5rem;
    box-sizing: border-box;
  }
  .Product_body1 .bigcard h1 {
    width: 4.5rem;
    /*font-size: .520833rem;*/
    font-size: 36PX;
    font-weight: normal;
    line-height: normal;
    padding-top: 0.630208rem;
    margin-left: 0;
    margin-bottom: .8333rem;
  }
  .Product_body1 .bigcard .smallcard h1{
    margin-left: 0;
  }

  .Product_body1 .bigcard p{
    font-size: .298rem;
    margin-bottom: .16rem;
    margin-left: 0;
    line-height: normal;
    font-weight: 100;
    color: #959595;
    width: auto;
  }

  .Product_body1 .bigcard .smallcard .info{
    /*font-size: .298rem;*/
    font-size: 16PX;
    margin-bottom: .16rem;
    margin-left: 0;
    line-height: normal;
    font-weight: 100;
  }
  .Product_body1 .bigcard .smallcard .hightlight{
    margin-left: 0;
  }
  .Product_body1 .bigcard .smallcard img{
    width: 6.057292rem;
    height: auto;
    left: 50%;
    transform: translate(-50%);
    top: 27%;
  }

  #Milling_Machine .bigcard .smallcard .bottom {
    display: flex;
    flex-direction: row;
  }

  .Product_body1 .bigcard .smallcard .bottom{
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: .5125rem;
    left: 50%;
    transform: translate(-50%);
    width: 45%;
    margin: 0;
    box-sizing: border-box;
  }
  .Product_body1 .bigcard .b button{
    /*width: auto;*/
    /*height: .6125rem;*/
    padding: .125rem .225rem;
    /*border-radius: .7125rem;*/
    white-space: nowrap;
    background-color: rgba(255, 255, 255, .4);
  }

  .Product_body1 .swiper-pagination{
    display: block;
  }
  .Product_body1 .swiper-button-next{
    background-image: url("../assets/img/PC/Commen/next_icon.png");
    display: block;
    color: #707070;
  }
  .Product_body1 .swiper-container-horizontal > .swiper-pagination-progressbar,
  .Product_body1 .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{
    top: auto;
    bottom: 0;
    height: .03125rem;
  }
  .Product_body1 .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{
    background-color: #FEBB6F;
  }
  .Product_body1 .wbg {
    width: 9rem;
    font-size: .298rem;
    /*margin: auto;*/
    line-height: normal;
    color: #959595;
    padding: .5rem;
    box-sizing: border-box;
  }
  .Product_body1 .bigcard img{
    width: 100%;
    height: auto;
    position: relative;
    left: 0;
  }
  .Product_body1 .bigcard .bottom{
    width: 45%;
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin: 0;
  }
  .Product_body1 .bigcard .smallcard .p {
    position: absolute;
    top: 14%;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    height: auto;
  }

  #UPCAD img{
    width: 137%;
    left: -15.5%;
  }

  #UPCAD .bottom{
    justify-content: center;
  }

  #UPCAM img{
    width: 141%;
    left: -17%;
  }

  #UPCAM .bottom{
    justify-content: center;
  }

}

</style>