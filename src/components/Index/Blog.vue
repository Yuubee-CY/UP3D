<template>
  <div id="blog">
    <div class="bolg-card">
      <swiper ref="BolgSwiper" :options="BlogswiperOptions">
        <swiper-slide v-for="(item,index) in lang.blog_Card" :key="index">
          <div class="bolg-card-info">
            <img v-lazy="item.imgUrl" :key="item.imgUrl">
            <div class='text'>
              <div class="small-title">{{ item.bigTitle }}</div>
              <h1>{{ item.title }}</h1>
              <div class="text-info">
                <p>{{ item.p }}</p>
                <p>{{ item.p2 }}</p>
              </div>
              <!--               <router-link :to='item.url'  class="more">{{item.more}}</router-link>-->
              <!--              :href='item.url'-->
              <a @click="golocation($event,index)" class="more"
                 :target="item.LinkTarget ? item.LinkTarget : ''">{{ item.more }}</a>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
      <div class="blog-swiper-pagination" slot="pagination"></div>
      <div class="big-title">BLOG</div>
    </div>
    <div class="small-title-PH">{{ lang.title }}</div>
  </div>

</template>

<script>
export default {
  props: {
    lang: {},
  },
  // name: 'carrousel',
  data() {
    return {
      BlogswiperOptions: {
        pagination: {
          el: '.blog-swiper-pagination',
          type: 'bullets',
          clickable: true,
        },//这样写小圆点就有了
        loop: false,
        fade: {
          crossFade: true,
        },
        effect: 'fade',
        speed: 1000,
        // autoplay: {
        //   //隔3000ms切换一次
        //   delay: 3000,
        //   autoplay: true,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
      },
      langc: {},
      indexblog: {},
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  methods: {
    golocation(e, index) {
      if (e.target.target.toString() == '_blank') {
        window.open(this.lang.blog_Card[index].url, "_blank");
      } else {
        if (this.lang.blog_Card[index].url) {
          this.$router.push({path: this.lang.blog_Card[index].url})
        }
      }
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  }
}
</script>


<style>
#blog {
  position: relative;
  font-family: Montserrat;
  height: auto;
  /* height: 2.34375rem; */
  /* border: blue solid 0.005208rem; */
}

#blog .bolg-card {
  width: 8.177083rem;
  /*height: 3.65208rem;*/
  height: auto;
  padding: .6125rem 0;
  background-color: #ffffff;
  box-shadow: 0px 1px 23px 0px rgba(0, 0, 0, 0.16);
  text-align: right;
  display: flex;
  position: relative;
}

#blog .swiper-container {
  width: 6.25rem;
  height: auto;
  margin-left: 1.703125rem;
  overflow: visible;
}

#blog .swiper-slide {
  position: relative;
  /*margin-top: .520833rem;*/
  /* width: 6.25rem; */
  /*height: 2.34375rem;*/
  height: auto;
  /* border: green solid 0.005208rem; */
  /* z-index: 0; */
}

#blog .swiper-wrapper {
  align-items: center;
}

#blog .swiper-slide img {
  /* display: block; */
  float: left;
  width: 3.286458rem;
  /*min-height: 2.34375rem;*/
  height: auto;
}

#blog .swiper-slide .text {
  /* width: 2.8rem; */
  margin-left: 0.270833rem;
  min-height: 2.34375rem;
  height: auto;

  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#blog .blog-swiper-pagination {
  position: absolute;
  left: 3.125rem;
  bottom: .3125rem;
  width: 0.5rem;
}

#blog .blog-swiper-pagination span {
  margin-left: 0.078125rem;
  float: left;
}

#blog .swiper-pagination-bullet:focus {
  outline: none;
  border: 0px;
}

#blog .swiper-pagination-bullet {

  padding-top: 0.15625rem;
  width: 0.078125rem;
  height: 0.078125rem;
  background: url(../../assets/img/PC/Commen/Unactive.png) no-repeat center;
  background-size: 0.078125rem, 0.078125rem;
}

#blog .swiper-pagination-bullet-active {
  background: url(../../assets/img/PC/Commen/active.png) no-repeat center;
  background-size: 0.078125rem, 0.078125rem;
}

#blog .swiper-slide .text h1 {
  text-align: left;
  margin-top: 0.1683rem;
  font-size: 20PX;
  margin-bottom: 0.1683rem;
  font-weight: 600;
  width: max-content;
  max-width: 2.640625rem;
  color: #707070;

}

#blog .swiper-slide .text p {
  text-align: left;
  font-size: 14PX;
  color: #707070;
  margin-top: 0.083333rem;
  max-width: 2.640625rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

#blog .swiper-slide .text p:last-child{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

#blog .swiper-slide .text .more {
  cursor: pointer;
  display: block;
  width: 60PX;
  height: 26PX;
  text-align: center;
  background-color: #ffb15b;
  margin-top: 0.15625rem;
  border-radius: 1.5rem;
  font-family: Montserrat;
  font-size: 14PX;
  text-align: center;
  /*line-height: 0.192708rem;*/
  line-height: 26PX;
  letter-spacing: 0px;
  color: #ffffff;
}

#blog .big-title {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -20%);
  font-size: 1.239583rem;
  color: #f8f8f8;
  z-index: 0;
}

#blog .small-title {
  /*position: absolute;*/
  /*height: 0.260417rem;*/
  /*top: 0.625rem;;*/
  /*left: 5.244792rem;*/
  width: fit-content;
  font-size: 28PX;
  font-weight: 100;
  border-bottom: #febb6f solid 0.025417rem;
  padding-bottom: .01625rem;
  z-index: 0;
}

#blog .small-title-PH {
  /*position: absolute;*/
  /*height: 0.260417rem;*/
  /*top: 0.625rem;;*/
  /*left: 5.244792rem;*/
  width: fit-content;
  font-size: 28PX;
  font-weight: 100;
  border-bottom: #febb6f solid 0.025417rem;
  padding-bottom: .01625rem;
  z-index: 0;
}

.bolg-card-info {
  display: flex;
  align-items: center;
  height: auto;
}

.swiper-container-fade .swiper-slide {
  opacity: 0 !important;
}

.swiper-container-fade .swiper-slide-active {
  opacity: 1 !important;
}

.swiper-button-prev:after, .swiper-button-next:after {
  display: none;
}

#blog .swiper-button-prev, #blog .swiper-button-next {
  display: none;
}

.swiper-button-prev {
  background: url("../../assets/img/PC/Commen/Left_Switch.png") no-repeat center;
  background-size: .6125rem;
}

.swiper-button-next {
  background: url("../../assets/img/PC/Commen/Right_Switch.png") no-repeat center;
  background-size: .6125rem;
}


</style>