<template>
  <div class="P53_Body1">
    <div class="card">
      <div class="cd-box" v-for="(item,index) in this.lang2.message" :key="index">
        <div class="cd-img">
          <img v-lazy="item.imgUrl" :key="item.imgUrl">
        </div>
        <h1 class="cd-title" v-html="item.title"></h1>
        <p class="cd-content" v-html="item.content"></p>
      </div>
    </div>

    <swiper class="card-PH" :options="swiperOptions">
      <swiper-slide class="cd-box" v-for="(item,index) in this.lang2.message" :key="index">
        <div class="cd-img">
          <img v-lazy="item.imgUrl" :key="item.imgUrl">
        </div>
        <h1 class="cd-title" v-html="item.title"></h1>
        <p class="cd-content" v-html="item.content"></p>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  name: "P53_Body1",
  props: {
    lang2: {}
  },
  data() {
    return {
      swiperOptions: {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style scoped>
.P53_Body1 {
  position: relative;
  width: 100%;
  height: auto;
  background-image: url("../../../assets/img/PC/Product/product_info/P53/P53_1.png");
}

.card {
  width: 70%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: .3125rem;
  grid-column-gap: .3125rem;
  padding: .5125rem 0;
  box-sizing: border-box;
}

.cd-box {
  /*height: 1.8333rem;*/
}

.cd-img {
  height: .729167rem;
  display: flex;
  align-items: center;
}

.cd-img img {
  width: .364583rem;
  height: auto;
}

.cd-title {
  color: #FEBB6F;
  font-size: .186667rem;
  font-weight: 100;
}

.cd-content {
  margin-top: .07125rem;
  color: white;
  /*font-size: .083333rem;*/
  font-size: 16PX;
  line-height: normal;
}

.card-PH {
  display: none;
}

.swiper-button-prev, .swiper-button-next {
  display: none;
}

@media (max-width: 1024px) {
  .cd-title {
    font-size: 20PX;
  }

  .cd-content {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .cd-title {
    font-size: 16PX;
  }
}

@media (max-width: 576px) {

  .P53_Body1 {
    background: none;
    padding: 1rem 0;
    padding-bottom: 1.3125rem;
  }

  .card {
    display: none;
  }

  .card-PH {
    display: block;
    width: 80%;
    padding: .3125rem 0;
  }

  .cd-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cd-title {
    width: 70%;
    font-size: 18PX;
    margin-bottom: .3125rem;
    color: #343434;
  }

  .cd-content {
    width: 70%;
    /*font-size: .2525rem;*/
    font-weight: 100;
    color: #959595;
  }

  .cd-img {
    width: 70%;
    height: 1.29167rem;
    display: flex;
    align-items: center;
    margin-bottom: .2125rem;
  }

  .cd-img img {
    width: .99rem;
    height: auto;
  }

  .P53_Body1 .swiper-button-prev,
  .P53_Body1 .swiper-button-next {
    display: block;
    top: auto;
    bottom: .3125rem;
    right: 10%;
  }

}

</style>