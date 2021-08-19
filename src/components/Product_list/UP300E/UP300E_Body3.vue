<template>
  <div class="UP300E_Body3">
    <!-- <transition name="playshow"> -->
    <video preload ref="video" src="../../../assets/video/UP400/UP400_CN.mp4" controls="controls"></video>
    <!-- </transition > -->
    <transition name="playshow">
      <div class="bg" ref="bg" v-show="playflag==0">
        <div class="content">
          <p v-html="lang2.content"></p>
          <div @click="play()" class="start-buttom"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>


export default {
  props: {
    lang2: {},
  },
  components: {},

  // name: 'carrousel',
  data() {
    return {
      lang: {},
      playflag: '0'
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },

  watch: {},

  created() {
  },

  mounted() {
  },
  methods: {
    play() {
      this.$refs.video.play();
      this.playflag = 1;
      this.watchpaly = setInterval(this.repaly, 500);
      //   this.$refs.bg.style.display='none' ;
    },
    repaly() {
      if (this.$refs.video.ended == true) {
        this.playflag = 0;
        clearInterval(this.watchpaly);

      }
    }
  },
}
</script>


<style>


.UP300E_Body3 {
  position: relative;
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  margin-top: 0.541667rem;
  padding-top: .27rem;
  padding-bottom: 0.381667rem;
  background-color: #ffffff;
  /* border: solid 1px #707070; */
}

.UP300E_Body3 video {
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  /* border-bottom:  #707070 solid .005208rem; */
}

.UP300E_Body3 .bg {
  position: absolute;
  top: .27rem;
  width: 7.293667rem;
  height: 4.104167rem;
  /* border: red solid .005208rem; */
  background-image: url(../../../assets/img/PC/Product/product_info/UP300P/banner.png);
  background-size: 7.291667rem 4.104167rem;;
}

.UP300E_Body3 .bg .start-buttom {
  width: .390625rem;
  height: .390625rem;
  cursor: pointer;
  background-image: url(../../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -4.34rem -.0rem;
  margin-top: .489583rem;
}


.UP300E_Body3 .bg .content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: .385417rem;
}


.UP300E_Body3 .bg .content p {
  font-weight: lighter;
  /* position:absolute; */
  /* top: 1.052083rem;
  left: 3.046875rem; */
  font-size: 0.208333rem;
  line-height: 0.25rem;
  color: #707070;
}


.playshow-enter,
.playshow-leave-to {
  opacity: 0;
  /* transform: translateY(50px); */
}

.playshow-enter-active, .playshow-leave-active {
  /* opacity: 1; */
  transition: all 1.5s ease;
}

@media (max-width: 576px) {

  .UP300E_Body3{
    width: 100%;
    height: 12rem;
    position: relative;
  }
  .UP300E_Body3 video{
    width: 100%;
    height: 100%;
  }
  .UP300E_Body3 .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -10.35rem;
  }
  .UP300E_Body3 .bg .content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
  .UP300E_Body3 .bg .content p{
    position: absolute;
    top: -1.125rem;
    left: .125rem;
    width: 2.8333rem;
    height: 1.125rem;
    color: white;
    font-size: .2125rem;
    line-height: normal;
  }
  .UP300E_Body3 .bg .start-buttom{
    margin: 0;
    padding: 0;
    /*width: .390625rem;*/
    /*height: .390625rem;*/
    width: 1.125rem;
    height: 1.125rem;
    background-size: 17.04rem;
    background-position: -10.7rem -.0rem;
  }
}

</style>