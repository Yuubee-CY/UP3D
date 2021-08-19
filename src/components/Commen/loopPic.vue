<template>
  <div class="loopPic">
    <swiper ref="loopicmySwiper" :options="loopicmySwiper">
      <swiper-slide>
        <div class="body5">
          <div class="content">
            <h1>{{ lang2.body1.title }}</h1>
            <p>{{ lang2.body1.content }}</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="body6">
          <div class="content">
            <h1>{{ lang2.body2.title }}</h1>
            <p>{{ lang2.body2.content }}</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="body7">
          <div class="content">
            <h1>{{ lang2.body3.title }}</h1>
            <p>{{ lang2.body3.content }}</p>
          </div>
          <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic9.png')">
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="body8">
          <div class="content">
            <h1>{{ lang2.body4.title }}</h1>
            <p>{{ lang2.body4.content }}</p>
          </div>
          <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic10.png')">
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="body9">
          <div class="content">
            <h1>{{ lang2.body5.title }}</h1>
            <p>{{ lang2.body5.content }}</p>
          </div>
          <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic11.png')">
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="body10">
          <div class="content">
            <h1>{{ lang2.body6.title }}</h1>
            <p>{{ lang2.body6.content }}</p>
          </div>
          <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic12.png')">
        </div>
      </swiper-slide>

      <!-- <swiper-slide>
          <div class="body6"><h1>New way of occlusion scan</h1></div>
      </swiper-slide> -->

    </swiper>
    <!--    <div class="swiper-pagination" slot="pagination"></div>-->
    <div class="swiper-button-next swiper-button-prev-loopPic"></div>
    <div class="swiper-button-next swiper-button-next-loopPic"></div>

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
      guidelang: {},
      index: -1,
      loopicmySwiper: {
        // pagination: {
        //   el: '.swiper-pagination',
        //   Type: 'fraction',
        //   clickable: true,
        // },//这样写小圆点就有了
        // loop: true,
        speed: 1000,
        // autoplay: {
        //   //隔2000ms切换一次
        //   delay: 3000,
        //   autoplay: true,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next-loopPic',
          prevEl: '.swiper-button-prev-loopPic',
        },
      },
    }
  },
  computed: {},
  created() {
  },
  mounted() {
  },

  watch: {},

  methods: {}
}
</script>


<style scpoed>

.loopPic .body5 {
  position: relative;
  font-family: Montserrat;
  font-weight: normal;
  width: 10rem;
  height: 4.6875rem;
  background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic7.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.6875rem;
}

.loopPic .body5 .content{
  position: absolute;
  left: 20%;
  bottom: 10%;
}

.loopPic .body5 h1 {
  font-size: 46PX;
  font-weight: 100;
  color: #ffffff;
}

.loopPic .body5 p {
  font-size: 16PX;
  color: #848484;
}

.loopPic .body6 {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
  background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic8.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.6875rem;
}
.loopPic .body6 .content{
  position: absolute;
  left: 20%;
  bottom: 10%;
}
.loopPic .body6 h1 {
  font-size: 46PX;
  color: #ffffff;
}

.loopPic .body6 p {
  font-size: 16PX;
  color: #848484;
}

.loopPic .body7 {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
}

.loopPic .body7 img {
  position: relative;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 5.078125rem;
  height: 3.104167rem;
}

.loopPic .body7 .content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10rem;
  height: 2.83333rem;
  background-color: #f8f8f8;
  z-index: -1;
}

.loopPic .body7 h1 {
  font-size: 46PX;
  margin-top: 1.035417rem;
  margin-left: 5.494792rem;
  color: #343434;
}

.loopPic .body7 p {
  font-size: 16PX;
  margin-top: 0.15625rem;
  margin-left: 5.494792rem;
  color: #848484;
  width: fit-content;
  padding-right: 1.2125rem;
}

.loopPic .body8, .loopPic .body9, .loopPic .body10 {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
}

.loopPic .body8 img, .loopPic .body9 img, .loopPic .body10 img {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
}

.loopPic .body8 .content,
.loopPic .body9 .content,
.loopPic .body10 .content {
  position: absolute;
  top: 1.052083rem;
  left: 2.130208rem;
  /*width: 6rem;*/
  padding-right: .6125rem;
  height: 2.083333rem;
  z-index: 1;
}

.loopPic .body8 h1,
.loopPic .body9 h1,
.loopPic .body10 h1 {
  font-size: 46PX;
  line-height: normal;
  color: #ffffff;
}

.loopPic .body8 p,
.loopPic .body9 p,
.loopPic .body10 p {
  font-size: 16PX;
  margin-top: 0.15625rem;
  color: #ffffff;
}

.loopPic .body10 {
  position: relative;
  width: 10rem;
  height: 3.734375rem;
}

.loopPic .body10 img {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
}

.loopPic .body9 .content {
  position: absolute;
  top: 1.692708rem;
  left: 5.192708rem;
  width: 30%;
}

.loopPic .body10 .content {
  position: absolute;
  top: 1.265625rem;
  left: 2.130208rem;
  width: 30%;
}


.loopPic {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
}

.loopPic .swiper-container {
  width: 10rem;
  height: 4.6875rem;
}

.loopPic .swiper-container .swiper-wrapper {
  width: 10rem;
  height: 4.6875rem;
}


.loopPic .swiper-button-prev-loopPic,
.loopPic .swiper-button-next-loopPic {
  position: absolute;
  left: .46875rem;
  background-size: contain;
  width: calc(var(--swiper-navigation-size) / 36 * 10);
  height: .45rem;
  top: 55%;
  color: #D5D5D5;
  z-index: 2;
}

.loopPic .swiper-button-next-loopPic {
  left: 8.88542rem;
}

/* 控制箭头样式 */
.loopPic .swiper-button-prev-loopPic:after,
.loopPic .swiper-button-next-loopPic::after {
  font-size: .291667rem;
  color: #ffffff;
}

/* 清除点击样式 */
.loopPic .swiper-button-next-loopPic:focus,
.loopPic .swiper-button-prev-loopPic:focus {
  outline: none;
  border: 0px;
}

.loopPic .swiper-pagination {
  display: none;
}

.loopPic .swiper-button-prev-loopPic {
  background: url("../../assets/img/PC/Commen/prev_icon.png") no-repeat;
  /*background-position: 0 0.17rem ;*/
  background-size: contain;
}

.loopPic .swiper-button-next-loopPic {
  background: url("../../assets/img/PC/Commen/next_icon.png") no-repeat;
  /*background-position: 0 0.17rem ;*/
  background-size: contain;
}

@media (max-width: 1024px) {
  .loopPic .body5 h1,
  .loopPic .body6 h1,
  .loopPic .body7 h1,
  .loopPic .body8 h1,
  .loopPic .body9 h1,
  .loopPic .body10 h1{
    font-size: 36PX;
  }

  .loopPic .body5 p,
  .loopPic .body6 p,
  .loopPic .body7 p,
  .loopPic .body8 p,
  .loopPic .body9 p,
  .loopPic .body10 p{
    font-size: 14PX;
  }
}

@media (max-width: 768px) {

  .loopPic .body5 h1 {
    font-size: 30PX;
  }

  .loopPic .body6 h1 {
    font-size: 30PX;
  }

  /*.loopPic .swiper-button-prev-loopPic {*/
  /*  left: 1.25rem;*/
  /*}*/

  /*.loopPic .swiper-button-next-loopPic {*/
  /*  left: auto;*/
  /*  right: 1.25rem;*/
  /*}*/
}

@media (max-width: 576px) {
  .loopPic {
    height: 13rem;
  }

  .loopPic .swiper-pagination {
    display: block;
  }

  .loopPic .swiper-container {
    height: 100%;
  }

  .loopPic .swiper-container .swiper-wrapper {
    height: 100%
  }

  .loopPic .swiper-slide > div {
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    justify-content: space-between;
  }

  .loopPic .swiper-slide > div img {
    margin: 0;
  }

  .loopPic .body5 .content{
    height: 2rem;
    position: absolute;
    top: 40%;
    left: 50%;
    bottom: auto;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .loopPic .body5 h1 {
    margin: 0;
    padding: 0;
    font-size: 28PX;
    font-weight: 100;
    color: #fff;
  }

  .loopPic .body5 p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 14PX;
    font-weight: 100;
  }

  .loopPic .swiper-slide .body6 {
    height: 60%;
    top: 40%;
  }

  .loopPic .body6 .content{
    width: 70%;
    height: 2rem;
    position: absolute;
    top: -45%;
    left: auto;
    bottom: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    white-space: normal;
    text-align: center;
  }
  .loopPic .body6 h1 {
    width: 85%;
    margin: 0;
    padding: 0;
    font-size: 24PX;
    white-space: normal;
    font-weight: normal;
    color: #000;
    text-align: center;
  }

  .loopPic .body7 .content {
    background: none;
    width: 70%;
    position: relative;
    top: 10%;
    transform: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    white-space: normal;
    text-align: center;
  }

  .loopPic .body7 .content h1 {
    margin: 0;
    padding: 0;
    font-size: .6125rem;
  }

  .loopPic .body7 .content p {
    margin: 0;
    padding: 0;
    font-size: 0.254167rem;
  }

  .loopPic .body7 img {
    width: 100%;
    height: auto;
    top: auto;
    left: auto;
    transform: none;
  }

  .loopPic .body8 .content,
  .loopPic .body9 .content,
  .loopPic .body10 .content {
    width: 70%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: normal;
    padding: 0;
  }
  .loopPic .body10 .content{
    top: 25%;
  }

  .loopPic .body8 img,
  .loopPic .body9 img,
  .loopPic .body10 img {
    display: none;
  }

  .loopPic .swiper-slide .body8 {
    background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic10.png);
    background-position: -10.5rem 0;
  }

  .loopPic .swiper-slide .body9 {
    background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic11.png);
    background-position: -3.5rem 0;
  }

  .loopPic .swiper-slide .body10 {
    background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic12.png);
    background-position: -13.75rem 0;
  }

  .loopPic .body8 .content h1,
  .loopPic .body9 .content h1,
  .loopPic .body10 .content h1 {
    font-size: .6125rem;
    font-weight: 100;
    color: #fff;
  }

  .loopPic .body8 .content p,
  .loopPic .body9 .content p,
  .loopPic .body10 .content p {
    font-size: 0.254167rem;
    font-weight: 100;
    line-height: .47125rem;
    color: #fff;
  }

  .loopPic .swiper-button-prev-loopPic {
    left: .5125rem;
  }

  .loopPic .swiper-button-next-loopPic {
    left: auto;
    right: .5125rem;
  }

  .loopPic .swiper-button-prev-loopPic, .loopPic .swiper-button-next-loopPic {
    width: calc(var(--swiper-navigation-size) / 50 * 31);
    height: .75rem;
    top: 50%;
  }
}

@media (max-width: 375px) {
  .loopPic .body6 h1 {
    font-size: 20PX;
  }
}

</style>