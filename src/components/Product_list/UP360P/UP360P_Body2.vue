<template>
  <div class="UP360P_body2">
    <p class="header">{{ lang2.title }}</p>
    <div class="info-box">
      <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP400/UP400_pic2.svg')">
      <div class="infocard">
        <div class="infolist">
          <p class="title">70''</p>
          <p class="info">{{ lang2.content[0] }}</p>
        </div>
        <div class="infolist">
          <p class="title">29''</p>
          <p class="info">{{ lang2.content[1] }}</p>
        </div>
        <div class="infolist">
          <p class="title">37''</p>
          <p class="info">{{ lang2.content[2] }}</p>
        </div>
        <div class="infolist">
          <p class="title">20''</p>
          <p class="info">{{ lang2.content[3] }}</p>
        </div>
      </div>
    </div>

    <div class="info-box info-box-PH">
      <div class="text">
        <div class="grap">
          <p class="grap-title">{{ lang2.title }}</p>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic1.svg')"/>
          <span class="num">70" </span>
          <span class="name">{{ lang2.content[0] }}</span>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic2.svg')"/>
          <span class="num">29" </span>
          <span class="name">{{ lang2.content[1] }}</span>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic3.svg')"/>
          <span class="num">37" </span>
          <span class="name">{{ lang2.content[2] }}</span>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic4.svg')"/>
          <span class="num">20" </span>
          <span class="name">{{ lang2.content[3] }}</span>
        </div>
      </div>
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
      langc: {},
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
  },
  mounted() {
  },
  methods: {},
}
</script>


<style scoped>


.UP360P_body2 {
  position: relative;
  width: 10rem;
  height: 3.8rem;
  text-align: center;
  /* border:  red solid .005208rem; */
  /* background-color: #1e1e1e; */
}

.UP360P_body2 .header {
  /*width: 5rem;*/
  /*height: 0.333333rem;*/
  /*font-size: 0.28125rem;*/
  font-size: 36PX;
  margin: 0 auto;
  margin-top: 1.041667rem;
  color: #343434;
  width: 61%;
  text-align: left;
}

.UP360P_body2 .infocard {
  display: flex;
  justify-content: center;
  margin-top: 0.15625rem;
  text-align: left;
}

.UP360P_body2 .infocard .infolist {
  width: 1.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.UP360P_body2 .infocard .infolist .title {
  /* margin-top: 0.15625rem; */
  text-align: left;
  /* width: 1.145833rem; */
  /*font-size: 0.25rem;*/
  /*line-height: 0.244792rem;*/
  font-size: 48PX;
  color: #e48013;
}

.UP360P_body2 .infocard .infolist .info {
  /*font-size: 0.104167rem;*/
  /*line-height: 0.125rem;*/
  font-size: 16PX;
  line-height: normal;
  margin-top: 0.104167rem;
  color: #343434;
  margin-left: 0.04831rem;
}


.UP360P_body2 .info-box {
  margin-top: .833rem;
}
.UP360P_body2 .info-box img{
  width: 5.979167rem;
  height: auto;
}
.UP360P_body2 .info-box .text .grap{
  /*width: 1.666667rem;*/
  width: 2rem;
}
.info-box.info-box-PH {
  display: none;
}

@media (max-width: 1144px) {
  .UP360P_body2 .infocard .infolist .title{
    font-size: 38PX;
  }
  .UP360P_body2 .infocard .infolist .info{
    font-size: 14PX;
  }
}

@media (max-width: 1144px) {
  .UP360P_body2 .infocard .infolist .title{
    font-size: 32PX;
  }
}

@media (max-width: 768px) {
  .UP360P_body2 .header{
    font-size: 28PX;
  }
  .UP360P_body2 .infocard .infolist .title{
    font-size: 28PX;
  }
  .UP360P_body2 .infocard .infolist .info{
    font-size: 14PX;
  }
}


@media (max-width: 576px) {
  .info-box {
    display: none;
  }

  .info-box.info-box-PH  {
    display: block;
    height: 100%;
  }

  .UP360P_body2 {
    width: 100%;
    height: auto;
    /*background: url("../../../assets/img/PC/Product/product_info/UP560/body_pic2_2.png") no-repeat center;*/
    background-size: cover;
    padding: .8333rem 0;
  }

  .UP360P_body2 .header{
    display: none;
  }

  .UP360P_body2 .info-box {
    padding: 0;
    margin: 0;
  }

  .UP360P_body2 .info-box .text {
    /*height: 100%;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*align-items: center;*/
    /*justify-content: space-around;*/
    /*margin: auto;*/
    /*width: max-content;*/
    /*margin-top: .6125rem;*/
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: max-content;
  }

  .UP360P_body2 .info-box img{
    width: auto;
    /*width: 99%;*/
    height: auto;
  }

  .UP360P_body2 .info-box .text .grap{
    float: left;
    text-align: center;
    width: auto;
    margin: 0;
    margin-bottom: .5125rem;
  }

  .UP360P_body2 .info-box .text .grap .num {
    /*font-size: .3125rem;*/
    /*line-height: .296875rem;*/
    font-size: 32PX;
    color: #ffb15b;
  }

  .UP360P_body2 .info-box .text .grap .name {
    /*font-size: .104167rem;*/
    /*line-height: .125rem;*/
    font-size: 14PX;
    font-weight: lighter;
    font-family: Montserrat;
    color: #000;
  }

  .UP360P_body2 .info-box .text .grap .name,
  .UP360P_body2 .info-box .text .grap .num{
    display: block;
    line-height: normal;
    margin-top: .08rem;
  }
  .UP360P_body2 .info-box .text .grap:first-child{
    width: auto;
    margin-top: 0;
  }
  .grap-title{
    color: black;
    /*font-size: .5125rem;*/
    font-size: 30PX;
    white-space: nowrap;
    width: fit-content;
  }
  
}

</style>