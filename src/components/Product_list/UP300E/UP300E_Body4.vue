<template>
  <div class="UP300E_Body4">
    <h1> {{ lang2.title }}</h1>
    <div class="content">
      <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP300e/UP300e.png')">
      <!--      <swiper ref="SwitchCard" :options="SwitchCard">-->
      <!--        <swiper-slide>-->
      <div class="card">
        <div class="par-item" v-for='(item ,index) in lang2.left_text' :key="'index'+index">
          <p class="left_text info">
            <span>{{ item }}</span>
            <s class="dotted"></s>
          </p>
          <!--              <p v-for='(item ,index) in lang2.right_text' :key="index">{{ item }}</p>-->
          <p class="right_text info">{{ lang2.right_text[index] }}</p>
        </div>
        <!--            <div class="left_text info">-->
        <!--              <P v-for='(item ,index) in lang2.left_text' :key="index">-->
        <!--                <span>{{ item }}</span>-->
        <!--                <s class="dotted"></s>-->
        <!--              </P>-->
        <!--            </div>-->
        <!--            <div class="right_text info">-->
        <!--              <P v-for='(item ,index) in lang2.right_text' :key="index">{{ item }}</P>-->
        <!--            </div>-->
      </div>
      <!--        </swiper-slide>-->

      <!--        <swiper-slide>-->
      <!--          <div class="card">-->
      <!--            <div class="left_text info">-->
      <!--              <P v-for='(item ,index) in lang2.left_text' :key="index">{{ item }}</P>-->
      <!--            </div>-->
      <!--            <div class="right_text info">-->
      <!--              <P v-for='(item ,index) in lang2.right_text' :key="index">{{ item }}</P>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </swiper-slide>-->
      <!--      </swiper>-->
      <!--      <div class="swiper-button-next"></div>-->
      <!-- <div class="arrow"><p class="el-icon-arrow-right" ></p></div>     -->
    </div>
  </div>

</template>

<script>
import $ from "jquery";

export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      // SwitchCard: {
      //   //    pagination:{
      //   //    el:'.swiper-pagination',
      //   //    Type : 'fraction',
      //   //    clickable:true,
      //   // },//这样写小圆点就有了
      //   loop: true,
      //   speed: 1000,
      //   autoplay: {
      //     //隔2000ms切换一次
      //     delay: 3000,
      //     autoplay: true,
      //     disableOnInteraction: false,
      //   },
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   observer: true,
      //   observeParents: true,
      // },


    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.addDot()
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      this.addDot()
    })
  },
  methods: {
    addDot() {
      let resultWidth = []
      $(".left_text span").each((index, val) => {
        resultWidth.push($(".left_text").width() - val.offsetWidth)
      })
      resultWidth.forEach((val, idx) => {
        $("s")[idx].style.width = (val - 5) + 'px'
        $("s")[idx].style.left = $(".left_text").width() - $("s")[idx].offsetWidth + 'px'
      })
    }
  },
}
</script>


<style>

.UP300E_Body4 {
  position: relative;
  width: 10rem;
  height: auto;
  margin: auto;
  margin-top: 0.447917rem;
  background-color: #f8f8f8;
  display: grid;
  grid-template-rows: auto auto;
  padding-bottom: .3125rem;
  /* border: solid 1px #707070; */
}

.UP300E_Body4 h1 {
  position: absolute;
  top: 0.229167rem;
  left: 1.328125rem;
  font-size: 0.333333rem;
  line-height: 0.333333rem;
  padding-bottom: 0.15625rem;
  border-bottom: #febb6f solid 0.015625rem;
  color: #1e1e1e;
  font-weight: 100;
}

.UP300E_Body4 .content {
  width: 10rem;
  height: auto;
  /* border: red solid .005208rem; */
}

.UP300E_Body4 .content img {
  position: absolute;
  width: 2.814583rem;
  /* height: 3.333333rem; */
  top: 1.4rem;
  left: .8525rem;
}

.UP300E_Body4 .content .line {
  position: absolute;
  top: 0.1rem;
  left: 0.5rem;
  width: 1.7rem;
  height: 1.9rem;
  z-index: -1;
}

.UP300E_Body4 .swiper-container {
  float: right;
  margin-right: 1.328125rem;
  margin-top: 1.442708rem;
  width: 4.90625rem;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0px 1px 23px 0px rgba(0, 0, 0, 0.16);
  /* border: red solid .005208rem;; */
}

.UP300E_Body4 .card {
  width: 4.90625rem;
  min-height: 3.125rem;
  height: auto;
  display: grid;
  grid-template-columns: auto;
  float: right;
  margin-right: 1.328125rem;
  margin-top: 1.442708rem;
  padding: .125rem .2125rem;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 0.02415rem 0.15556rem 0 rgba(0, 0, 0, 0.16);
}

.UP300E_Body4 .par-item {
  display: flex;
}

.UP300E_Body4 .swiper-swiper-wrapper {
  width: 4.90625rem;
  height: 2.8rem;
  border: red solid .005208rem;;
}

.UP300E_Body4 .content .card .info {
  font-size: 0.104167rem;
  line-height: normal;
  z-index: 3;
  color: #707070;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.UP300E_Body4 .content .card .info:last-child {
  color: #ffb15b;
}

.UP300E_Body4 .content .card .left_text {
  float: left;
  text-align: right;
  margin-right: .348958rem;
  width: 20%;
  position: relative;
}

.UP300E_Body4 .content .card .right_text {
  float: right;
  text-align: left;
  width: 80%;
}

.UP300E_Body4 .content .arrow {
  position: absolute;
  right: 0.8rem;
  top: 1.642708rem;
  height: 2.630208rem;
  /* border: red solid .005208rem; */
}

.UP300E_Body4 .content .arrow p {
  font-size: 0.3125rem;
  line-height: 2.630208rem;
  color: #707070;
  /* border: red solid .005208rem; */
}

.UP300E_Body4 .content .card .title {
  display: inline-block;
  font-size: 0.104167rem;
  line-height: 0.260417rem;
  color: #707070;
  width: 0.9rem;
}

/* 控制箭头样式 */
.UP300E_Body4 .swiper-button-next {
  top: 57%
}


/* 控制箭头样式 */
.UP300E_Body4 .swiper-button-prev:after, .UP300E_Body4 .swiper-button-next::after {
  font-size: .291667rem;
  color: black;
}

/* 清除点击样式 */
.UP300E_Body4 .swiper-button-next:focus, .UP300E_Body4 .swiper-button-prev:focus {
  outline: none;
  border: 0px;
}

@media (max-width: 576px) {
  .UP300E_Body4 {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 1.5rem;
    box-sizing: border-box;
    background: none;
  }

  .UP300E_Body4 h1 {
    position: relative;
    height: 0.72833rem;
    /*top: 0.625rem;*/
    /*left: 50%;*/
    /*transform: translate(-50%);*/
    left: auto;
    top: auto;
    font-size: .520833rem;
    font-weight: 100;
    border-bottom: #febb6f solid 0.05rem;
    line-height: normal;
    padding-bottom: .05rem;
    margin-bottom: .5125rem;
  }

  .UP300E_Body4 .content img {
    display: none;
  }

  .UP300E_Body4 .content {
    width: 80%;
    height: 100%;
  }

  .UP300E_Body4 .card {
    float: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    /*margin-top: .6125rem;*/
    /*justify-content: flex-end;*/
    padding: .3125rem 0;
  }

  .UP300E_Body4 .par-item {
    width: 80%;
    margin: 0 auto;
  }

  .UP300E_Body4 .content .card .info {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    text-align: left;
    position: relative;
    line-height: normal;
    font-size: 0.254167rem;
    margin: .2875rem 0;
    margin-left: .18333rem;
    width: 70%;
  }

  .UP300E_Body4 .content .card .left_text {
    width: 55%;
    margin-left: 0;
  }

  .UP300E_Body4 .content .card .info {

  }

  .UP300E_Body4 .content .card .info span {
    padding-right: .125rem;
    box-sizing: border-box;
  }

  .UP300E_Body4 s {
    display: inline-block;
    height: fit-content;
    border-bottom: 1PX dotted black;
    position: absolute;
  }
}

</style>