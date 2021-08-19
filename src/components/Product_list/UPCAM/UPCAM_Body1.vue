<template>
  <div class="UPCAM_body1">

    <div class="content">
      <h1>{{ lang2.big_title }}</h1>
      <p v-html="lang2.big_content"></p>
    </div>
    <div class="message">
      <div class="card" v-for="(item,index) in lang2.message" :key="index" @mouseover="chose(index)"
           @mouseleave="currentIndex=-1">
        <div :class='currentIndex==index?"img_active":"img"'></div>
        <p :class='currentIndex==index?"title_active":"title"' v-html="item.title"></p>
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
    return {
      currentIndex: ''
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
  methods: {
    chose: function (index) {
      this.currentIndex = index;
    },
  },
}
</script>


<style scoped>
.UPCAM_body1 {
  width: 10rem;
  min-height: 2.801042rem;
  height: auto;
  background-repeat: no-repeat;
  background-size: 2.927083rem, 2.958333rem;
  background-position: center;
  background-color: #1e1e1e;
  position: relative;
  padding: .5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.UPCAM_body1 .content {
  float: left;
  width: 2.161458rem;
  font-size: .166667rem;
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 10%;*/
  /*transform: translateY(-50%);*/
}

.UPCAM_body1 .content h1 {
  font-size: .25rem;
  line-height: normal;
  color: #ffffff;
}

.UPCAM_body1 .content p {
  margin-top: .4rem;
  font-size: 14PX;
  line-height: 20PX;
  color: #ffffff;
}

.UPCAM_body1 .message {
  margin-left: .510417rem;
  float: left;
  font-size: .166667rem;
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 35%;*/
  /*transform: translateY(-50%);*/
}

.UPCAM_body1 .message .card {
  float: left;
  width: 1.5625rem;
  height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-left: #7a7676 solid .005208rem;
  margin-left: -.005208rem;
}

.UPCAM_body1 .message .card:last-child {
  border-right: #7a7676 solid .005208rem;
}

.UPCAM_body1 .message .card .img {
  margin: auto;
  margin-top: .45rem;
  width: .416667rem;
  height: .45rem;
  font-size: .104167rem;
  /* border: red solid .005208rem; */
  background-image: url(../../../assets/img/PC/Small_Icon/PC-04.png);
  background-size: 6.473958rem, 2.213542rem;
  background-position-y: -1.8rem;
  background-position-x: -1.035rem;
  background-repeat: no-repeat;
}

.UPCAM_body1 .message .card:nth-child(2) .img {
  background-position-y: -1.78rem;
  background-position-x: -1.62rem;
}

.UPCAM_body1 .message .card:nth-child(3) .img {
  background-position-y: -1.8rem;
  background-position-x: -2.2rem;
}

.UPCAM_body1 .message .card .img_active {
  margin: auto;
  margin-top: .45rem;
  width: .416667rem;
  height: .45rem;
  font-size: .104167rem;
  /* border: red solid .005208rem; */
  background-image: url(../../../assets/img/PC/Small_Icon/PC-04.png);
  background-size: 6.473958rem, 2.213542rem;
  background-position-y: -1.68rem;
  background-position-x: -3.075rem;
  background-repeat: no-repeat;
}

.UPCAM_body1 .message .card:nth-child(2) .img_active {
  background-position-y: -1.63rem;
  background-position-x: -3.66rem;
}

.UPCAM_body1 .message .card:nth-child(3) .img_active {
  background-position-y: -1.62rem;
  background-position-x: -4.24rem;
}


.UPCAM_body1 .message .card .title {
  margin-top: .104167rem;
  /*width: 1.5625rem;*/
  /*font-size: .104167rem;*/
  font-size: 12PX;
  color: #ffffff;
}

.UPCAM_body1 .message .card .title_active {
  margin-top: .104167rem;
  /*width: 1.5625rem;*/
  font-size: 12PX;
  color: orange;
}

@media (max-width: 1024px) {

  .UPCAM_body1{
    flex-direction: column;
  }
  .UPCAM_body1 .content{
    width: 60%;
  }
  .UPCAM_body1 .message{
    margin: 0;
    margin-top: .5125rem;
  }
  .UPCAM_body1 .message .card{
    width: 1.9625rem;
  }
  .UPCAM_body1 .content h1 {
    font-size: 28PX;
    white-space: nowrap;
  }

}

@media (max-width: 576px) {
  .UPCAM_body1 {
    height: auto;
    padding: 1.25rem 0;
    box-sizing: border-box;
    display: block;
  }

  .UPCAM_body1 .content {
    margin: 0;
    padding: 0;
    float: none;
    margin: 0 auto;
    width: 85%;
    margin-bottom: 1.25rem;
    position: relative;
    left: auto;
    top: auto;
    transform: none;
  }

  .UPCAM_body1 .content h1 {
    /*font-size: .5125rem;*/
    font-size: 32PX;
    font-weight: 100;
    line-height: normal;
    margin: 0;
    padding: 0;
    margin-top: .5333rem;
    margin-bottom: .6375rem;
    width: fit-content;
  }

  .UPCAM_body1 .content p {
    width: fit-content;
    font-weight: 100;
    color: #fff;
    margin: 0 auto;
    padding: 0;
  }

  .UPCAM_body1 .message {
    margin: 0 auto;
    padding: 0;
    float: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    left: auto;
    top: auto;
    transform: none;
  }

  .UPCAM_body1 .message .card {
    border: none;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .83333rem;
  }

  .UPCAM_body1 .message .card .title {
    margin-top: .3125rem;
    white-space: nowrap;
    width: fit-content;
    font-size: 12PX;
    text-align: center;
    color: #ffffff;
  }

  .UPCAM_body1 .message .card .title_active {
    margin-top: .3125rem;
    white-space: nowrap;
    width: fit-content;
    font-size: 12PX;
    text-align: center;
    color: orange;
  }

  .UPCAM_body1 .message .card:hover {
    border: none;
  }

  .UPCAM_body1 .message .card .img {
    margin: auto;
    margin-top: 0;
    width: 1.916667rem;
    height: 2.16667rem;
    background-size: 31.125rem, 2.213542rem;
    background-position-y: -8.6525rem;
    background-position-x: -4.999rem;
  }

  .UPCAM_body1 .message .card .img_active {
    margin: auto;
    margin-top: 0;
    width: 1.916667rem;
    height: 2.16667rem;
    background-size: 31.125rem, 2.213542rem;
    background-position-y: -8.05rem;
    background-position-x: -14.81rem;
  }

  .UPCAM_body1 .message .card:nth-child(2) .img {
    background-position-y: -8.54825rem;
    background-position-x: -7.782rem;
  }

  .UPCAM_body1 .message .card:nth-child(2) .img_active {
    background-position-y: -7.85rem;
    background-position-x: -17.6rem;
  }

  .UPCAM_body1 .message .card:nth-child(3) .img {
    background-position-y: -8.54825rem;
    background-position-x: -10.582rem;
  }

  .UPCAM_body1 .message .card:nth-child(3) .img_active {
    background-position-y: -7.69rem;
    background-position-x: -20.4rem;
  }

  .UPCAM_body1 .message .card:last-child {
    border: none;
  }
}

</style>