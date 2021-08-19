<template>
  <div class="Product_body1">
    <div class="header"></div>
    <p class="title">{{ lang2.big_title }}</p>
    <div class="bigcard">

      <div class="smallcard" v-for="(item,index) in lang2.card" :key="index">
        <h1>{{ item.small_title }}</h1>
        <p class="info" v-html="item.content1"></p>
        <p class="hightlight" v-html="item.content2"></p>
        <img v-lazy='item.img' :key="item.img">
        <div class="bottom">
          <router-link :to='item.url1' class="b">
            <button> {{ item.bt1 }}</button>
          </router-link>
          <router-link :to='item.url2' class="b">
            <button>{{ item.bt2 }}</button>
          </router-link>
        </div>
      </div>

      <swiper :options="swiperOptions">
        <swiper-slide class="smallcard" v-for="(item,index) in lang2.card" :key="index">
          <h1>{{ item.small_title }}</h1>
          <p class="info" v-html="item.content1"></p>
          <p class="hightlight" v-html="item.content2"></p>
          <img v-lazy='item.img' :key="item.img">
          <div class="bottom">
            <router-link :to='item.url1' class="b">
              <button> {{ item.bt1 }}</button>
            </router-link>
            <router-link :to='item.url2' class="b">
              <button>{{ item.bt2 }}</button>
            </router-link>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  // name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },//这样写小圆点就有了
        // loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
    this.langc = this.en;
  },
  mounted() {
  }
}
</script>


<style>
.Product_body1 .header {
  width: .78125rem;
  height: .78125rem;
  overflow: hidden;
  border-width: 0.010417rem;
  margin: auto;
  margin-bottom: 0.104167rem;
  background-image: url(../../assets/img/PC/Commen/dental_teelth.png);
  background-repeat: no-repeat;
  background-size: 5.453125rem, 0.6875rem;
  background-position: 0.052083rem, -0.052083rem;
}

.Product_body1 .title {
  font-family: Montserrat;
  width: 1.5625rem;
  font-size: 0.3125rem;
  line-height: 0.375rem;
  text-align: center;
  color: #1e1e1e;
  border-bottom-width: 0.010417rem;
  border-bottom: #d5d5d5 solid;
  padding-bottom: 0.076458rem;
  margin: auto;
  margin-bottom: .890625rem;
  white-space: nowrap;
}

.Product_body1 .bigcard {
  position: relative;;
  width: 9.166667rem;
  min-height: 3.125rem;
  height: auto;
  margin: auto;
  margin-bottom: .3125rem;
  padding-bottom: .3125rem;
}

.Product_body1 .wbg {
  background-color: #ffffff;
  display: block;
}

.Product_body1 .bigcard h1 {
  width: 4.5rem;
  /*font-size: 0.208333rem;*/
  font-size: 36PX;
  font-weight: 100;
  /*line-height: 0.3rem;*/
  padding-top: 0.630208rem;
  margin-left: 1.114583rem;
  color: #1e1e1e;
}

.Product_body1 .bigcard p{
  width: 40%;
  /*font-size: 0.208333rem;*/
  font-size: 19PX;
  font-weight: normal;
  /*line-height: 0.25rem;*/
  margin-left: 1.114583rem;
  margin-top: .125rem;
  color: #1e1e1e;
}

.Product_body1 .bigcard .smallcard h1 {
  padding-top: 0.3125rem;
  margin-left: 0.338542rem;
}

.Product_body1 .bigcard .smallcard .info {
  width: 45%;
  /*font-size: .083333rem;*/
  font-size: 14PX;
  /*line-height: 0.208333rem;*/
  margin-top: 0.429167rem;
  margin-left: 0.338542rem;
  color: #959595;
}

.Product_body1 .bigcard .smallcard .hightlight {
  /*font-size: .083333rem;*/
  font-size: 14PX;
  /*line-height: 0.458333rem;*/
  margin-left: 0.338542rem;
  color: #959595;
}

.Product_body1 .bigcard .smallcard {
  position: relative;
  float: left;
  width: 4.541667rem;
  min-height: 3.171875rem;
  height: auto;
  background-color: #ffffff;
}

.Product_body1 .bigcard .smallcard:nth-child(2) {
  margin-left: .08rem;
}

.Product_body1 .bigcard .bottom {
  width: 4.5rem;
  margin-top: 0.802083rem;
  margin-left: 1.114583rem;
}

.Product_body1 .bigcard .b button {
  width: auto;
  height: auto;
  background-color: white;
  cursor: pointer;
  border-width: 0.005208rem;
  border-style: solid;
  border-color: #707070;
  border-radius: .344792rem;
  cursor: pointer;
  /*font-size: .0625rem;*/
  font-size: 12PX;
  color: #343434;
  padding: .06125rem .125rem;
  white-space: nowrap;
  box-sizing: border-box;
}

.Product_body1 .bigcard .b button:hover {
  background-color: #FEBB6F;
  border-color: #FEBB6F;
  color: #fff;
}

.Product_body1 .bigcard button:focus {
  outline: none;
}

.Product_body1 .bigcard .b:nth-child(1) button {
  margin-right: 0.15rem;
}

.Product_body1 .bigcard .smallcard .bottom {
  width: 55%;
  margin-top: 0.46875rem;
  margin-left: 0.338542rem;
  position: absolute;
  bottom: 0.45rem;
}

.Product_body1 .bigcard button .more {
  font-size: .0625rem;
  color: #f8f8f8;
}


.Product_body1 .bigcard img {
  position: absolute;
  width: 6.057292rem;
  /*height: 4.34375rem;*/
  top: 0;
  left: 4rem;
  /* border: red solid .005208rem; */
}


.Product_body1 .bigcard .smallcard img {
  position: absolute;
  top: 50%;
  left: 2.291667rem;
  transform: translateY(-50%);
  width: auto;
  height: 2.671875rem;
}

.Product_body1 .bigcard .smallcard .p {
  position: absolute;
  top: 50%;
  left: 2.291667rem;
  transform: translateY(-50%);
  width: auto;
  height: 2.671875rem;
}

.bigcard > .swiper-container {
  display: none;
}

.Product_body1 .swiper-pagination {
  display: none;
}

.Product_body1 .swiper-button-next {
  display: none;
}

.Product_body1 .swiper-button-prev{
  display: none;
}

@media (max-width: 876px) {
  .Product_body1 .bigcard p{
    font-size: 14PX;
  }
}
@media (max-width: 768px) {
  /*.Product_body1 .bigcard{*/
  /*  width: 9.166667rem;*/
  /*  flex-direction: column;*/
  /*}*/
  .Product_body1 .bigcard .smallcard{
    min-height: 3.871875rem;
  }
  /*.Product_body1 .bigcard .smallcard img{*/
  /*  height: 100%;*/
  /*  right: 0;*/
  /*  left: auto;*/
  /*}*/
}

</style>