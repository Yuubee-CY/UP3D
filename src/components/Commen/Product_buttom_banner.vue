<template>
  <div class="Product_buttom_banner">
    <h1>{{ lang2.title }}</h1>
    <swiper ref="PBBSwiper" :options="PBBSwiper" class="pbb-PC">
      <swiper-slide>
        <div class="card">
          <div class="content">
            <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic13.png')"/>
            <a href="https://mp.weixin.qq.com/s/17TK1rs_1Dbsu9-ZthCtcA">{{ lang2.card[0].content1 }}</a>
          </div>
          <div class="content">
            <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic14.png')"/>
            <a href="https://mp.weixin.qq.com/s/SjHLMnsIqcxPoUIUYC1ifA">{{ lang2.card[0].content2 }}</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <div class="content">
            <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic13.png')"/>
            <a href="https://mp.weixin.qq.com/s/17TK1rs_1Dbsu9-ZthCtcA">{{ lang2.card[1].content1 }}</a>
          </div>
          <div class="content">
            <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic14.png')"/>
            <a href="https://mp.weixin.qq.com/s/SjHLMnsIqcxPoUIUYC1ifA">{{ lang2.card[1].content2 }}</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper ref="PBBSwiper" :options="PBBSwiper" class="pbb-PH">
      <swiper-slide>
        <div class="card">
          <div class="content">
            <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic13.png')"/>
            <a href="https://mp.weixin.qq.com/s/17TK1rs_1Dbsu9-ZthCtcA">{{ lang2.card[0].content1 }}</a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card">
          <div class="content">
            <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic14.png')"/>
            <a href="https://mp.weixin.qq.com/s/SjHLMnsIqcxPoUIUYC1ifA">{{ lang2.card[0].content2 }}</a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card">
          <div class="content">
            <img :src="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic13.png')"/>
            <a href="https://mp.weixin.qq.com/s/17TK1rs_1Dbsu9-ZthCtcA">{{ lang2.card[1].content1 }}</a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="card">
          <div class="content">
            <img :src="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic14.png')"/>
            <a href="https://mp.weixin.qq.com/s/SjHLMnsIqcxPoUIUYC1ifA">{{ lang2.card[1].content2 }}</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next swiper-button-next-pbb"></div>
    <div class="swiper-button-prev swiper-button-prev-pbb"></div>

  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      lang: {},
      PBBSwiper: {
           pagination:{
           el:'.swiper-pagination',
           type : 'progressbar',
        },//这样写小圆点就有了
        // loop: true,
        speed: 1000,
        // autoplay: {
        //   //隔2000ms切换一次
        //   delay: 4000,
        //   autoplay: true,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next-pbb",
          prevEl: ".swiper-button-prev-pbb",
        },
      },
    };
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
    this.lang = this.en;
  },
  mounted() {
  },
  methods: {},
};
</script>


<style scoped>
.Product_buttom_banner {
  position: relative;
  width: 10rem;
  /*height: 4.942708rem;*/
  height: auto;
  background-color: #f8f8f8;
  padding-bottom: 0.713542rem;
}

.Product_buttom_banner h1 {
  width: 6.25rem;
  text-align: center;
  margin: auto;
  padding-top: 0.598958rem;
  margin-bottom: 0.713542rem;
  /*font-size: 0.28125rem;*/
  /*line-height: 0.333333rem;*/
  font-size: 44PX;
  font-weight: 100;
  color: #343434;
}

.Product_buttom_banner .card {
  width: max-content;
  height: auto;
  margin: auto;
  overflow: hidden;
  /* border: red solid .005208rem; */
}

.Product_buttom_banner .card div {
  float: left;
}

.Product_buttom_banner .card img {
  width: 3.875rem;
  height: 2.286458rem;
}

.Product_buttom_banner .card .el-icon-arrow-left,
.Product_buttom_banner .card .el-icon-arrow-right {
  line-height: 2.286458rem;
  font-size: 0.291667rem;
  color: #707070;
}

.Product_buttom_banner .card .content a {
  cursor: pointer;
  /*font-size: 0.104167rem;*/
  font-size: 16PX;
  /*line-height: 0.125rem;*/
  text-align: center;
  width: max-content;
  margin: auto;
  color: #343434;
  margin-top: 0.208333rem;
  /*padding-bottom: 0.052083rem;*/
  display: block;
  border-bottom: #707070 solid 0.005208rem;
}

.Product_buttom_banner .card .content a:hover {
  color: #e48013;
  border-bottom: #e48013 solid 1PX;
}

.Product_buttom_banner .swiper-swiper-wrapper {
  width: 8rem;
  height: 4.6875rem;
  border: red solid 0.005208rem;
}

.Product_buttom_banner .swiper-container{
  width: 80%;
}

  /* 控制箭头样式 */
.Product_buttom_banner .swiper-button-prev-pbb:after,
.Product_buttom_banner .swiper-button-next-pbb::after {
  font-size: 0.291667rem;
  color: black;
}

/* 清除点击样式 */
.Product_buttom_banner .swiper-button-next-pbb:focus,
.Product_buttom_banner .swiper-button-prev-pbb:focus {
  outline: none;
  border: 0px;
}

.pbb-PH {
  display: none;
}

.Product_buttom_banner .swiper-button-prev-pbb,
.Product_buttom_banner .swiper-button-next-pbb {
  position: absolute;
  left: .46875rem;
  background-size: contain ;
  width: calc(var(--swiper-navigation-size) / 36 * 10);
  height: .45rem;
  top: 65%;
  color: #D5D5D5;
}

.Product_buttom_banner .swiper-button-prev-pbb{
  left: .5125rem;
}
.Product_buttom_banner .swiper-button-next-pbb{
  left: auto;
  right: .5125rem;
}

.Product_buttom_banner .swiper-button-prev-pbb{
  background: url("../../assets/img/PC/Commen/prev_icon.png") no-repeat ;
  /*background-position: 0 0.17rem ;*/
  background-size: contain ;
}

.Product_buttom_banner .swiper-button-next-pbb{
  background: url("../../assets/img/PC/Commen/next_icon.png") no-repeat ;
  /*background-position: 0 0.17rem ;*/
  background-size: contain ;
}

@media (max-width: 1024px) {
  .Product_buttom_banner h1 {
    font-size: 36PX;
  }
}

@media (max-width: 768px) {
  .Product_buttom_banner h1 {
    font-size: 34PX;
  }
}

@media (max-width: 576px) {

  .pbb-PC {
    display: none;
  }

  .pbb-PH {
    display: block;
  }

  .Product_buttom_banner {
    padding-top: 1rem;
    background: none;
  }

  .Product_buttom_banner h1 {
    /*font-size: .6125rem;*/
    font-size: 32PX;
    line-height: normal;
    margin: 0 auto;
    padding: 0;
    font-weight: 100;
  }

  .Product_buttom_banner .card {
    height: auto;
    margin-top: .8333rem;
  }

  .Product_buttom_banner .card img{
    width: 6.8333rem;
    height: auto;
  }
  .Product_buttom_banner .card .content a{
    /*font-size: .3125rem;*/
    font-size: 14PX;
    margin-top: .5rem;
  }

  .Product_buttom_banner .swiper-button-prev-pbb,
  .Product_buttom_banner .swiper-button-next-pbb {
    width: calc(var(--swiper-navigation-size) / 50 * 31);
    height: .75rem;
    top: 80%;
  }


  .Product_buttom_banner .swiper-button-prev-pbb{
    top: 60%;
    left: .42875rem;
  }
  .Product_buttom_banner .swiper-button-next-pbb{
    top: 60%;
    left: auto;
    right: .42875rem;
  }
}

@media (max-width: 375px) {
  .Product_buttom_banner h1 {
    font-size: 30PX;
  }
}

</style>