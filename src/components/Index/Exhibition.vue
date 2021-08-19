<template>
  <div id="exhibition">
    <div class="exhibition-card">
      <swiper ref="exhibitionSwiper" :options="exhibitionSwiper">
        <swiper-slide v-for="(item, index) in lang.exh_Card" :key="index">
          <div class="ex-card-info">
            <div class='text'>
              <div class="small-title">{{ item.bigTitle }}</div>
              <h1>{{ item.title }}</h1>
              <div class="time">
                <div class="icon-date">
                  <div class="time-icon"></div>
                  <p class="time-text">{{ item.t }}</p>
                </div>
                <div class="icon-clock">
                  <div class="time-icon-clock"></div>
                  <p class="time-text">{{ item.t2 }}</p>
                </div>
              </div>
              <p>{{ item.p }}</p>
              <p>{{ item.p2 }}</p>
              <!--              <a :href="item.url" target="_blank" class="more">{{ item.more }}</a>-->
              <a @click="golocation($event,index)" class="more"
                 :target="item.LinkTarget ? item.LinkTarget : ''">{{ item.more }}</a>
            </div>
            <img v-lazy="item.imgUrl" :key="item.imgUrl">
          </div>
        </swiper-slide>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </swiper>
      <div class="exhibition-swiper-pagination" slot="pagination"></div>
      <div class="big-title">NEWS</div>
    </div>
    <div class="small-title-PH">{{ lang.title }}</div>
    <!-- <img class='clandan' src="../../assets/img/PC/Commen/clandan_icon.png">
    <img class='clock'  src="../../assets/img/PC/Commen/clock_icon.png"> -->
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
      exhibitionSwiper: {
        pagination: {
          el: '.exhibition-swiper-pagination',
          Type: 'fraction',
          clickable: true,

        },//这样写小圆点就有了
        // loop: false,
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
      },
      indexexhibition: {}
    }
  },
  methods: {
    golocation(e, index) {
      if (e.target.target.toString() == '_blank') {
        window.open(this.lang.exh_Card[index].url, "_blank");
      } else {
        if (this.lang.exh_Card[index].url) {
          this.$router.push({path: this.lang.exh_Card[index].url})
        }
      }
    }
  },
  watch: {},

  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
  },
  mounted() {
  }
}
</script>


<style>
#exhibition {
  position: relative;
  font-family: Montserrat;
}

#exhibition .exhibition-card {
  width: 8.177083rem;
  /*height: 3.505208rem;*/
  height: auto;
  padding: .6125rem 0;
  margin-left: 1.822917rem;
  background-color: #ffffff;
  box-shadow: 0px 1px 23px 0px rgba(0, 0, 0, 0.16);
  text-align: right;
  display: flex;
  position: relative;
}

#exhibition .swiper-container {
  width: 6.25rem;
  margin-right: 1.703125rem;
}

#exhibition .swiper-slide {
  position: relative;
  /*margin: .520833rem 0;*/
  /*overflow: hidden;*/
  /*height: 2.575rem;*/
  height: auto;
}

#exhibition .swiper-slide img {
  float: left;
  width: 3.286458rem;
  /*height: 2.34375rem;*/
  height: 100%;
  /*margin-left: 0.270833rem;*/
}

#exhibition .swiper-slide .text {
  margin-left: 0.270833rem;
  min-height: 2.34375rem;
  height: auto;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#exhibition .swiper-button-prev, #exhibition .swiper-button-next {
  display: none;
}

#exhibition .exhibition-swiper-pagination {
  position: absolute;
  right: 3.125rem;
  bottom: .3125rem;
  width: 0.5rem;
}

#exhibition .exhibition-swiper-pagination span {
  margin-left: 0.078125rem;
  float: left;
}

#exhibition .swiper-pagination-bullet:focus {
  outline: none;
  border: 0px;
}

#exhibition .swiper-pagination-bullet {

  padding-top: 0.15625rem;
  width: 0.078125rem;
  height: 0.078125rem;
  background: url(../../assets/img/PC/Commen/Unactive.png) no-repeat center;
  background-size: 0.078125rem, 0.078125rem;
}

#exhibition .swiper-pagination-bullet-active {
  background: url(../../assets/img/PC/Commen/active.png) no-repeat center;
  background-size: 0.078125rem, 0.078125rem;
}

#exhibition .swiper-slide .text h1 {
  text-align: left;
  margin-top: 0.1683rem;
  font-size: 20PX;
  margin-bottom: 0.1683rem;
  font-weight: 600;
  width: max-content;
  max-width: 2.640625rem;
  color: #707070;
}


#exhibition .swiper-slide .text .time {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  vertical-align: middle;
  text-align: left;
  margin-bottom: 0.166667rem;
  color: #707070;
  width: 2.640625rem;
}
#exhibition .swiper-slide .text .time .icon-date,
#exhibition .swiper-slide .text .time .icon-clock{
  display: flex;
  align-items: center;
}
#exhibition .swiper-slide .text .time .time-icon {
  display: inline-block;
  width: .140625rem;
  height: .130208rem;
  background-image: url(../../assets/img/PC/Small_Icon/PC-01.png);
  background-repeat: no-repeat;
  background-size: 6.833333rem, 5.09375rem;
  background-position: -4.302083rem -.15625rem;
  margin-right: .125rem;
}

#exhibition .swiper-slide .text .time .time-text {
  display: inline-block;
  width: max-content;
  /*font-size: .083333rem;*/
  /*line-height: .130208rem;*/

}

#exhibition .swiper-slide .text .time-icon-clock {
  display: inline-block;
  width: .140625rem;
  height: .130208rem;
  background-image: url(../../assets/img/PC/Small_Icon/PC-01.png);
  background-repeat: no-repeat;
  background-size: 6.833333rem, 5.09375rem;
  background-position: -5.177083rem -.15625rem;
  margin-left: .28125rem;
  margin-right: .125rem;
}


#exhibition .swiper-slide .text p {
  text-align: left;
  /* font-size: .083333rem; */
  font-size: 14PX;
  color: #707070;
  /*margin-top: 0.083333rem;*/
  max-width: 2.640625rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}


#exhibition .swiper-slide .text .more {
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
  line-height: 26PX;
  letter-spacing: 0;
  color: #ffffff;
}

#exhibition .big-title {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-30%, -20%);
  font-size: 1.239583rem;
  color: #f8f8f8;
  z-index: 0;
}

#exhibition .small-title-PH {
  width: fit-content;
  font-size: 28PX;
  font-weight: 100;
  border-bottom: #febb6f solid 0.025417rem;
  padding-bottom: .01625rem;
  z-index: 0;
}

#exhibition .small-title {
  /*position: absolute;*/
  /*height: 0.260417rem;*/
  /*top: 0.625rem;*/
  /*left: 2.203125rem;*/
  width: fit-content;
  font-size: 28PX;
  font-weight: 100;
  border-bottom: #febb6f solid 0.025417rem;
  padding-bottom: .01625rem;
  z-index: 0;
}


.ex-card-info {
  display: flex;
  justify-content: space-between;
}

/* #exhibition .clandan{
  position: absolute;
  top: 1.735rem;
  left: 2.223125rem;
  width: 0.140625rem;
  height: 0.130208rem;
}
#exhibition .clock{
  position: absolute;
    top: 1.735rem;
  left: 3.211667rem;
    width: 0.140625rem;
  height: 0.130208rem;
} */
</style>