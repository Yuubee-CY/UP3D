<template>
  <div class="UPCAD_body6">
    <img v-lazy="require('../../../assets/img/PC/Product/product_info/UPCAD/body_pic5.png')">
    <div class="content">
      <div class="card" v-for="(item,index) in lang2.card" :key="index">
        <h1>{{ item.title }}</h1>
        <p v-html="item.content"></p>
      </div>
    </div>

    <div class="content content-PH">
      <swiper :options="swiperOptions">
        <swiper-slide class="card" v-for="(item,index) in lang2.card" :key="index">
          <img v-lazy="imgUrl[index]" :key="imgUrl[index]">
          <h1>{{ item.title }}</h1>
          <p v-html="item.content"></p>
        </swiper-slide>
        <div class="swiper-pagination-upcad" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      imgUrl: [
        require('../../../assets/img/PC/Product/product_info/UPCAD/silde_pic1.png'),
        require('../../../assets/img/PC/Product/product_info/UPCAD/silde_pic2.png'),
        require('../../../assets/img/PC/Product/product_info/UPCAD/silde_pic3.png')
      ],
      swiperOptions: {
        // slidesPerView : 2,
        //  spaceBetween: 1000,
        pagination: {
          el: '.swiper-pagination-upcad',
          type: 'progressbar',
          clickable: true,
        },//这样写小圆点就有了
        // loop: true,
        observer: true,
        observeParents: true,
        hide: true
      },
    }
  },
}
</script>


<style scoped>

.UPCAD_body6 {
  position: relative;
  width: 10rem;
  height: auto;
  margin-bottom: .520833rem;
  display: flex;
  flex-direction: column;
}

#UPCAD img {
  display: block;
  width: 10rem;
  height: 4.854167rem;
}

.UPCAD_body6 .content {
  width: 10rem;
  height: auto;
  background-color: #dbdbdb;
  padding-bottom: .3125rem;
  margin-top: -.5625rem;
}

.UPCAD_body6 .content .card {
  float: left;
  width: 2.9rem;
  height: auto;
  padding-left: .104167rem;
}

.UPCAD_body6 .content .card:nth-child(1) {
  margin-left: .65625rem;
}

.UPCAD_body6 .content .card h1 {
  width: 2.135417rem;
  /*font-size: 0.125rem;*/
  /*line-height: 0.239583rem;*/
  font-size: 24PX;
  font-weight: 100;
  color: #343434;
}

.UPCAD_body6 .content .card p {
  width: 2.135417rem;
  /*font-size: 0.104167rem;*/
  /*line-height: 0.166667rem;*/
  font-size: 16PX;
  margin-top: .4rem;
  color: #343434;
}

.UPCAD_body6 .content-PH {
  display: none;
}

@media (max-width: 1024px) {
  .UPCAD_body6 .content .card h1 {
    font-size: 18PX;
  }

  .UPCAD_body6 .content .card p {
    font-size: 14PX;
  }

}

@media (max-width: 768px) {
  .UPCAD_body6 .content .card h1 {
    font-size: 16PX;
  }
  .UPCAD_body6 .content .card p {
    font-size: 12PX;
  }
}

@media (max-width: 576px) {

  .UPCAD_body6 {
    height: auto;
  }

  .UPCAD_body6 .content {
    display: none;
  }

  #UPCAD .UPCAD_body6 > img {
    display: none;
  }

  .UPCAD_body6 .content.content-PH {
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 1.5rem 0;
  }

  .UPCAD_body6 .content-PH .card {
    padding: .6125rem 0;
    margin: 0;
    height: auto;
  }

  .UPCAD_body6 .content-PH .card:nth-child(1) {
    padding: 0;
    margin: 0;
  }

  #UPCAD .content-PH img {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }

  .UPCAD_body6 .swiper-container-horizontal > .swiper-pagination-progressbar,
  .UPCAD_body6 .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    top: auto;
    bottom: 0;
    height: .04125rem;
  }

  .UPCAD_body6 .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: #FEBB6F;
  }

  .UPCAD_body6 .content .card h1 {
    /*font-size: .5125rem;*/
    font-size: 24PX;
    font-weight: 100;
    line-height: normal;
    margin: 0 auto;
    padding: 0;
    margin-top: .8333rem;
    margin-bottom: .6375rem;
    width: fit-content;
    text-align: center;
  }

  .UPCAD_body6 .content .card p {
    width: fit-content;
    /*font-size: .28125rem;*/
    font-size: 14PX;
    font-weight: 100;
    color: #959595;
    margin: 0 auto;
    padding: 0;
    /*margin-bottom: .4375rem;*/
    line-height: normal;
  }
}

</style>
