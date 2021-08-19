<template>
  <div id="About">
    <Aboutbody1 :lang2="lang.About"></Aboutbody1>
    <Aboutbody2 :lang2="lang.About.body2"></Aboutbody2>
    <Aboutbody3 :lang2="lang.About.body3"></Aboutbody3>
    <Aboutbody4 :lang2="lang.About.body4"></Aboutbody4>
    <Aboutbody5 :lang2="lang.About.body5"></Aboutbody5>
    <Aboutbody6 :lang2="lang.About.body6"></Aboutbody6>
  </div>
</template>

<script>
import Aboutbody1 from "@/components/SecondPage/About/About_body1.vue"
import Aboutbody2 from "@/components/SecondPage/About/About_body2.vue"
import Aboutbody3 from "@/components/SecondPage/About/About_body3.vue"
import Aboutbody4 from "@/components/SecondPage/About/About_body4.vue"
import Aboutbody5 from "@/components/SecondPage/About/About_body5.vue"
import Aboutbody6 from "@/components/SecondPage/About/About_body6.vue"

export default {
  props: {
    lang: {},
  },
  components: {
    Aboutbody1,
    Aboutbody2,
    Aboutbody3,
    Aboutbody4,
    Aboutbody5,
    Aboutbody6
  },
  name: 'carrousel',
  data() {
    return {
    }
  },
  metaInfo() {
    return {
      title: this.lang.About.metaInfo.title,
      meta: this.lang.About.metaInfo.meta
    }
  },
  computed: {},
  // created() {
  //   //加载语言包
  //   this.lang=this.$t('About')
  //   },
  // watch:{
  //   //监听语言变化
  //   '$store.state.lang':function() {
  //      this.lang=this.$t('About')
  //     }
  // },

  destroyed: function () {
    //页面消失清理定时器
    clearInterval(this.timer);
    clearInterval(this.timer2);
  },
  methods: {},
}
</script>


<style>

#About {
  font-family: Montserrat;
}

#About .body3 .card {
  float: left;
  width: 1.770833rem;
  height: 4.296875rem;
  border-right: solid .005208rem #707070;
  box-shadow: .067708rem 0.052083rem 0.114583rem 0px rgba(0, 0, 0, 0.11);
  color: #ffffff;
}

#About .body3 .card:last-child {
  border-right: none
}

#About .body3 .card .item {
  width: .854167rem;
  margin: auto;
  margin-top: 1.625rem;
  text-align: center;
  color: #ffffff;

}

#About .body3 .card .item .active {
  text-decoration: none;
  color: orange;
}

#About .body3 .card .item .active2 {
  text-decoration: none;
  color: white;
}


#About .body3 .card:nth-last-child(1) div {
  margin-top: 1.5rem;
}

#About .body3 .card:nth-child(1) div img {
  width: 0.484375rem;
  height: 0.536458rem;
}

#About .body3 .card:nth-child(2) div img {
  width: 0.5rem;
  height: 0.536458rem;
}

#About .body3 .card:nth-child(3) div img {
  width: 0.854167rem;;
  height: 0.546875rem;;
}

#About .body3 .card:nth-child(4) div img {
  width: 0.442708rem;
  height: 0.666667rem;
}

#About .body3 .card div h1 {
  font-size: 0.104167rem;
  margin-top: 0.234375rem;
}

#About .body3 .card div:hover {
  color: orange;
  cursor: pointer;
}


#About .body4 {
  height: 5.916667rem;
  margin-top: 1.208333rem;
  background-color: #f8f8f8;
}

#About .body4 h1 {
  display: block;
  font-weight: normal;
  font-family: Montserrat;
  padding-top: 0.416667rem;
  margin-left: 1.411458rem;
  font-size: 0.208333rem;
  width: 0.619792rem;
  height: 0.260417rem;
  border-bottom: #febb6f solid 0.020833rem;
}

#About .body4 img {
  display: block;
  margin-left: 1.265625rem;
  margin-top: 0.333333rem;
  width: 7.598958rem;
  height: 4.333333rem;
}

#About .body5 {
  position: relative;;
  height: 4.135417rem;
  width: 8.5rem;
  margin: auto;
  /* border: blue solid .005208rem;; */
}

#About .body5 .title {
  position: absolute;
  text-align: center;
  top: .682292rem;
  left: 0.55rem;
  display: block;
  font-size: 0.208333rem;
  width: 1.2rem;
  height: 0.26rem;
  border-bottom: #febb6f solid 0.020833rem;
}

#About .body5 .card {
  float: left;
  width: 1.953125rem;
  height: 4.135417rem;
  /* border: green solid .005208rem;; */
  background-color: white;
}

#About .body5 .card {
  margin-left: 0.18rem;
}

#About .body5 .card:nth-child(1) {
  margin-left: 0.104167rem;
}

#About .body5 .card {
  float: left;
  width: 1.953125rem;
  height: 4.135417rem;
  /* border: green solid .005208rem;; */
  background-color: white;
}

#About .body5 .card div {
  width: 1.515625rem;
  margin: auto;
  margin-top: 1.880208rem;
  text-align: center;
}

#About .body5 .card div h1 {
  font-size: 0.3125rem;
  color: #ffb15b;
}

#About .body5 .card div p {
  font-size: 0.104167rem;
  margin-top: 0.119792rem;
  color: #707070;
}

#About .body6 {
  position: relative;
  height: 3.161458rem;
}

#About .body6 img {
  width: 10rem;
  height: 3.161458rem;
}


#About .body6 h1 {
  position: absolute;
  text-align: center;
  top: 1.453125rem;
  left: 4.416667rem;
  display: block;
  font-size: 0.208333rem;
  color: #ffffff;
  width: 0.666667rem;
  height: 0.26rem;
  padding-bottom: 0.078125rem;
  border-bottom: #e48013 solid 0.020833rem;
}


.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateX(0px);
  transition: all 1s ease;
}

.v-enter-active, .v-leave-active {
  /* opacity: 1; */
  transition: all 1s ease;
}

@media (max-width: 768px) {
  .About_banner {
    width: 10rem;
    height: 10rem;
    background-size: cover;
    background-position: center;
  }

  .About_banner .text {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    text-align: center;
    padding-top: 0;
  }

  .Aboutbody2 {
    width: 100%;
    height: auto;
    position: relative;
  }

  .Aboutbody2 .pic_text {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 1.520833rem;
    /*padding-bottom: .8333rem;*/
  }

  .Aboutbody2 .pic_text .text .title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    /*font-size: .520833rem;*/
    font-size: 26PX;
    text-align: center;
    border-bottom: #febb6f solid 0.05rem;
    padding: 0;
    /*padding-bottom: .125rem;*/
    z-index: 1;
  }

  .Aboutbody2 .pic_text .text {
    width: 100%;
    height: auto;
    line-height: normal;
    padding: 1.23333rem .5125rem;
    padding-bottom: 0;
  }

  .Aboutbody2 .pic_text img {
    width: 100%;
    height: auto;
  }

  #About .guide {
    position: absolute;
    width: fit-content;
    height: auto;
    border-bottom: #d5d5d5 solid 0.010417rem;
    text-align: right;
    top: auto;
    right: auto;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    font-size: .45rem;
  }

  .Aboutbody2 .swiper-button-prev,
  .Aboutbody2 .swiper-button-next {
    width: auto;
  }

  .Aboutbody2 .swiper-button-prev:after,
  .Aboutbody2 .swiper-button-next:after {
    font-size: .45rem;
  }

  .About_body3 {
    width: 100%;
    height: 12rem;
    position: relative;
    margin: auto;
    background-color: #1e1e1e;
    margin-top: 1.23333rem;
    overflow: hidden;
  }

  .About_body3 .content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .About_body3 .card {
    display: flex;
    width: 100%;
    height: 3rem;
    border-right: none;
    border-bottom: solid .005208rem #707070;
    box-shadow: 0.067708rem 0.052083rem 0.114583rem 0 rgba(0, 0, 0, .11);
    color: #ffffff;
  }

  .About_body3 .card .item {
    width: 60%;
    margin: auto;
    text-align: center;
    color: #ffffff;
  }

  .About_body3 .card .item .active2,
  .About_body3 .card .item .active {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }

  .About_body3 .card:nth-child(1) div img {
    width: 1.8rem;
    height: auto;
  }

  .About_body3 .card:nth-child(2) div img {
    width: 1.8rem;
    height: auto;
  }

  .About_body3 .card:nth-child(3) div img {
    width: 3.2rem;
    height: auto;
  }

  .About_body3 .card:nth-child(4) div img {
    width: 1.5rem;
    height: auto;
  }

  .About_body3 .card:nth-last-child(1) div {
    margin: auto;
  }

  .About_body3 .card div h1 {
    position: absolute;
    left: 80%;
    white-space: nowrap;
  }

  .About_body3 .bgimg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 8;
  }

  .About_body4 {
    height: auto;
    padding-top: 1.520833rem;
    margin: 0;
  }

  .About_body4 h1 {
    display: block;
    font-weight: normal;
    margin: 0.416667rem auto;
    text-align: center;
    padding-top: 0;
    /*font-size: .520833rem;*/
    width: fit-content;
    width: -moz-fit-content;
    height: auto;
    /*padding-bottom: .125rem;*/
    border-bottom: #febb6f solid 0.05rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }

  .About_body4 .we-team {
    height: 100%;
  }

  .team-pic img {
    width: 65%;
    height: auto;
    margin: 0 auto;
  }

  .About_body4 .swiper-container {
  }

  .About_body4 .swiper-slide {
    height: 50%;
  }

  .About_body4 .swiper-slide:nth-child(odd) {
    margin-bottom: 0.14493rem;
  }

  .About_body4 .swiper-pagination {
    display: block;
    position: absolute;
    bottom: .15rem;
    font-size: .3125rem;
    color: #707070;
  }

  .About_body4 .we-team > .team-pic {
    display: none;
  }

  .About_body4 .weTeamSilde {
    display: block;
    padding-bottom: .525rem;
  }

  .team-pic .info-list {
    width: 50%;
    height: 70%;
    top: 15%;
    left: 25%;
  }

  .About_body4 .swiper-pagination-bullet {
    margin: 0 .125rem;
  }

  .About_body5 {
    height: auto;
    text-align: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1.520833rem;
  }

  .About_body5 .title {
    /*font-size: .520833rem;*/
    font-size: 30PX;
    height: auto;
    border-bottom: .05rem solid #FEBB6F;
    padding-right: 0;
    left: 50%;
    transform: translate(-50%);
  }

  .About_body5 .card {
    width: 100%;
    height: 2.880208rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .About_body5 .card div {
    margin: 0;
    width: auto;
  }

  .About_body5 .card div h1 {
    /*font-size: 0.6125rem;*/
    font-size: 28PX;
  }

  .About_body6 {
    position: relative;
    height: 7rem;
    background-size: cover;
    background-position: center;
  }

  .About_body6 h1 {
    /*font-size: 0.5125rem;*/
    font-size: 28PX;
    height: auto;
    line-height: normal;
    padding-bottom: .125rem;
  }

  .About_body4 .swiper-button-prev,
  .About_body4 .swiper-button-next {
    display: block;
  }

}

</style>