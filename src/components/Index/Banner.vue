<template>
  <div id="indexbanner">
    <swiper class="pc-banner" ref="swiperOptions" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in lang" :key="index">
        <div class="banner-box">
          <img v-lazy="item.imgurl" :key="item.imgurl">
          <div class="text">
            <span>{{ item.text }}</span><span class="part2">{{ item.hightlight }}</span>
            <router-link :to='item.url' class="more">{{ item.more }}</router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <swiper class="ph-banner" ref="swiperOptionsPH" :options="swiperOptionsPH">
      <swiper-slide v-for="(item,index) in langPH" :key="index">
        <div class="banner-box">
          <img v-lazy="item.imgurl" :key="item.imgurl">
          <div class="text">
            <span>{{ item.text }}</span><span class="part2">{{ item.hightlight }}</span>
            <router-link :to='item.url' class="more">{{ item.more }}</router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-paginationPH" slot="pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  props: {
    lang: {},
    langPH: {}
  },
  name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        observer: true,
        pagination: {
          el: '.swiper-pagination',
          Type: 'fraction',
          clickable: true,
        },
        speed: 1000,
        // autoplay: {
        //   //隔2000ms切换一次
        //   delay: 3500,
        //   autoplay: true,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionsPH: {
        pagination: {
          observer: true,
          el: '.swiper-paginationPH',
          Type: 'fraction',
          clickable: true,
        },
        speed: 1000,
        // autoplay: {
        //   //隔2000ms切换一次
        //   delay: 3000,
        //   autoplay: true,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      },
    }
  },

  watch: {
    // //监听语言变化
    // '$store.state.lang':function() {
    //     this.guidebanner=this.$t('index').banner
    //   }
  },

  computed: {},

  created() {
    // this.guidebanner=this.$t('index').banner
  },
  methods: {},
  mounted() {
  }
}
</script>


<style>
#indexbanner {
  position: relative;
  height: 5rem;
  z-index: 0;
}

#indexbanner .swiper-slide img {
  width: 10rem;
  height: 4.682292rem;
}

#indexbanner .swiper-button-next, #indexbanner .swiper-button-prev {
  margin: 0px;
  position: absolute;
  top: 2.15625rem;
  left: 0.729167rem;
  width: 0.291667rem;
  height: 0.291667rem;
  border: none;
  background: url(../../assets/img/PC/Commen/Left_Switch.png) no-repeat center;
  background-size: 0.291667rem 0.291667rem;
}

#indexbanner .swiper-button-next {
  background: url(../../assets/img/PC/Commen/Right_Switch.png) no-repeat center;
  background-size: 0.291667rem 0.291667rem;
  left: 9.03125rem;
}

#indexbanner .swiper-button-next::after, #indexbanner .swiper-button-prev::after {
  display: none;
}

#indexbanner .swiper-button-next:focus, #indexbanner .swiper-button-prev:focus {
  outline: none;
  border: 0px;
}

#indexbanner .swiper-pagination-bullet:focus {
  outline: none;
  border: 0px;
}

#indexbanner .swiper-pagination {
  position: absolute;
  /*top: 4.114583rem;*/
  bottom: 0;
  left: 8.989583rem;
}

#indexbanner .swiper-pagination-bullet {
  display: block;
  padding-top: 0.15625rem;
  width: 0.078125rem;
  height: 0.078125rem;
  background: url(../../assets/img/PC/Commen/Unactive.png) no-repeat center;
  background-size: 0.078125rem, 0.078125rem;
}

#indexbanner .swiper-pagination-bullet-active {
  background: url(../../assets/img/PC/Commen/active.png) no-repeat center;
  background-size: 0.078125rem, 0.078125rem;
}

#indexbanner .swiper-slide .text {
  position: absolute;
  /*height: 2.083333rem;*/
  text-align: left;
  top: 50%;
  transform: translateY(-50%);
  left: 4.166667rem;
  padding: 0;
  padding-right: 10%;
}

#indexbanner .swiper-slide:nth-child(2) .text,
#indexbanner .swiper-slide:nth-child(3) .text {
  left: 4.766667rem;
}

#indexbanner .swiper-slide .text span {
  font-family: Montserrat;
  font-size: 22PX;
  color: #1e1e1e;
}

#indexbanner .swiper-slide .text .part2 {
  color: #e48013;
  margin-left: 15PX;
}

#indexbanner .swiper-slide .text .more {
  cursor: pointer;
  display: block;
  width: 70PX;
  height: 30PX;
  text-align: center;
  background-color: #ffb15b;
  margin-top: 0.260417rem;
  border-radius: .260417rem;
  font-family: Montserrat;
  font-size: 16PX;
  line-height: 28PX;
  color: #ffffff;
}

.ph-banner {
  display: none;
}

.swiper-paginationPH {
  display: none;
}

#indexbanner .swiper-slide:first-child .text {
  /*width: 40%;*/
  height: auto;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: .125rem;
}

#indexbanner .swiper-slide:first-child .text .more{
  margin: 0;
}

@media (max-width: 1024px) {
  #indexbanner .swiper-slide .text span{
    font-size: 20PX;
  }
  #indexbanner .swiper-slide .text .more {
    width: 60PX;
    height: 28PX;
    font-size: 14PX;
    line-height: 28PX;
  }
}

@media (max-width: 768px) {
  #indexbanner .swiper-slide .text .part2{
    display: block;
    margin: 0;
    margin-top: 10PX;
  }
}

@media (max-width: 576px) {
  #indexbanner .swiper-slide:first-child .text {
    width: auto;
    display: block;
    position: absolute;
    height: 2.083333rem;
    text-align: left;
    top: 18%;
    left: auto;
    padding: 0 10%;
    transform: translateY(-50%);
  }
}

</style>