<template>
  <div class="Aboutbody2" ref="movecard">

    <div class="pic_text" v-show="true" v-bind:key="1">
      <div class="text">
        <p class="title">{{ lang2.card1.title }}</p>
        <p v-for='(sublist ,index2) in lang2.card1.message' :key="index2">
          {{ sublist }}
        </p>
      </div>
      <!-- <div class="pic"> -->
      <img v-lazy='lang2.card1.img' :key="lang2.card1.img">
      <!-- </div> -->
    </div>

<!--    <swiper ref="swiperOptions" :options="swiperOptions">-->
<!--      <swiper-slide>-->
<!--        <div class="pic_text" v-show="true" v-bind:key="1">-->
<!--          <div class="text">-->
<!--            <p class="title">{{ lang2.card1.title }}</p>-->
<!--            <p v-for='(sublist ,index2) in lang2.card1.message' :key="index2">-->
<!--              {{ sublist }}-->
<!--            </p>-->
<!--          </div>-->
<!--          &lt;!&ndash; <div class="pic"> &ndash;&gt;-->
<!--          <img :src='lang2.card1.img'>-->
<!--          &lt;!&ndash; </div> &ndash;&gt;-->
<!--        </div>-->
<!--      </swiper-slide>-->
<!--      <swiper-slide>-->
<!--        <div class="pic_text" v-show="true" v-bind:key="2">-->
<!--          <div class="text">-->
<!--            <p class="title">{{ lang2.card2.title }}</p>-->
<!--            <p v-for='(sublist ,index2) in lang2.card2.message' :key="index2">-->
<!--              {{ sublist }}-->
<!--            </p>-->
<!--          </div>-->
<!--          &lt;!&ndash; <div class="pic"> &ndash;&gt;-->
<!--          <img :src='lang2.card2.img'>-->
<!--          &lt;!&ndash; </div> &ndash;&gt;-->
<!--        </div>-->
<!--      </swiper-slide>-->
<!--    </swiper>-->
<!--    <div class="swiper-button-prev"></div>-->
<!--    <div class="swiper-button-next"></div>-->
<!--    <div class="swiper-pagination-about-body2"></div>-->

  </div>

</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      loopshow: 0,
      swiperOptions: {
// slidesPerView : 2,
//  spaceBetween: 1000,
        pagination: {
          el: '.swiper-pagination-about-body2',
          type: 'fraction',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
    }
  },
  computed: {},
  created() {
    //加载语言包
    // this.lang=this.$t('About')
  },


  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      //  this.lang=this.$t('About')
    }
  },

  mounted() {
    //此方法用于调用页面加载时的方法：每200ms判断一次About2离屏幕的距离
    // this.timer = setInterval(this.move_card, 200);
  },

  destroyed: function () {
    //页面消失清理定时器
    clearInterval(this.timer);
  },

  methods: {
    //下面四个函数是用不到的，主要用于当About2离屏幕顶端小于200像素时切换轮播图的显示
    //已被换成Swiper组件
    switchbg(index2) {
      this.switchbgnum = index2
    },

    move_card() {
      var hight = this.$refs.movecard.getBoundingClientRect().top;
      if (hight < 200) {
        this.loopshow = 1
      } else this.loopshow = 0

    },

    chose01() {
      clearInterval(this.timer);
      this.loopshow = 0;
    },

    chose02() {
      clearInterval(this.timer);
      this.loopshow = 1
    }

  },
}
</script>


<style>


.Aboutbody2 {
  position: relative;
  margin: auto;
  margin-top: 1.083333rem;
  width: 7.32rem;
  height: auto;
  /*overflow: hidden;*/

}

.Aboutbody2 .pic_text div {
  /* float: left; */
  width: 7.32rem;
  /*height: 2.291667rem;*/
  height: auto;
  /* border: red solid 1px; */
  box-sizing: border-box;
  padding: .026042rem;
  padding-left: .078125rem;
}

.Aboutbody2 .pic_text .text {
  float: left;
  display: inline-block;
  width: 3.9rem;
  padding-right: 0.90625rem;
  line-height: .130208rem;
  /*border: 0.005rem solid red;*/
}

.Aboutbody2 .pic_text .text p {
  /*font-size: 0.083333rem;*/
  font-size: 14PX;
  margin-bottom: 0.166667rem;
  color: rgb(112, 112, 112);
  /*line-height: 180%;*/
  line-height: 22PX;
  letter-spacing: 0.005rem;
}

.Aboutbody2 .pic_text .text p:last-child{
  margin: 0;
}

.Aboutbody2 .pic_text .text .title {
  /*font-size: 0.208333rem;*/
  font-size: 30PX;
  /*margin-top: 0.15625rem;*/
  /*margin-bottom: 0.3232rem;*/
  /*padding-bottom: 0.12077rem;*/
  font-weight: 100;
  margin-bottom: 20PX;
  padding-bottom: 10PX;
  padding-right: 0.16908rem;
  display: inline-block;
  border-bottom: #febb6f solid 0.020833rem;
  box-sizing: border-box;
  color: rgb(30, 30, 30);
  line-height: normal;
}

.pic_text{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aboutbody2 .pic_text img {
  width: 3.286458rem;
  height: 2.109375rem;
  /* border: red solid 1px; */
  float: right;
  /*margin-right: 0.40rem;*/
}

.Aboutbody2 .swiper-pagination-about-body2 {
  width: fit-content;
  position: absolute;
  right: .5120833rem;
  left: auto;
  bottom: .125rem;
  padding-bottom: .08rem;
  white-space: nowrap;
  font-size: .1112rem;
}

.Aboutbody2 .swiper-pagination-about-body2 span{
  font-size: .125rem;
}

.Aboutbody2 .swiper-button-prev, .Aboutbody2 .swiper-button-next {
  position: initial;
  display: inline-block;
  width: calc(var(--swiper-navigation-size) / 44 * 10);
  height: 0.35rem;
  margin-top: calc(-1 * var(--swiper-navigation-size) / 5);
  color: #707070;
  transform: translateY(-50%);
}

.Aboutbody2 .swiper-button-prev {
  position: absolute;
  left: -.5125rem;
  background-size: contain;
}

.Aboutbody2 .swiper-button-next {
  position: absolute;
  right: -.5125rem;
  background-size: contain;
}

.Aboutbody2 .swiper-button-prev:after {
  content: '01';
  font-family: Montserrat;
  font-size: 0.21rem;
}

.Aboutbody2 .swiper-button-next:after {
  content: '02';
  font-family: Montserrat;
  font-size: 0.21rem;
}

.Aboutbody2 span {
  color: #707070;
  display: inline-block;
  margin: 0 0.07rem;
}

#About .guide {
  position: absolute;
  width: 1.2rem;
  height: 0.260417rem;
  border-bottom: #d5d5d5 solid 0.010417rem;
  text-align: right;
  top: 2.661458rem;
  right: .520833rem;
  font-size: 0.208333rem;
  color: #d5d5d5;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: baseline;
  display: none;
}

.spanActive {
  color: #707070;
}


#About .body3 {
  width: 7.15rem;
  height: 4.296875rem;
  position: relative;
  margin: auto;
  background-color: #1e1e1e;
  margin-top: 0.447917rem;
  overflow: hidden;
}

#About .body3 .bgimg {
  width: 7.15rem;
  height: 4.296875rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 8;
  /* border: red solid .005208rem;; */
}

#About .body3 .content {
  position: absolute;
  top: 0rem;
  /* left: 0.099rem; */
  z-index: 9;
  /* border: red solid .005208rem; */
}

#About .body3 .card {
  float: left;
  width: 1.770833rem;
  height: 4.296875rem;
  border-right: solid .005208rem #707070;
  box-shadow: .067708rem 0.052083rem 0.114583rem 0px rgba(0, 0, 0, 0.11);
  color: #ffffff;
}

#About .body3 .card:last-child {
  border-right: none
}

#About .body3 .card .item {
  width: .854167rem;
  margin: auto;
  margin-top: 1.625rem;
  text-align: center;
  color: #ffffff;
}

#About .body3 .card .item .active {
  text-decoration: none;
  color: orange;
}

#About .body3 .card .item .active2 {
  text-decoration: none;
  color: white;
}


#About .body3 .card:nth-last-child(1) div {
  margin-top: 1.5rem;
}

#About .body3 .card:nth-child(1) div img {
  width: 0.484375rem;
  height: 0.536458rem;
}

#About .body3 .card:nth-child(2) div img {
  width: 0.5rem;
  height: 0.536458rem;
}

#About .body3 .card:nth-child(3) div img {
  width: 0.854167rem;;
  height: 0.546875rem;;
}

#About .body3 .card:nth-child(4) div img {
  width: 0.442708rem;
  height: 0.666667rem;
}

#About .body3 .card div h1 {
  font-size: 0.104167rem;
  margin-top: 0.234375rem;
}

#About .body3 .card div:hover {
  color: orange;
  cursor: pointer;
}


#About .body4 {
  height: 5.916667rem;
  margin-top: 1.208333rem;
  background-color: #f8f8f8;
}

#About .body4 h1 {
  display: block;
  font-weight: normal;
  font-family: Montserrat;
  padding-top: 0.416667rem;
  margin-left: 1.411458rem;
  font-size: 0.208333rem;
  width: 0.619792rem;
  height: 0.260417rem;
  border-bottom: #febb6f solid 0.020833rem;
}

#About .body4 img {
  display: block;
  margin-left: 1.265625rem;
  margin-top: 0.333333rem;
  width: 7.598958rem;
  height: 4.333333rem;
}

#About .body5 {
  position: relative;;
  height: 4.135417rem;
  width: 8.5rem;
  margin: auto;
  /* border: blue solid .005208rem;; */
}

#About .body5 .title {
  position: absolute;
  text-align: center;
  top: .682292rem;
  left: 0.55rem;
  display: block;
  font-size: 0.208333rem;
  width: 1.2rem;
  height: 0.26rem;
  border-bottom: #febb6f solid 0.020833rem;
}

#About .body5 .card {
  float: left;
  width: 1.953125rem;
  height: 4.135417rem;
  /* border: green solid .005208rem;; */
  background-color: white;
}

#About .body5 .card {
  margin-left: 0.18rem;
}

#About .body5 .card:nth-child(1) {
  margin-left: 0.104167rem;
}

#About .body5 .card {
  float: left;
  width: 1.953125rem;
  height: 4.135417rem;
  /* border: green solid .005208rem;; */
  background-color: white;
}

#About .body5 .card div {
  width: 1.515625rem;
  margin: auto;
  margin-top: 1.880208rem;
  text-align: center;
}

#About .body5 .card div h1 {
  font-size: 0.3125rem;
  color: #ffb15b;
}

#About .body5 .card div p {
  font-size: 0.104167rem;
  margin-top: 0.119792rem;
  color: #707070;
}

#About .body6 {
  position: relative;
  height: 3.161458rem;
}

#About .body6 img {
  width: 10rem;
  height: 3.161458rem;
}


#About .body6 h1 {
  position: absolute;
  text-align: center;
  top: 1.453125rem;
  left: 4.416667rem;
  display: block;
  font-size: 0.208333rem;
  color: #ffffff;
  width: 0.666667rem;
  height: 0.26rem;
  padding-bottom: 0.078125rem;
  border-bottom: #e48013 solid 0.020833rem;
}

.v-enter, .v-leave-to {
  opacity: 0;
  /*transform: translateX(0px);*/
}

.v-enter-active, .v-leave-active {
  /*opacity: 1;*/
  /*transform: translateX(0px);*/
  transition: all 1s ease;
}


</style>