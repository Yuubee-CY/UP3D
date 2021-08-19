<template>
  <div class="P52_body1">
    <div class="title-box">
      <div class="big_title" v-html="lang2.big_title"></div>
      <p class="end_text" v-html="lang2.end_text"></p>
    </div>

    <div class="card">
      <div class="content" v-for="(item,index) in lang2.message" :key="index">
        <div class="img"></div>
        <p class="title" v-html="item.title">
        </p>
        <p class="message" v-html="item.content">

        </p>
      </div>

    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    lang2: {},
  },
  // name: 'carrousel',
  data() {
    return {}
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


<style scoped>
.P52_body1 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #343434;
  vertical-align: middle;
  padding: .5125rem 0;
}

.P52_body1 .title-box{
  position: relative;
  padding-bottom: .3125rem;
  margin-right: .5125rem;
  height: fit-content;
}

.P52_body1 .big_title {
  position: relative;
  display: inline-block;
  font-family: MontserratBold !important;
  font-size: .260417rem;
  font-weight: normal;
  font-stretch: wider;
  letter-spacing: 0px;
  color: #ffb15b;
  width: 2.604167rem;
  height: fit-content;
}

.P52_body1 .end_text {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(50%);
  font-family: Montserrat;
  font-size: 16PX;
  line-height: 31PX;
  color: #ffb15b;
  text-align: center;
  z-index: 10;

}
.P52_body1 .end_text::before {
  content: '';
  display: block;
  width: 1rem;
  margin-right: 5PX;
  border-bottom: 1PX solid #FEBB6F;
}

.P52_body1 .card {
  display: grid;
  grid-template-columns: 2.1333rem 2.1333rem;
  grid-row-gap: .104167rem;
  grid-column-gap: .3125rem;
  width: auto;
  box-sizing: border-box;
}


.P52_body1 .card .content {
  position: relative;
  float: left;
  width: 2.1333rem;
  height: auto;
  border: solid .005208rem #ffffff;
  margin-top: .208333rem;
  z-index: 9;
  overflow: visible;
  box-sizing: border-box;
  padding-right: .164583rem;
  padding-bottom: .164583rem;
}

.P52_body1 .card .content .img {
  position: absolute;
  /* border:  red .005208rem solid; */
  width: .390625rem;
  height: .390625rem;
  top: -0.19375rem;
  left: .182292rem;
  background-image: url(../../../assets/img/PC/Small_Icon/PC-05.png);
  background-repeat: no-repeat;
  background-size: 2.822917rem, .354167rem;
  background-position-x: -.55rem;
  z-index: 10;
  background-color: #343434;

}

.P52_body1 .card .content:nth-child(2) .img {
  background-position-x: -1.78rem;

}

.P52_body1 .card .content:nth-child(3) .img {
  background-position-x: -1.08rem;
}

.P52_body1 .card .content:nth-child(4) .img {
  background-position-x: -2.48rem;
}


.P52_body1 .card .content .title {
  margin-top: .24583rem;
  margin-left: .182292rem;
  /*font-size: .166667rem;*/
  /*line-height: .359375rem;*/
  font-size: 24PX;
  color: #ffb15b;
}

.P52_body1 .card .content .message {
  margin-top: .108333rem;
  margin-left: .182292rem;
  /*font-size: .083333rem;*/
  /*line-height: .140625rem;*/
  font-size: 14PX;
  color: #ffffff;
}


@media (max-width: 1024px) {
  .P52_body1 .card .content{
    height: auto;
    min-height: 1.510417rem;
    padding: .2125rem;
    box-sizing: border-box;
  }
  .P52_body1 .card .content .img{
    margin: 0;
    padding: 0;
  }
  .P52_body1 .card .content .title{
    margin: 0;
    padding: 0;
    font-size: 20PX;
    line-height: normal;
  }
  .P52_body1 .card .content .message{
    margin: 0;
    padding: 0;
    margin-top: .108333rem;
    line-height: normal;
  }
}

@media (max-width: 576px){
  .P52_body1 {
    position: relative;
    display: inline-flex;
    width: 10rem;
    height: auto;
    background-color: #343434;
    vertical-align: middle;
    padding-bottom: .8333rem;
    flex-direction: column;
    align-items: center;
    padding-top: .8333rem;
  }

  .P52_body1 .title-box{
    border: none;
  }

  .P52_body1 .big_title{
    margin: 0;
    width: fit-content;
    height: auto;
    text-align: center;
    font-size: .6125rem;
    margin-bottom: .125rem;
    border-bottom: none;
  }

  .P52_body1 .end_text{
    font-size: 14PX;
  }
  .P52_body1 .end_text::before{
    width: 2rem;
  }

  .P52_body1 .card{
    margin: 0;
    padding: 0;
    width: 70%;
    grid-template-columns: 100%;
  }
  .P52_body1 .card .content{
    width: 100%;
    padding: .8333rem;
    margin-top: .6125rem;
  }
  .P52_body1 .card .content .title{
    font-size: .4725rem;
    font-weight: 100;
    line-height: normal;
  }

  .P52_body1 .card .content .message{
    /*font-size: .23125rem;*/
    font-size: 12PX;
    font-weight: 100;
    color: white;
    margin: 0;
    margin-top: .3125rem;
    padding: 0;
    line-height: normal;
  }
  .P52_body1 .card .content .img{
    position: absolute;
    width: 1.0625rem;
    height: 1.0625rem;
    top: -0.5rem;
    left: .5182292rem;
    background-size: 7.822917rem;
    background-position-x: -1.55rem;
    z-index: 10;
    background-color: #343434;
  }
  .P52_body1 .card .content:nth-child(even){
    margin: 0;
    margin-top: .6125rem;
  }
  .P52_body1 .card .content:nth-child(2) .img {
    background-position-x: -3.02rem;
  }
  .P52_body1 .card .content:nth-child(3) .img {
    background-position-x: -4.9rem;
    background-position-y: -.1rem;
  }
  .P52_body1 .card .content:nth-child(4 ) .img {
    background-position-x: -6.87rem;
    background-position-y: -.07rem;
  }
}

@media (max-width: 375px) {
  .P52_body1 .card .content .title{
    font-size: 18PX;
  }
}

</style>